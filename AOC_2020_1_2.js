let fs = require('fs');
let text = fs.readFileSync('/Users/Dana/Downloads/Advent_Code_2020/input.txt').toString('utf-8');
let numByLine = text.split('\n').map(str => Number(str));

const sum = 2020;

for (let i = 0; i < numByLine.length - 1; i++) {
  for (let j = i + 1; j < numByLine.length - 1; j++) {
    for (let k = j + 1; k < numByLine.length - 1; k ++) {
      if (numByLine[i] + numByLine[j] + numByLine[k] == sum) {
        console.log([numByLine[i] * numByLine[j] * numByLine[k]]);
      }
    }
  }
}
