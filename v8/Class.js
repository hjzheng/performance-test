const a = { b: 1, a: 1};
const b = { a: 2, b: 1};

console.log(%HaveSameMap(a, b));

// node --allow-natives-syntax v8/Class.js
// https://v8.dev/blog/fast-properties hidden class