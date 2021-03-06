const { performance } = require('perf_hooks');

let number = 1e5;

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

performance.mark('start');

while (number --) {
	const point = new Point();
	point.x = undefined;
	JSON.stringify(point);
}

performance.mark('end');

performance.measure('performance test', 'start', 'end');

const measure = performance.getEntriesByName('performance test');

console.log(measure);

// node version v8.11.3
// node v8/objectProperties.js