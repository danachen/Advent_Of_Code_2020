let fs = require('fs');
let text = fs.readFileSync('/Users/Dana/Downloads/Advent_Code_2020/input_5.txt').toString('utf-8');
let textByLine = text.split('\n');

let seatObj = {};

for (line of textByLine) {  
  let frontBack = Array.from(Array(128).keys());
  let leftRight = Array.from(Array(8).keys());
  let currentSeatId = findId(line, frontBack, leftRight)
  let frontBackId = currentSeatId[0];
  let leftRightId = currentSeatId[1];
  if (!seatObj[frontBackId]) {
    seatObj[frontBackId] = [leftRightId];
  } else {
    seatObj[frontBackId].push(leftRightId);
  }
} 

function findId(str, frontBack, leftRight) {
  if (str.length === 0) {
    return ([frontBack[0], leftRight[0]]);
  } else if (str[0] === 'F') {
    str = str.slice(1, str.length);
    frontBack = frontBack.splice(0, Math.ceil(frontBack.length / 2));
    return (findId(str, frontBack, leftRight));
  } else if (str[0] === 'B') {
    str = str.slice(1, str.length);
    frontBack = frontBack.splice(Math.ceil(frontBack.length / 2) , frontBack.length);
    return (findId(str, frontBack, leftRight));
  } else if (str[0] === 'L') {
    str = str.slice(1, str.length);
    leftRight = leftRight.splice(0, Math.ceil(leftRight.length / 2));
    return (findId(str, frontBack, leftRight));
  } else if (str[0] === 'R') {
    str = str.slice(1, str.length);
    leftRight = leftRight.splice(Math.ceil(leftRight.length / 2), leftRight.length);
    return (findId(str, frontBack, leftRight));
  }
}

let seatsToTest = Object.keys(seatObj);
let rowsToCheck = seatsToTest.splice(2, seatsToTest.length - 3);

function findSeat() {
  for (let i = 0; i < rowsToCheck.length; i++) {
    let horizontalSeats = seatObj[rowsToCheck[i]].length;
    console.log(horizontalSeats);
    if (horizontalSeats !== 8) {
      return ([seatObj[rowsToCheck[i]], Number(rowsToCheck[i])*8]);
    }
  }
}

console.log(findSeat());