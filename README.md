# drone-test
Automatic Drone Farmer Coding Problem

# 1. Project Setup
## Prerequisite 
1. Node.js was alredy installed
2. NPM was already installed

## Run following commands to get started
From project home directory
```
$ npm install
```

# 2. How to use Command Line Application
From project home directory, using commands below

1. To check command line manual
```
$ node .
```
The output will looks like:
```
Usage: -w <width>
Usage: -h <height>
Usage: -f <file>

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -w, --width    Width size                                  [number] [required]
  -h, --height   Height size                                 [number] [required]
  -f, --file     Path to file of move info                   [string] [required]
```

2. Example command used
```
$ node . -w 10 -h 5 -f src/move.txt
```
Example Output
```
Width: 10, Height: 5, File: src/move.txt
Current Date Time: 11/27/2021, 4:25:27 PM
Current Location: 7,4
```

# 3. Rules of Drone Move
1. Width and Height were required to set up the land size via arguments **-w**, **-h** as above example command
2. Provide file path via argument **-f** as above example command. Text file (.txt) will store drone moving information includes direction letter and step count. As the example below:
```
R4,D2,D2,R3,U3,D2,L1
```
Explanation:
- R - RIGHT
- L - LEFT
- U - UP
- D - DOWN

e.g. R4 - Move to the right direction 4 steps

3. The output of command will show:
```
Width: 10, Height: 5, File: src/move.txt
Current Date Time: 11/27/2021, 4:25:27 PM
Current Location: 7,4
```
Explanation:
- First line - your inputs
- Current Date Time - output date time
- Current Location - result position of all move in .txt file in format of *horizontal,vertical*
4. The land grid will start from top left corner as 1,1 position. Go to RIGHT position will increase horizontal step. Go to DOWN position will increase vertical step.
5. Default position of drone will be always at block 1,1
6. Unable to move outside the land size. It means if file contains outside move it will show error message.

# 4. How to run test coverage
From the project home directory using the below command:
```
$ npm run test
```
Example Output
```
> drone-test@1.0.0 test /path/to/project/drone-test
> jest --coverage

 PASS  __tests__/droneTestCli.spec.js
  setInput
    ✓ it should return correct input (2 ms)
  getMoveContent
    ✓ it should return move content from file correctly (2 ms)
    ✓ it should return error message when file was not found (1 ms)
  getLocation
    ✓ it should return correct Location (1 ms)
    ✓ it should return correct Location for with space move information (1 ms)
    ✓ it should show error text for move exceed land size horizontally (1 ms)
    ✓ it should show error text for move exceed land size vertically
    ✓ it should show error text for unrecognized move letter
    ✓ it should show error text for NaN step number (1 ms)
  formatCurrentDateTime
    ✓ it should return formatted date time (20 ms)

-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
All files  |     100 |      100 |     100 |     100 |                   
 engine.js |     100 |      100 |     100 |     100 |                   
-----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        0.473 s, estimated 1 s
Ran all test suites.
```

