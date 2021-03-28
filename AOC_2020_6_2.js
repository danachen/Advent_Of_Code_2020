let fs = require('fs');
const { listenerCount } = require('process');
let text = fs.readFileSync('/Users/Dana/Downloads/Advent_Code_2020/input_6.txt').toString('utf-8');
let textByFamily = text.split('\n\n');

// [[a, b, c]] => length = 1, number of a = 1, number of b = 1, add
// [[a], [b], [c]] -> length = 3, number of a != length
// only need to check the first person, take each element, check if they also exist in another, if not check the next one
// [[a, b], [a, c]]
// [[a], [a], [a], [a]]
// [[b]]

// abc

// a
// b
// c

// ab
// ac

// a
// a
// a
// a

// b
let totalCount = 0;

textByFamily.forEach(family => {
  console.log(family);
  let familyMembers = family.split('\n');
  console.log(familyMembers);
  let familyMemberCount = familyMembers.length; // 3
  console.log(familyMemberCount);
  for (let j = 0; j < familyMembers[0].length; j++) {
    let letterToCheck = familyMembers[0][j];
    let letterCount = 0;
    for (let i = 0; i < familyMemberCount; i++) {
      if (familyMembers[i].indexOf(letterToCheck) > -1) {
        letterCount += 1;
      }
    }
    if (letterCount === familyMemberCount) {
      totalCount += 1;
    }
  }
})

console.log(totalCount); // 3309 is too low
console.log(textByFamily.length);