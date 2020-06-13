//8. Teste se uma função foi definida

const assert = require('assert');

function thereIs() { }

assert.notDeepStrictEqual(typeof (thereIs()), undefined);
