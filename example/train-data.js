// const Perceptron = require('../dist/neuron-core').default
const { NeuronNet, NeuronLayer } = require('../dist/index')

/**
 * input
 */
const input = [[0, 0, 1, 0], [0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]]

/**
 * output
 */
const output = [[0], [0], [1], [1]]

/**
 * training times
 */
const iteration = 1000

/**
 * data ready to predict result
 */
const data = [[1, 1, 1, 1]]

const neuronNet = new NeuronNet(input, output, iteration)
neuronNet.link(new NeuronLayer(4))


console.log(neuronNet)
