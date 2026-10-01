const assert = require('node:assert');
const { greeting } = require('../src/index');

assert.strictEqual(
  greeting(),
  'Hello from ${{ values.name }}'
);

console.log('All tests passed');
