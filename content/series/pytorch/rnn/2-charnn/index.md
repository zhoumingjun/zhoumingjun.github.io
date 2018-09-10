---
title: "Character-Level RNN"
date: "2018-09-10T08:47:59Z"
tags: ["machine learning","pytorch", "rnn"]
---

# Introduction
The pytorch's official tutorial introduces the character-level RNN
https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html

Here I will implement it by using lstm

# Basic Points
1. Classifying Names is a kind of many-to-one RNN task
2. The Inputs' length are variable  
3. It's better to handle the data in batch to boost the training
4. Use dataset and dataloader to handle the raw data
   

# Details

## Raw data
Download data from https://download.pytorch.org/tutorial/data.zip

## Unicode & ascii
please read my previous post about [unicode](https://zhoumingjun.github.io/note/unicode)    
we will transform the names into NFD (Normalization Form Decomposition) and filter all non-ascii characters

## Dataset and dataloader
The dataset is a helper class to load data.

```python
class NamesDataset(Dataset):
    def __init__(self, data_dir, transforms=[]):
        self.data_dir = data_dir

        all_langs = []
        inputs = []
        labels = []

        for filepath in glob.glob(path.join(data_dir, "*")):
            lang = os.path.splitext(os.path.basename(filepath))[0]
            if not lang in all_langs:
                all_langs.append(lang)

            label = all_langs.index(lang)

            with open(filepath) as f:
                lines = f.readlines()
                inputs += [line.strip() for line in lines]
                labels += [label] * len(lines)

        self.all_langs = all_langs
        self.inputs = inputs
        self.labels = labels
        self.transforms = transforms

    def __len__(self):
        return len(self.inputs)

    def __getitem__(self, idx):

        item = self.inputs[idx]
        for transform in self.transforms:
            item = transform(item)

        return item, self.labels[idx]

    def getLangs(self):
        return self.all_langs
```

## Model
The model is straitforward.
1. use lstm to compute the output
2. use linear to map the output's feature to language classes
3. use crossentrophy(log_softmax + NLLLoss) to do classification
   
*attention, here we use packed sequece as the input* 

```python
class NamesClassifier(torch.nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(NamesClassifier, self).__init__()
        self.input_size = input_size
        self.hidden_size = hidden_size
        self.output_size = output_size

        self.lstm = torch.nn.LSTM(input_size, hidden_size, 1)
        self.linear = torch.nn.Linear(hidden_size, output_size)

    def forward(self, x):
        x, hidden = self.lstm(x)
        output_unpacked, unpack_outputs_length = pad_packed_sequence(x)

        seqs = unpack_outputs_length - 1
        batch = [x for x in range(len(unpack_outputs_length))]
        last_state = output_unpacked[seqs, batch, :].view(-1, self.hidden_size)

        x = self.linear(last_state)
        return F.log_softmax(x, dim=1)
```

## Training
Here we follow the pattern sort-> pack -> rnn to train the model in batch 
refer to [fundamental](https://zhoumingjun.github.io/series/pytorch/rnn/1-Fundamental/)

```python
for epoch in range(10):
    
    # train
    loss_sum = 0;
    nRound = 0
    for i_batch, batch in enumerate(dataloader):

        # zero
        optimizer.zero_grad()

        inputs, labels = batch
        # pre-process
        inputs = [name2tensor(name) for name in inputs]

        inputs_length = [x.size(0) for x in inputs]
        _, indices_sorted = torch.sort(torch.LongTensor(inputs_length), descending=True)
        _, indices_restore = torch.sort(indices_sorted)

        # sort
        inputs_sorted = [inputs[x] for x in indices_sorted]
        labels_sorted = labels[indices_sorted]

        # pack inputs
        pack = pack_sequence(inputs_sorted)

        # rnn
        outputs = model(pack)

        # loss/bp/step
        loss = criterion(outputs, labels_sorted)

        loss.backward()
        optimizer.step()

        loss_sum += loss
        nRound += 1
        if i_batch % 50 == 0:
            print("epoch {} i_batch {} loss {}".format(epoch, i_batch, loss_sum / nRound))
            
    # validate
    with torch.no_grad():
        acc = 0
        for i_batch, batch in enumerate(dataloader):
            inputs, labels = batch
            # pre-process
            inputs = [name2tensor(name) for name in inputs]

            inputs_length = [x.size(0) for x in inputs]
            _, indices_sorted = torch.sort(torch.LongTensor(inputs_length), descending=True)
            _, indices_restore = torch.sort(indices_sorted)

            # sort
            inputs_sorted = [inputs[x] for x in indices_sorted]
            labels_sorted = labels[indices_sorted]

            # pack inputs
            pack = pack_sequence(inputs_sorted)

            # rnn
            outputs = model(pack)

            top_v, topi = torch.topk(outputs, 1)
            acc += (topi.view(1, -1) == labels_sorted).sum().item()
```

Here is the training output

```
epoch 0 i_batch 0 loss 2.9128077030181885
epoch 0 i_batch 50 loss 1.6704312562942505
epoch 0 i_batch 100 loss 1.440101981163025
epoch 0 i_batch 150 loss 1.3050810098648071
epoch 0 acc:12182/16406 
epoch 1 i_batch 0 loss 0.8428565859794617
epoch 1 i_batch 50 loss 0.8336539268493652
epoch 1 i_batch 100 loss 0.7949255108833313
epoch 1 i_batch 150 loss 0.7666547894477844
epoch 1 acc:13227/16406 
epoch 2 i_batch 0 loss 0.6228170990943909
epoch 2 i_batch 50 loss 0.6274971961975098
epoch 2 i_batch 100 loss 0.6237800121307373
epoch 2 i_batch 150 loss 0.6122254729270935
epoch 2 acc:13737/16406 
epoch 3 i_batch 0 loss 0.5636349320411682
epoch 3 i_batch 50 loss 0.5250101685523987
epoch 3 i_batch 100 loss 0.5150720477104187
epoch 3 i_batch 150 loss 0.5117108225822449
epoch 3 acc:14008/16406 
epoch 4 i_batch 0 loss 0.48472052812576294
epoch 4 i_batch 50 loss 0.44357186555862427
epoch 4 i_batch 100 loss 0.4550507664680481
epoch 4 i_batch 150 loss 0.4460631012916565
epoch 4 acc:14387/16406 
epoch 5 i_batch 0 loss 0.225796639919281
epoch 5 i_batch 50 loss 0.39754441380500793
epoch 5 i_batch 100 loss 0.4006364941596985
epoch 5 i_batch 150 loss 0.4059876799583435
epoch 5 acc:14484/16406 
epoch 6 i_batch 0 loss 0.36545485258102417
epoch 6 i_batch 50 loss 0.3650299608707428
epoch 6 i_batch 100 loss 0.3646186292171478
epoch 6 i_batch 150 loss 0.36661288142204285
epoch 6 acc:14699/16406 
epoch 7 i_batch 0 loss 0.42295753955841064
epoch 7 i_batch 50 loss 0.3185514807701111
epoch 7 i_batch 100 loss 0.3292921483516693
epoch 7 i_batch 150 loss 0.3317612409591675
epoch 7 acc:14859/16406 
epoch 8 i_batch 0 loss 0.40569090843200684
epoch 8 i_batch 50 loss 0.28691983222961426
epoch 8 i_batch 100 loss 0.2941666543483734
epoch 8 i_batch 150 loss 0.30278101563453674
epoch 8 acc:14966/16406 
epoch 9 i_batch 0 loss 0.24612517654895782
epoch 9 i_batch 50 loss 0.2607012093067169
epoch 9 i_batch 100 loss 0.2631416916847229
epoch 9 i_batch 150 loss 0.27081555128097534
epoch 9 acc:15141/16406 
```

## Predict

After training, we can predict names' language using the model.
``` python
# do some preidct
for i_batch, batch in enumerate(dataloader):
    input, label = batch
    for idx, input in enumerate(input):
        lang, lang_id = predict(input)
        print("input {}, label {}, predict {}, result: {}".format(
            input, all_langs[label[idx].item()],
            lang,
            lang_id == label[idx].item()))

    break
```

Here is the result
```
input Talypin, label Russian, predict Russian, result: True
input Hamada, label Japanese, predict Japanese, result: True
input Schermer, label Dutch, predict German, result: False
input Kabachev, label Russian, predict Russian, result: True
input Maroun, label Arabic, predict Arabic, result: True
input Close, label Greek, predict Greek, result: True
input Jabykin, label Russian, predict Russian, result: True
input Handal, label Arabic, predict Arabic, result: True
input Veltistov, label Russian, predict Russian, result: True
input Pavlinsky, label Russian, predict Russian, result: True
input Djumabaev, label Russian, predict Russian, result: True
input Balavensky, label Russian, predict Russian, result: True
input O'Meara, label Irish, predict Irish, result: True
input Kalogeria, label Greek, predict Greek, result: True
input Paisar, label Czech, predict Czech, result: True
input Sfakianos, label Greek, predict Greek, result: True
input Jeryapin, label Russian, predict Russian, result: True
input Agoev, label Russian, predict Russian, result: True
input Daher, label Arabic, predict Arabic, result: True
input Barabolya, label Russian, predict Russian, result: True
input Zasuhin, label Russian, predict Russian, result: True
input Zhevlakov, label Russian, predict Russian, result: True
input Babinoff, label Russian, predict Russian, result: True
input Villevalde, label Russian, predict Italian, result: False
input Tchartorizhsky, label Russian, predict Russian, result: True
input Behmetiev, label Russian, predict Russian, result: True
input Plank, label German, predict German, result: True
input Almondinov, label Russian, predict Russian, result: True
input Cuocco, label Italian, predict Italian, result: True
input Pyanov, label Russian, predict Russian, result: True
input Bakhmatov, label Russian, predict Russian, result: True
input Nizhegorodov, label Russian, predict Russian, result: True
input Basara, label Arabic, predict Arabic, result: True
input Haitsin, label Russian, predict Russian, result: True
input Agliullin, label Russian, predict Russian, result: True
input Denzel, label German, predict Russian, result: False
input Jivotovsky, label Russian, predict Russian, result: True
input Lichman, label Russian, predict Russian, result: True
input Awetyan, label Russian, predict Russian, result: True
input Akutagawa, label Japanese, predict Japanese, result: True
input Averkiev, label Russian, predict Russian, result: True
input Luzzatto, label Italian, predict Italian, result: True
input Homa, label Russian, predict Japanese, result: False
input Vilonov, label Russian, predict Russian, result: True
input Avalyan, label Russian, predict Russian, result: True
input Jordan, label German, predict Russian, result: False
input Xing, label Chinese, predict Chinese, result: True
input Tulub, label Russian, predict Russian, result: True
input Gluhov, label Russian, predict Russian, result: True
input Korycan, label Czech, predict Czech, result: True
input Matocha, label Czech, predict Czech, result: True
input Pak, label Korean, predict Korean, result: True
input Hamikoev, label Russian, predict Russian, result: True
input Ichikawa, label Japanese, predict Japanese, result: True
input Balasoglo, label Russian, predict Russian, result: True
input Grossman, label Russian, predict Russian, result: True
input Jaruev, label Russian, predict Russian, result: True
input Gartner, label German, predict Russian, result: False
input Likhodeev, label Russian, predict Russian, result: True
input Bitar, label Arabic, predict Arabic, result: True
input Caro, label Italian, predict Italian, result: True
input Hou, label Chinese, predict Chinese, result: True
input Zhulebin, label Russian, predict Russian, result: True
input Marmazov, label Russian, predict Russian, result: True
input Abdrahimov, label Russian, predict Russian, result: True
input Mar, label Chinese, predict Chinese, result: True
input Accursio, label Italian, predict Italian, result: True
input Aliberti, label Italian, predict Italian, result: True
input Raimondi, label Italian, predict Italian, result: True
input Gulkevich, label Russian, predict Russian, result: True
input Andruhovich, label Russian, predict Russian, result: True
input Kataoka, label Japanese, predict Japanese, result: True
input Adabash, label Russian, predict Russian, result: True
input Zou, label Chinese, predict Chinese, result: True
input Gudoshin, label Russian, predict Russian, result: True
input Marievsky, label Russian, predict Russian, result: True
input Jeltov, label Russian, predict Russian, result: True
input Jukovets, label Russian, predict Russian, result: True
input Hofer, label German, predict German, result: True
input Elensky, label Russian, predict Russian, result: True
input Comtois, label French, predict French, result: True
input Saliba, label Arabic, predict Arabic, result: True
input Deeb, label Arabic, predict Arabic, result: True
input Otyaev, label Russian, predict Russian, result: True
input Fadzaev, label Russian, predict Russian, result: True
input Shalhoub, label Arabic, predict Arabic, result: True
input Jalovenko, label Russian, predict Russian, result: True
input Kruger, label German, predict German, result: True
input Cham, label Arabic, predict Arabic, result: True
input Rojo, label Spanish, predict Spanish, result: True
input Zhen, label Chinese, predict Chinese, result: True
input Lapkin, label Russian, predict Russian, result: True
input Fakhoury, label Arabic, predict Arabic, result: True
input Dehanov, label Russian, predict Russian, result: True
input Grobivker, label Russian, predict Russian, result: True
input Avinovitski, label Russian, predict Russian, result: True
input Likutov, label Russian, predict Russian, result: True
input Valkin, label Russian, predict Russian, result: True
input Raikhert, label Russian, predict Russian, result: True
input Andel, label Dutch, predict Dutch, result: True
```

# The source code 

The soure code can be found on [github](https://github.com/zhoumingjun/pytorch_learning/blob/master/rnn/4.char-rnn.py)