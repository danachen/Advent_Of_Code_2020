let fs = require('fs');
let text = fs.readFileSync('/Users/Dana/Downloads/Advent_Code_2020/input_5.txt').toString('utf-8');
let textByLine = text.split('\n');

let highestId = 0;


for (line of textByLine) {  
  let frontBack = Array.from(Array(128).keys());
  let leftRight = Array.from(Array(8).keys());
  let currentSeatId = findId(line, frontBack, leftRight)
  if (currentSeatId > highestId) {
    highestId = currentSeatId;
  }
  console.log(currentSeatId);
}

function findId(str, frontBack, leftRight) {
  if (str.length === 1) {
    return (frontBack[0] * 8 + leftRight[0]);
  } else if (str[0] === 'F') {
    str = str.slice(1, str.length);
    frontBack = frontBack.splice(0, Math.ceil(frontBack.length / 2));
    // console.log(frontBack, leftRight);
    // console.log(str);
    return (findId(str, frontBack, leftRight));
  } else if (str[0] === 'B') {
    str = str.slice(1, str.length);
    frontBack = frontBack.splice(Math.ceil(frontBack.length / 2) , frontBack.length);
    // console.log(frontBack, leftRight);
    // console.log(str);
    return (findId(str, frontBack, leftRight));
  } else if (str[0] === 'L') {
    str = str.slice(1, str.length);
    leftRight = leftRight.splice(0, Math.ceil(leftRight.length / 2));
    // console.log(frontBack, leftRight);
    // console.log(str);
    return (findId(str, frontBack, leftRight));
  } else if (str[0] === 'R') {
    str = str.slice(1, str.length);
    leftRight = leftRight.splice(Math.ceil(leftRight.length / 2), leftRight.length);
    // console.log(frontBack, leftRight);
    // console.log(str);
    return (findId(str, frontBack, leftRight));
  }
}

console.log(highestId);