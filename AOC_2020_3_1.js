let fs = require('fs');
let text = fs.readFileSync('/Users/Dana/Downloads/Advent_Code_2020/input_3.txt').toString('utf-8');
let textByLine = text.split('\n');
var totalTrees = 0;
var horizontal = 3;
const lineLength = textByLine[0].length;
for (let i = 1; i < textByLine.length; i++) {
  if (textByLine[i][horizontal % lineLength] == '#') {
    totalTrees += 1;
    console.log(textByLine[i][horizontal % lineLength]);
  }
  horizontal += 3;
}

console.log(textByLine.length);
console.log(totalTrees);