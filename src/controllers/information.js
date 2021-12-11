'use strict';

const { getFormatDateTime } = require('../utils/dateFormat');

// To show what user inputs
function showInput(width, height, file) {
  return `Width: ${width}, Height: ${height}, File: ${file}`;
}

// To show current date time text
function showCurrentDateTime(datetime) {
  const formatDateTime = getFormatDateTime(datetime);
  return `Current Date Time: ${formatDateTime}`;
}

module.exports = { showInput, showCurrentDateTime };
