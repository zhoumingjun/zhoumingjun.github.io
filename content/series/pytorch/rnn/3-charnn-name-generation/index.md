---
title: "Generating Names with a Character-Level RNN"
date: "2018-09-11T02:14:13Z"
tags: ["machine learning","pytorch", "rnn"]
draft: false
---

# Introduction
This is following the idea of https://pytorch.org/tutorials/intermediate/char_rnn_generation_tutorial.html#generating-names-with-a-character-level-rnn

# Task definition
In training phase, It's a kind of many-to-many task.
![task]https://i.imgur.com/JH58tXY.png
The (input, label)  is (name X, X[1:]+"<EOS>"), here we use '-' as <EOS>
e.g.
(Cotton, otton-)
(Alex, lex-)
(Doolin, oolin-)

In prediction phase, we use the result of the last iteration as the input of the current iteration.

# Details

## dataset & dataloader
```python

# dataset
class NamesDataset(Dataset):
    def __init__(self, data_path, transforms=[]):
        inputs = []
        filepath = path.join(data_path)

        with open(filepath) as f:
            lines = f.readlines()
            inputs += [line.strip() for line in lines]

        self.inputs = inputs
        self.transforms = transforms

    def __len__(self):
        return len(self.inputs)

    def __getitem__(self, idx):
        input = self.inputs[idx]
        for transform in self.transforms:
            input = transform(input)
        return input


class UnicodeToAscii(object):
    def __init__(self, letters):
        self.letters = letters

    def __call__(self, s):
        return ''.join(
            c for c in unicodedata.normalize('NFD', s)
            if unicodedata.category(c) != 'Mn'
            and c in self.letters
        )


namesDataset = NamesDataset('./data/names/English.txt', transforms=[UnicodeToAscii(all_letters)])

# dataloader
class NamesClassifier(torch.nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(NamesClassifier, self).__init__()
        self.input_size = input_size
        self.hidden_size = hidden_size
        self.output_size = output_size

        self.lstm = torch.nn.LSTM(input_size, hidden_size, 1)
        self.linear = torch.nn.Linear(hidden_size, output_size)

    def forward(self, x, hidden):
        x, hidden = self.lstm(x, hx=hidden)
        x = x.view(-1, hidden_size)
        x = self.linear(x)
        return F.log_softmax(x, dim=1), hidden

    def initHidden(self):
        return torch.zeros(1, self.hidden_size)


dataloader = DataLoader(namesDataset, batch_size=1, shuffle=True, num_workers=4, drop_last=True)

```

## sample  generation
just use the original code with minor changes

``` python
max_length = 20
def sample(start_letter='A'):
    with torch.no_grad():  # no need to track history in sampling
        input = name2tensor(start_letter).view(-1, 1, input_size)
        output_name = start_letter
        hidden = (torch.zeros(1, 1, hidden_size), torch.zeros(1,1,hidden_size))

        for i in range(max_length):
            output, hidden = model(input,hidden)
            topv, topi = output.topk(1)
            topi = topi[0][0]
            if topi == n_letters - 1:
                break
            else:
                letter = all_letters[topi]
                output_name += letter

            input = name2tensor(letter).view(-1, 1, input_size)

        return output_name


# Get multiple samples from one category and multiple starting letters
def samples(start_letters='ABC'):
    for start_letter in start_letters:
        print(sample(start_letter))

```
## model
The model is different from the last post.
Here we need to return the hidden for the next iteration.

