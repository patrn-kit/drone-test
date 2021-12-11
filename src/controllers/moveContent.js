'use strict';

const { readFile } = require ('../services/readFile');

// To get move content from .txt file
function getMoveContent(filePath) {
  let isError = false;
  let move = undefined;
  try {
    move = readFile(filePath);
  } catch (error) {
    isError = true;
  }
  return { move, isError };
}

module.exports = { getMoveContent };
