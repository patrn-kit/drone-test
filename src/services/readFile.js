'use strict';

const fs = require('fs');

function readFile(path) {
  return fs.readFileSync(path, 'utf8');
}

module.exports = { readFile };
