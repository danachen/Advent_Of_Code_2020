let fs = require('fs');
let text = fs.readFileSync('/Users/Dana/Downloads/Advent_Code_2020/input_6.txt').toString('utf-8');
let textByFamily = text.split('\n\n');
let totalScore = 0;

textByFamily.forEach(family => {
  let familyArr = family.split('\n').join('').split('');
  let familyFilteredStr = findUnique(familyArr).sort();
  let familyScore = familyFilteredStr.length;
  totalScore += familyScore;
})

function findUnique(inputArr) {
  let uniqueArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (uniqueArr.indexOf(inputArr[i]) < 0) {
      uniqueArr.push(inputArr[i]);
    }
  }
  return uniqueArr;
}

console.log(totalScore);