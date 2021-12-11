#!/usr/bin/env node

const yargs = require('yargs');
const { showCurrentDateTime, showInput } = require('../src/controllers/information');
const { getLocation } = require('../src/controllers/location');
const { getMoveContent } = require('../src/controllers/moveContent');

// Arguments of command line
const options = yargs
 .usage('Usage: -w <width>')
 .option('w', { alias: 'width', describe: 'Width size', type: 'number', demandOption: true })
 .usage('Usage: -h <height>')
 .option('h', { alias: 'height', describe: 'Height size', type: 'number', demandOption: true })
 .usage('Usage: -f <file>')
 .option('f', { alias: 'file', describe: 'Path to file of move info', type: 'string', demandOption: true })
 .argv;

// Get move content from file
const { move, isError } = getMoveContent(options.file);
const currentDateTime = new Date();

// Output to terminal
if (isError) {
  console.log('Unable to find the file. Please check your file path again.');
} else {
  console.log(showInput(options.width, options.height, options.file));
  console.log(showCurrentDateTime(currentDateTime));
  console.log(getLocation(options.width, options.height, move));
}
