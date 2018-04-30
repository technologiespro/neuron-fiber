# neuron based in javascript

[![neuron-fiber on NPM](https://img.shields.io/npm/v/neuron-fiber.svg?style=flat-square)](https://www.npmjs.com/package/neuron-fiber)
[![Build Status](https://secure.travis-ci.org/rainlst/neural-network.png?branch=master)](http://secure.travis-ci.org/rainlst/neural-network)

> "You want to explore a forest ,then a tree is a best place to do" - stone

## Getting Started

Follow these steps:

1. [Install](#install)
2. [Usage](#usage)
3. [Algorithm](#algorithm)
4. **[Review Example Code](https://github.com/rainlst/neuron-fiber/tree/master/example)**

## Install

```
$ npm install neuron-fiber --save
```

## Usage

```es6
const Perceptron = require('neuron-fiber')

/**
 * input
 * eg
 * [0, 0, 1, 0]  match output [0]
 * [0, 1, 1, 0] => [0]
 * [1, 0, 1, 0] => [1]
 * [1, 1, 1, 0] => [1]
 * ..
 * each case has one matched output 
 * we should know the realtion between input and output which call weight
 * use neuron.w will show you weight after training data every time 
 * 
 * predict is the function can use weight to generate a output accoding to your training data(input and ouput)
 * 
 * .
 */
const x = [
  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 1, 1, 0]
]

/**
 * output
 */
const y = [
  [0],
  [0],
  [1],
  [1]
]

/**
 * training times
 */
const times = 1000


/**
 * data is ready to be predicted
 */
const data = [[0, 0, 0, 0]]

const neuronNet = new NeuronNet(input, output, iteration)

/**
 * link to more neural layer 
 * <params> the number of neurons
 */

neuronNet
  .link(new NeuronLayer(5))
  .link(new NeuronLayer(3))
  .link(new NeuronLayer(1))

neuronNet.train()

const result = neuronNet.predict(data))


```

## Algorithm
* Define variable  n(Learning rate)  which is produced by deriv sigmoid
* Define variable  Y(result) generated by sigmoid ( 0 or 1)
* Weight update : W(j) = W(j) + delta W(j)
* Delata W(j)= X(j) .* (Y-Y') * n

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 lau stone

