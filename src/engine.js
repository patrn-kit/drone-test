'use strict';

const fs = require('fs');

// To show what user inputs
function setInput(width, height, file) {
  return `Width: ${width}, Height: ${height}, File: ${file}`;
}

// To get move content from .txt file
function getMoveContent(filePath) {
  let isError = false;
  let move = undefined;
  try {
    move = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    isError = true;
  }
  
  return { move, isError };
}

// To get current location from input
function getLocation(width, height, move) {
  let horizontal = 1;
  let vertical = 1;
  const positions = move.split(',');
  let isError = false;
  let errMsg = undefined;
  for (let pos of positions) {
    pos = pos.trim();
    const direction = pos[0].trim();
    let step = Number(pos.substring(1).trim());
    // console.log('direction: ', direction, ', step:', step);
    const newPosition = calcLocation(horizontal, vertical, direction, step);
    horizontal = newPosition.horizontal;
    vertical = newPosition.vertical;

    // Error Message
    if (horizontal > width || horizontal < 1) {
      isError = true;
      errMsg = 'Your horizontal move was exceed width size.';
      break;
    } else if (vertical > height || vertical < 1) {
      isError = true;
      errMsg = 'Your vertical move was exceed height size.';
      break;
    } else if (newPosition.isError) {
      isError = true;
      errMsg = 'Your direction letter in the move file was incorrect. It should include only R, L, U, D.'
    } else if (isNaN(step)){
      isError = true;
      errMsg = 'Your step count in the move file should be a number.'
    }
  }
  let output = `Current Location: ${horizontal},${vertical}`;
  if (isError && errMsg) {
    output = `Something went wrong, please check your move file again. ERROR: ${errMsg}`;
  }

  return output;
}

// To format and return current date time text
function formatCurrentDateTime(datetime) {
  const formatDateTime = new Date(datetime).toLocaleString();
  return `Current Date Time: ${formatDateTime}`;
}

// To calculate each move
function calcLocation(inputHorizontal, inputVertical, direction, step) {
  let horizontal = inputHorizontal;
  let vertical = inputVertical;
  let isError = false;

  switch (direction) {
    case 'R':
      horizontal = horizontal + step;
      break;
    case 'L':
      horizontal = horizontal - step;
      break;
    case 'U':
      vertical = vertical - step;
      break;
    case 'D':
      vertical = vertical + step;
      break;
    default:
      isError = true;
      break;
  }

  return { horizontal, vertical, isError };
}

module.exports = { formatCurrentDateTime, getLocation, getMoveContent, setInput };