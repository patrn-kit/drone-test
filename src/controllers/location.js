'use strict';

const { calcLocation, calcDirection } = require('./calculation');

// To get current location from input
function getLocation(width, height, move) {
  let horizontal = 1;
  let vertical = 1;
  let direction = 1;
  let directionText = 'East';
  const positions = move.split(',');
  let isError = false;
  let errMsg = undefined;
  for (let pos of positions) {
    pos = pos.trim();
    const directionObj = calcDirection(direction, pos);
    direction = directionObj.direction;
    const newPosition = calcLocation(horizontal, vertical, direction, directionText, pos);
    horizontal = newPosition.horizontal;
    vertical = newPosition.vertical;
    directionText = newPosition.directionText;

    // Error Message
    if (horizontal > width || horizontal < 1) {
      isError = true;
      errMsg = 'Your horizontal move was exceed width size.';
      break;
    } else if (vertical > height || vertical < 1) {
      isError = true;
      errMsg = 'Your vertical move was exceed height size.';
      break;
    } else if (directionObj.isError) {
      isError = true;
      errMsg = 'Your direction letter in the move file was incorrect. It should include only M, R, L.';
    }
  }
  let output = `Current Location: Column = ${horizontal}, Row = ${vertical}, Drone is heading ${directionText}`;
  if (isError && errMsg) {
    output = `Something went wrong, please check your move file again. ERROR: ${errMsg}`;
  }

  return output;
}

module.exports = { getLocation };
