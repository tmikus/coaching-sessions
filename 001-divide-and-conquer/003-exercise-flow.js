import lodash from 'lodash';

function flowNew(...funcs) {
  const length = funcs.length
  let index = length
  while (index--) {
    if (typeof funcs[index] !== 'function') {
      throw new TypeError('Expected a function')
    }
  }
  return function(...args) {
    let index = 0
    let result = length ? funcs[index].apply(args) : args[0]
    while (++index < length) {
      result = funcs[index].call(result)
    }
    return result
  }
}

function increment(a) {
  return a + 1;
}

console.log(lodash.flow(increment, increment, increment)(1));
console.log(flowNew(increment, increment, increment)(1));
