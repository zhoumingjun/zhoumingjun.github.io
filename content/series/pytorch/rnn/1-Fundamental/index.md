---
title: "Fundamental"
date: "2018-09-07T10:16:47Z"
tags: ["machine learning","pytorch", "rnn"]
---


# python3

## star operator

## map zip lambda
 
## NDArray Indexing
https://docs.scipy.org/doc/numpy/user/basics.indexing.html


# pytorch


## basic rnn
Refer to https://pytorch.org/docs/stable/nn.html#lstm

Andrej Karpathy’s diagram shows the different pattern in RNN
![RNN](./rnn.jpe)

The following code show the concept about sequence. 
torch.nn.LSTM can handle the sequence automatically, but we can feed it step-by-step also.  


```python
import torch

input_size = 10
hidden_size = 20
num_layers = 1

# model
model = torch.nn.LSTM(input_size, hidden_size, num_layers)

# data
input = torch.ones(4, 1, 10)

# option1: sequence
output, _ = model(input)

# option2: step by step
input_0 = input[0,:,:].view(1,1,10)
input_1 = input[1,:,:].view(1,1,10)
input_2 = input[2,:,:].view(1,1,10)
input_3 = input[3,:,:].view(1,1,10)

output_0, hidden = model(input_0)
output_1, hidden = model(input_1, hidden)
output_2, hidden = model(input_2, hidden)
output_3, hidden = model(input_3 , hidden)

# compare result
print(output)
print(output_0, output_1, output_2,output_3)

print ((output[0]==output_0).sum().item() == hidden_size)
print ((output[1]==output_1).sum().item() == hidden_size)
print ((output[2]==output_2).sum().item() == hidden_size)
print ((output[3]==output_3).sum().item() == hidden_size)
```


## pack pad



https://djosix.github.io/Variable-Sequence-Lengths-for-PyTorch-RNNs/

# refs

https://www.pythonlikeyoumeanit.com/intro.html
 https://djosix.github.io/Variable-Sequence-Lengths-for-PyTorch-RNNs/
 https://medium.com/understand-the-python/understanding-the-asterisk-of-python-8b9daaa4a558