```python
class NamesClassifier(torch.nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(NamesClassifier, self).__init__()
        self.input_size = input_size
        self.hidden_size = hidden_size
        self.output_size = output_size

        self.lstm = torch.nn.LSTM(input_size, hidden_size, 1)
        self.linear = torch.nn.Linear(hidden_size, output_size)

    def forward(self, x, hidden):
        x, hidden = self.lstm(x, hx=hidden)
        x = x.view(-1, hidden_size)
        x = self.linear(x)
        return F.log_softmax(x, dim=1), hidden

    def initHidden(self):
        return torch.zeros(1, self.hidden_size)

```
## training
The training code is straightforward
```python

input_size = n_letters
hidden_size = 50
output_size = input_size

# define model/optimizer/criterion
model = NamesClassifier(input_size, hidden_size, output_size)
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)
criterion = torch.nn.NLLLoss()

for epoch in range(20):

    loss_sum = 0;
    nRound = 0
    for i_batch, batch in enumerate(dataloader):

        inputs = batch

        for idx, input in enumerate(inputs):
            label = input[1:] + all_letters[-1]

            optimizer.zero_grad()

            input = name2tensor(input).view(-1, 1, input_size)
            label = [all_letters.index(x) for x in label]

            output, _ = model(input,  None)
            loss = criterion(output, torch.LongTensor(label))

            loss.backward()
            optimizer.step()

            loss_sum += loss
            nRound += 1

    print("epoch {} i_batch {} loss {}".format(epoch, i_batch, loss_sum / nRound))
    samples()

"""
epoch 0 i_batch 3667 loss 2.161202907562256
Alling
Boule
Coller
epoch 1 i_batch 3667 loss 1.931467890739441
Alling
Brand
Coode
epoch 2 i_batch 3667 loss 1.8524298667907715
Alling
Barring
Cower
epoch 3 i_batch 3667 loss 1.7972185611724854
Allins
Bart
Corrin
epoch 4 i_batch 3667 loss 1.7545592784881592
Allam
Barrer
Corright
epoch 5 i_batch 3667 loss 1.7233166694641113
Allam
Breatt
Crowe
epoch 6 i_batch 3667 loss 1.7019587755203247
Allam
Barris
Colley
epoch 7 i_batch 3667 loss 1.6757022142410278
Allam
Barrett
Corner
epoch 8 i_batch 3667 loss 1.6573164463043213
Allan
Barkin
Coller
epoch 9 i_batch 3667 loss 1.6444448232650757
Allam
Barr
Corrigan
epoch 10 i_batch 3667 loss 1.629043459892273
Allam
Bray
Colley
epoch 11 i_batch 3667 loss 1.618332028388977
Allam
Barr
Colling
epoch 12 i_batch 3667 loss 1.6057300567626953
Allam
Barty
Colley
epoch 13 i_batch 3667 loss 1.600183129310608
Allington
Brand
Colling
epoch 14 i_batch 3667 loss 1.5862054824829102
Allam
Burne
Crowther
epoch 15 i_batch 3667 loss 1.5789239406585693
Allan
Burner
Coll
epoch 16 i_batch 3667 loss 1.5749832391738892
Allam
Barron
Colley
epoch 17 i_batch 3667 loss 1.5670925378799438
Allam
Barr
Cower
epoch 18 i_batch 3667 loss 1.56125009059906
Allam
Barr
Corre
epoch 19 i_batch 3667 loss 1.5633057355880737
Allam
Barr
Collam

"""
```

# The source code 

The soure code can be found on [github](https://github.com/zhoumingjun/pytorch_learning/blob/master/rnn/5.char-rnn-generation.py)

## 散文生成 

[fiction genration](https://github.com/zhoumingjun/pytorch_learning/blob/master/rnn/6.fiction-generation.py)
学习<<荷塘月色>>的结果
epoch 150  loss 0.0017014490440487862
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
恐从了很，可有，而六朝时上，这时候荷塘塘。这路浮起在这是的叶子和花上一路过热闹的，我爱热闹，也爱冷静；爱群居，也爱独处。像今晚上，一个人，背着艳歌去的。有着一些颜色；而叶子却更见风致了。月光如隔了树梢上
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
epoch 200  loss 0.0010049326810985804
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
恐也是一个人静树，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了；妻在屋里拍着闰儿，迷迷糊糊地哼着眠歌。我悄不为月光留下的。树色一例是阴阴，，乍看像一团烟雾；
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
epoch 250  loss 0.0006684782565571368
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
恐始荷塘的，有看像今晚上，一旁，像着睡痕的。路上一旁，是一，的光，花也有一样；妻在屋里拍。塘的，是个人。树色一例是阴阴的，乍看像一团烟雾；但杨柳的丰姿，便在烟雾里也辨得出。树梢上蝉声与水的的蛙声；但热闹
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
