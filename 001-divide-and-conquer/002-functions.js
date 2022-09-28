// How does apply and call work?
function printA(a) {
  console.log(a);
}

printA(1);
printA.apply(null, [2]);
printA.call(null, 3);

// How does bind work?
const print4 = printA.bind(null, 4);
print4();
print4(5);

// Is found function the same as printA?
console.log('printA === print4:', printA === print4);
