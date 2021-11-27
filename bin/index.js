#!/usr/bin/env node

const yargs = require('yargs');
const { formatCurrentDateTime, getLocation, getMoveContent, setInput } = require('../src/engine')

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
  console.log(setInput(options.width, options.height, options.file));
  console.log(formatCurrentDateTime(currentDateTime));
  console.log(getLocation(options.width, options.height, move));
}
