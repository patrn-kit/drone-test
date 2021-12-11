'use strict';
const { showInput, showCurrentDateTime } = require('../src/controllers/information');

describe('showInput', () => {
  test('it should return correct input', () => {
    const width = 10;
    const height = 5;
    const file = 'src/move.txt';
    expect(showInput(width, height, file)).toEqual(`Width: ${width}, Height: ${height}, File: ${file}`);
  });
});

describe('showCurrentDateTime', () => {
  test('it should return formatted date time', () => {
    const input = 'Sat Nov 27 2021 15:50:33 GMT+0700 (Indochina Time)';
    expect(showCurrentDateTime(input)).toEqual('Current Date Time: 11/27/2021, 3:50:33 PM')
  });
});
