'use strict';

const { formatCurrentDateTime, getLocation, getMoveContent, setInput } = require ('../src/engine');
const fs = require('fs');

jest.mock('fs', () => ({
  readFileSync: jest.fn()
}));

describe('setInput', () => {
  test('it should return correct input', () => {
    const width = 10;
    const height = 5;
    const file = 'src/move.txt';
    expect(setInput(width, height, file)).toEqual(`Width: ${width}, Height: ${height}, File: ${file}`);
  });
});

describe('getMoveContent', () => {
  test('it should return move content from file correctly', () => {
    fs.readFileSync.mockReturnValue('R4,D2,D2,R3,U3');
    const output = { move: 'R4,D2,D2,R3,U3', isError: false };
    expect(getMoveContent('path/to/move.txt')).toEqual(output);
  });

  test('it should return error message when file was not found', () => {
    fs.readFileSync.mockImplementation(() => {
      throw new Error();
    });
    const output = { move: undefined, isError: true };
    expect(getMoveContent('path/to/move.txt')).toEqual(output);
  });
});

describe('getLocation', () => {
  test('it should return correct Location', () => {
    const width = 10;
    const height = 5;
    const move = 'R4,D2,D2,R3,U3';
    expect(getLocation(width, height, move)).toEqual('Current Location: 8,2');
  });

  test('it should return correct Location for with space move information', () => {
    const width = 10;
    const height = 5;
    const move = 'R9 ,D 4, L4';
    expect(getLocation(width, height, move)).toEqual('Current Location: 6,5');
  });

  test('it should show error text for move exceed land size horizontally', () => {
    const width = 10;
    const height = 5;
    const move = 'R10,D4,L4';
    expect(getLocation(width, height, move)).toEqual('Something went wrong, please check your move file again. ERROR: Your horizontal move was exceed width size.');
  });

  test('it should show error text for move exceed land size vertically', () => {
    const width = 10;
    const height = 5;
    const move = 'R9,D5,L4';
    expect(getLocation(width, height, move)).toEqual('Something went wrong, please check your move file again. ERROR: Your vertical move was exceed height size.');
  });

  test('it should show error text for unrecognized move letter', () => {
    const width = 10;
    const height = 5;
    const move = 'R9,F5,L4';
    expect(getLocation(width, height, move)).toEqual('Something went wrong, please check your move file again. ERROR: Your direction letter in the move file was incorrect. It should include only R, L, U, D.');
  });

  test('it should show error text for NaN step number', () => {
    const width = 10;
    const height = 5;
    const move = 'R9,DAA5,L4';
    expect(getLocation(width, height, move)).toEqual('Something went wrong, please check your move file again. ERROR: Your step count in the move file should be a number.');
  });
});

describe('formatCurrentDateTime', () => {
  test('it should return formatted date time', () => {
    const input = 'Sat Nov 27 2021 15:50:33 GMT+0700 (Indochina Time)';
    expect(formatCurrentDateTime(input)).toEqual('Current Date Time: 11/27/2021, 3:50:33 PM')
  });
});