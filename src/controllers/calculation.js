'use strict';

// To calculate each move
function calcLocation(inputHorizontal, inputVertical, inputDirection, inputDirectionText) {
  let horizontal = inputHorizontal;
  let vertical = inputVertical;
  let direction = inputDirection;
  let directionText = inputDirectionText;
  let isError = false;

  switch (direction) {
    case 1:
      horizontal = horizontal + 1;
      directionText = 'East';
      break;
    case 2:
      vertical = vertical + 1;
      directionText = 'South';
      break;
    case 3:
      horizontal = horizontal - 1;
      directionText = 'West';
      break;
    case 4:
      vertical = vertical - 1;
      directionText = 'North';
      break;
    default:
      isError = true;
      break;
  }

  return { horizontal, vertical, direction, directionText, isError };
}

function calcDirection(currentDirection, position) {
  /*
    Direction of drone was represented by following numbers
    1 - East direction of the land
    2 - South direction of the land
    3 - West direction of the land
    4 - North direction of the land
  */
  const min = 1;
  const max = 4;
  let direction;
  let isError = false;
  switch (position) {
    case 'M':
      direction = currentDirection
      break;
    case 'R':
      direction = currentDirection + 1;
      break;
    case 'L':
      direction = currentDirection - 1;
      break;
    default:
      isError = true;
      break;
  }
  if (direction > max) {
    direction = min;
  } else if (direction < min) {
    direction = max;
  }
  return { direction, isError };
}

module.exports = { calcLocation, calcDirection };
