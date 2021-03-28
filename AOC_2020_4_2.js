let fs = require('fs');
let text = fs.readFileSync('/Users/Dana/Downloads/Advent_Code_2020/input_4.txt').toString('utf-8');
let textByLine = text.split('\n\n');
let count = 0;

function validateByr(birthYear) {
  return (Number(birthYear) >= 1920 && Number(birthYear) <= 2002 );
}

function validateIyr(issueYear) {
  return (Number(issueYear) >= 2010 && Number(issueYear) <= 2020 );
}

function validateEyr(expireYear) {
  return (Number(expireYear) >= 2020 && Number(expireYear) <= 2030 );
}

function validateHgt(height) {
  let unit = height.slice(-2,height.length);
  let numbers = height.slice(0, -2);
  if (unit === 'cm') {
    return (numbers >= 150 && numbers <= 193)
  } else if (unit === 'in') {
    return (numbers >= 59 && numbers <= 76)
  }
  return false;
}

function validateHcl(hair) {
  let regex = /^\#[0-9a-f]{6}$/;
  return (regex.test(hair));
}

let eyeColours = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

function validateEcl(eyes) {
  return (eyeColours.indexOf(eyes) > -1);
}

function validatePid(passport) {
  let regex = /^\d{9}$/;
  return (regex.test(passport));
}

for (line of textByLine) {
  let lineArr = line.split(/[\n ]/);
  let obj = {};
  
  for (property of lineArr) {
    let keyValue = property.split(':');
    obj[keyValue[0]] = keyValue[1];
  }

  if (Object.keys(obj).length >= 8) {
    if (validateByr(obj.byr) && validateIyr(obj.iyr) && validateEyr(obj.eyr) && validateHgt(obj.hgt) && validateHcl(obj.hcl) && validateEcl(obj.ecl) && validatePid(obj.pid)) {
      count += 1;
      console.log(obj);
      console.log('yes');
    }
  } else if (Object.keys(obj).length === 7 && !obj.cid){
    if (validateByr(obj.byr) && validateIyr(obj.iyr) && validateEyr(obj.eyr) && validateHgt(obj.hgt) && validateHcl(obj.hcl) && validateEcl(obj.ecl) && validatePid(obj.pid)) {
      count += 1;
      console.log(obj);
      console.log('yes');
    }
  }
} 
console.log(textByLine.length);
console.log(count);