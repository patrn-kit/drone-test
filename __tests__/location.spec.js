'use strict';

const { getLocation } = require('../src/controllers/location');

describe('getLocation', () => {
  test('it should return correct Location case 1', () => {
    const width = 10;
    const height = 5;
    const move = 'M,M,M,R,M,M,L,M,M,L';
    expect(getLocation(width, height, move)).toEqual('Current Location: Column = 7, Row = 3, Drone is heading North');
  });

  test('it should return correct Location case 2', () => {
    const width = 10;
    const height = 5;
    const move = 'R,M,M,M,L,L,M,M,M';
    expect(getLocation(width, height, move)).toEqual('Current Location: Column = 2, Row = 1, Drone is heading North');
  });

  test('it should return correct Location for with space move information', () => {
    const width = 10;
    const height = 5;
    const move = ' M , M,M, R,M,M,L,M,M,L, R, R ';
    expect(getLocation(width, height, move)).toEqual('Current Location: Column = 8, Row = 4, Drone is heading South');
  });

  test('it should show error text for move exceed land size horizontally case 1', () => {
    const width = 10;
    const height = 5;
    const move = 'M,M,M,M,M,M,M,M,M,M';
    expect(getLocation(width, height, move)).toEqual('Something went wrong, please check your move file again. ERROR: Your horizontal move was exceed width size.');
  });

  test('it should show error text for move exceed land size horizontally case 2', () => {
    const width = 10;
    const height = 5;
    const move = 'M,M,M,M,M,M,M,M,M,R,M,M,M,R,M,M,M,M,M,M,M,M,M,M';
    expect(getLocation(width, height, move)).toEqual('Something went wrong, please check your move file again. ERROR: Your horizontal move was exceed width size.');
  });

  test('it should show error text for move exceed land size horizontally case 3', () => {
    const width = 10;
    const height = 5;
    const move = 'R,R';
    expect(getLocation(width, height, move)).toEqual('Something went wrong, please check your move file again. ERROR: Your horizontal move was exceed width size.');
  });

  test('it should show error text for move exceed land size vertically case 1', () => {
    const width = 10;
    const height = 5;
    const move = 'R,M,M,M,M';
    expect(getLocation(width, height, move)).toEqual('Something went wrong, please check your move file again. ERROR: Your vertical move was exceed height size.');
  });

  test('it should show error text for move exceed land size vertically case 2', () => {
    const width = 10;
    const height = 5;
    const move = 'R,M,M,M,L,L,M,M,M,M';
    expect(getLocation(width, height, move)).toEqual('Something went wrong, please check your move file again. ERROR: Your vertical move was exceed height size.');
  });

  test('it should show error text for unrecognized move letter', () => {
    const width = 10;
    const height = 5;
    const move = 'R,A,M';
    expect(getLocation(width, height, move)).toEqual('Something went wrong, please check your move file again. ERROR: Your direction letter in the move file was incorrect. It should include only M, R, L.');
  });
});
