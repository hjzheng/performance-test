const { performance } = require('perf_hooks');

let number = 1e7;

const a = 1;
const b = 1;

const add = (a, b) => a + b;

%NeverOptimizeFunction(add);

performance.mark('start');

while (number --) {
	add(a, b);
}

performance.mark('end');

performance.measure('performance test', 'start', 'end');

const measure = performance.getEntriesByName('performance test');

console.log(measure);

// node version v8.11.3
// node --allow-natives-syntax v8/addFunction-buildinFn.js
// build in function: https://github.com/v8/v8/blob/master/src/runtime/runtime.h