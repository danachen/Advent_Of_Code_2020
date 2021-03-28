let fs = require('fs');
let text = fs.readFileSync('/Users/Dana/Downloads/Advent_Code_2020/input_3.txt').toString('utf-8');
let textByLine = text.split('\n');

var horizontal = [1, 3, 5, 7, 1];
var vertical = [1, 1, 1, 1, 2];
// var horizontal = [3];
// var vertical = [1];
const lineLength = textByLine[0].length;
var results = [];

// ..##.......
// #...#...#..
// .#....#..#.
// ..#.#...#.#
// .#...##..#.
// ..#.##.....
// .#.#.#....#
// .#........#
// #.##...#...
// #...##....#
// .#..#...#.#

// Go through each horizontal and vertical line
for (let j = 0; j < horizontal.length; j+=1) {
  var totalTrees = 0;
  var verticalMovement = vertical[j];
  var horizontalMovement = 0;
  for (let i = 0; i < textByLine.length; i+=verticalMovement) {
    console.log(textByLine[i]);
    if (textByLine[i][horizontalMovement % lineLength] == '#') {
      totalTrees += 1;
    }
    horizontalMovement += horizontal[j];
  }
  results.push(totalTrees);
}

console.log(textByLine.length);
console.log(results);
console.log(results.reduce((product, current)=> product*current));

// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.

