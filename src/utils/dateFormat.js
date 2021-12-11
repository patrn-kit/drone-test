'use strict';

// To format date time string into human readable date time
function getFormatDateTime(dateTimeString) {
  return new Date(dateTimeString).toLocaleString();
}

module.exports = { getFormatDateTime };
