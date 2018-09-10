---
title: "Character-Level RNN"
date: "2018-09-10T08:47:59Z"
tags: ["machine learning","pytorch", "rnn"]
---

# Introduction
The pytorch's official tutorial introduces the character-level RNN
https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html

Here I will implement it by using lstm

# Points
1. Classifying Names is a kind of many-to-one RNN task
2. The Inputs' length are variable  
3. It's better to handle the data in batch to boost the training
4. Use dataset and dataloader to handle the raw data
   

# Task definition
Training data is collection of (name, language)
The task is to preidct the language of the given name

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
epoch 0 i_batch 0 loss 2.942514419555664
epoch 0 i_batch 50 loss 1.760701298713684
epoch 0 i_batch 100 loss 1.5069572925567627
epoch 0 i_batch 150 loss 1.3581050634384155
epoch 0 acc:14758/20074 
epoch 1 i_batch 0 loss 0.8439935445785522
epoch 1 i_batch 50 loss 0.8764864802360535
epoch 1 i_batch 100 loss 0.8679843544960022
epoch 1 i_batch 150 loss 0.836237907409668
epoch 1 acc:15769/20074 
epoch 2 i_batch 0 loss 0.6725496649742126
epoch 2 i_batch 50 loss 0.6784597635269165
epoch 2 i_batch 100 loss 0.6801468729972839
epoch 2 i_batch 150 loss 0.6713106632232666
epoch 2 acc:16419/20074 
epoch 3 i_batch 0 loss 0.7285385131835938
epoch 3 i_batch 50 loss 0.5921918749809265
epoch 3 i_batch 100 loss 0.5902780294418335
epoch 3 i_batch 150 loss 0.5864360928535461
epoch 3 acc:16829/20074 
epoch 4 i_batch 0 loss 0.5711963176727295
epoch 4 i_batch 50 loss 0.5279501676559448
epoch 4 i_batch 100 loss 0.521149218082428
epoch 4 i_batch 150 loss 0.5309893488883972
epoch 4 acc:17058/20074 
epoch 5 i_batch 0 loss 0.5366474390029907
epoch 5 i_batch 50 loss 0.46456900238990784
epoch 5 i_batch 100 loss 0.47316044569015503
epoch 5 i_batch 150 loss 0.4669898450374603
epoch 5 acc:17373/20074 
epoch 6 i_batch 0 loss 0.4217735528945923
epoch 6 i_batch 50 loss 0.4200931489467621
epoch 6 i_batch 100 loss 0.43043628334999084
epoch 6 i_batch 150 loss 0.4396715462207794
epoch 6 acc:17447/20074 
epoch 7 i_batch 0 loss 0.31758126616477966
epoch 7 i_batch 50 loss 0.38675254583358765
epoch 7 i_batch 100 loss 0.399675190448761
epoch 7 i_batch 150 loss 0.4018913507461548
epoch 7 acc:17867/20074 
epoch 8 i_batch 0 loss 0.3606557548046112
epoch 8 i_batch 50 loss 0.33634153008461
epoch 8 i_batch 100 loss 0.34979167580604553
epoch 8 i_batch 150 loss 0.36078399419784546
epoch 8 acc:18013/20074 
epoch 9 i_batch 0 loss 0.31942570209503174
epoch 9 i_batch 50 loss 0.30287066102027893
epoch 9 i_batch 100 loss 0.31636151671409607
epoch 9 i_batch 150 loss 0.33173689246177673
epoch 9 acc:18151/20074 
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
input Purse, label English, predict English, result: True
input Teague, label Irish, predict English, result: False
input Daher, label Arabic, predict Arabic, result: True
input Soma, label Japanese, predict Japanese, result: True
input Mikhail, label Arabic, predict Arabic, result: True
input Pawluk, label Russian, predict Russian, result: True
input Bakaleinikov, label Russian, predict Russian, result: True
input Zhaivoronok, label Russian, predict Russian, result: True
input Fujiwara, label Japanese, predict Japanese, result: True
input Jachikov, label Russian, predict Russian, result: True
input Sardelis, label Greek, predict Greek, result: True
input Yatzenko, label Russian, predict Russian, result: True
input Kabalevsky, label Russian, predict Russian, result: True
input Godo, label Japanese, predict Japanese, result: True
input Imran, label English, predict English, result: True
input Kokkali, label Greek, predict Greek, result: True
input Adam, label Russian, predict English, result: False
input Todorov, label Russian, predict Russian, result: True
input Bastian, label Russian, predict Russian, result: True
input Samson, label French, predict French, result: True
input Bereznitsky, label Russian, predict Russian, result: True
input Bakhmetiev, label Russian, predict Russian, result: True
input Hadad, label Arabic, predict Arabic, result: True
input Sung, label Korean, predict Chinese, result: False
input Oishi, label Japanese, predict Japanese, result: True
input Baidin, label Russian, predict Russian, result: True
input Pavlyuchkov, label Russian, predict Russian, result: True
input Sarkis, label Arabic, predict Arabic, result: True
input Kirwin, label English, predict English, result: True
input Pokhis, label Russian, predict Russian, result: True
input Granitov, label Russian, predict Russian, result: True
input Wirner, label German, predict German, result: True
input Jamburg, label Russian, predict Russian, result: True
input Lowe, label German, predict English, result: False
input Nespola, label Italian, predict Italian, result: True
input Maclean, label Scottish, predict English, result: False
input St martin, label French, predict French, result: True
input Langer, label German, predict English, result: False
input Shaikin, label Russian, predict Russian, result: True
input Podsevalov, label Russian, predict Russian, result: True
input Romano, label Italian, predict Italian, result: True
input Hadad, label Arabic, predict Arabic, result: True
input Hoshino, label Japanese, predict Japanese, result: True
input Morra, label Italian, predict Italian, result: True
input Ashwell, label English, predict English, result: True
input Awad, label Arabic, predict Arabic, result: True
input Okubo, label Japanese, predict Japanese, result: True
input Ametistov, label Russian, predict Russian, result: True
input Jachmenev, label Russian, predict Russian, result: True
input Lodygin, label Russian, predict Russian, result: True
input Vikulov, label Russian, predict Russian, result: True
input Prokoshin, label Russian, predict Russian, result: True
input Deulin, label Russian, predict Russian, result: True
input Zhdankov, label Russian, predict Russian, result: True
input Antyufeev, label Russian, predict Russian, result: True
input Babayan, label Russian, predict Russian, result: True
input Khouri, label Arabic, predict Arabic, result: True
input Dizhbak, label Russian, predict Russian, result: True
input Ogterop, label Dutch, predict Dutch, result: True
input Minitsky, label Russian, predict Russian, result: True
input Dobrynsky, label Russian, predict Russian, result: True
input Mikheev, label Russian, predict Russian, result: True
input Kelly, label Irish, predict English, result: False
input Martoyas, label Russian, predict Greek, result: False
input Koning, label Dutch, predict German, result: False
input Manfredi, label Italian, predict Italian, result: True
input Bakh, label Russian, predict Russian, result: True
input Foran, label English, predict English, result: True
input Nelson, label English, predict English, result: True
input Hapitsky, label Russian, predict Russian, result: True
input To The First Page, label Russian, predict Russian, result: True
input Basara, label Arabic, predict Arabic, result: True
input Coffey, label English, predict English, result: True
input Kenyon, label English, predict English, result: True
input Ichisada, label Japanese, predict Japanese, result: True
input Alves, label Portuguese, predict Spanish, result: False
input Awdiysky, label Russian, predict Russian, result: True
input Lecce, label Italian, predict Italian, result: True
input Gosselin, label French, predict French, result: True
input Rettig, label German, predict German, result: True
input Hudoshin, label Russian, predict Russian, result: True
input Yushkevich, label Russian, predict Russian, result: True
input Anderson, label Scottish, predict English, result: False
input Bassin, label Russian, predict Russian, result: True
input Bavilin, label Russian, predict Russian, result: True
input Altshuler, label Russian, predict German, result: False
input Hafizov, label Russian, predict Russian, result: True
input Holland, label English, predict English, result: True
input Lodyjensky, label Russian, predict Russian, result: True
input Matsura, label Japanese, predict Japanese, result: True
input Kalb, label Arabic, predict Arabic, result: True
input Daniau, label French, predict French, result: True
input Napoletani, label Italian, predict Italian, result: True
input Renov, label Russian, predict Russian, result: True
input Traversini, label Italian, predict Italian, result: True
input Ba, label Arabic, predict Arabic, result: True
input Nakamura, label Japanese, predict Japanese, result: True
input Gimondi, label Italian, predict Italian, result: True
input Lohanov, label Russian, predict Russian, result: True
input Lezhenko, label Russian, predict Russian, result: True

```

# The source code 

The soure code can be found on [github](https://github.com/zhoumingjun/pytorch_learning/blob/master/rnn/4.char-rnn.py)