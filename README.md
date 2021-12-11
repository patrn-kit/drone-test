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
$ node . -w 10 -h 5 -f data/move.txt
```
Example Output
```
Width: 10, Height: 5, File: data/move.txt
Current Date Time: 12/7/2021, 2:42:22 PM
Current Location: Column = 10, Row = 5, Drone is heading South
```

# 3. Rules of Drone Move
1. Width and Height were required to set up the land size via arguments **-w**, **-h** as above example command
2. Provide file path via argument **-f** as above example command. Text file (.txt) will store drone moving information as the example below:
```
M,R,L
```
Explanation:
- M - MOVE ahead 1 step
- R - Turn RIGHT 1 step
- L - Turn LEFT 1 step

3. The output of command will show:
```
Width: 10, Height: 5, File: data/move.txt
Current Date Time: 12/7/2021, 2:47:53 PM
Current Location: Column = 3, Row = 2, Drone is heading East
```
Explanation:
- First line - your inputs
- Current Date Time - output date time
- Current Location - result position of all move in .txt file
4. The land grid will start from top left corner at Column = 1, Row = 1 position. Go to the EAST direction of the land will increase horizontal step. Go to the SOUTH direction of the land will increase vertical step.
5. Default position of drone will be always at a position of Column = 1, Row = 1, Drone is heading East
6. Unable to move outside the land size. It means if file contains outside move it will show error message.

# 4. How to run test coverage
From the project home directory using the below command:
```
$ npm run test
```
Example Output
```
> drone-test@1.0.0 test
> jest --coverage

 PASS  __tests__/location.spec.js
 PASS  __tests__/moveContent.spec.js
 PASS  __tests__/information.spec.js
-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------|---------|----------|---------|---------|-------------------
All files        |     100 |      100 |     100 |     100 |                   
 controllers     |     100 |      100 |     100 |     100 |                   
  calculation.js |     100 |      100 |     100 |     100 |                   
  information.js |     100 |      100 |     100 |     100 |                   
  location.js    |     100 |      100 |     100 |     100 |                   
  moveContent.js |     100 |      100 |     100 |     100 |                   
 services        |     100 |      100 |     100 |     100 |                   
  readFile.js    |     100 |      100 |     100 |     100 |                   
 utils           |     100 |      100 |     100 |     100 |                   
  dateFormat.js  |     100 |      100 |     100 |     100 |                   
-----------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        0.701 s, estimated 1 s
Ran all test suites.
```

