'use strict';

const { getMoveContent } = require('../src/controllers/moveContent');
const fs = require('fs');

jest.mock('fs', () => ({
  readFileSync: jest.fn()
}));

describe('getMoveContent', () => {
  test('it should return move content from file correctly', () => {
    fs.readFileSync.mockReturnValue('M,M,M,R,M,M,L,M,M,L');
    const output = { move: 'M,M,M,R,M,M,L,M,M,L', isError: false };
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
