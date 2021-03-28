let fs = require('fs');
let text = fs.readFileSync('/Users/Dana/Downloads/Advent_Code_2020/input.txt').toString('utf-8');
let numByLine = text.split('\n').map(str => Number(str));

const sum = 2020;

for (let i = 0; i < numByLine.length - 1; i++) {
  for (let j = i + 1; j < numByLine.length; j++) {
    if (numByLine[i] + numByLine[j] == sum) {
      console.log([numByLine[i] * numByLine[j]]);
    }
  }
}
