const { performance } = require('perf_hooks');

let number = 1e9;

const a = 1;
const b = 1;

const add = (a, b) => a + b;

performance.mark('start');

while (number --) {
	add(a, b);
}

add('foo', 'bar');

performance.mark('end');

performance.measure('performance test', 'start', 'end');

const measure = performance.getEntriesByName('performance test');

console.log(measure);

// node version v8.11.3
// node v8/addFunction.js
// node --trace-opt v8/addFunction.js 追踪优化
// node --trace-deopt v8/addFunction.js 追踪逆优化


// https://v8.dev/docs/builtin-functions
// node --allow-natives-syntax