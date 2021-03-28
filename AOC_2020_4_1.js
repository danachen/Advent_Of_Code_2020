let fs = require('fs');
let text = fs.readFileSync('/Users/Dana/Downloads/Advent_Code_2020/input_4.txt').toString('utf-8');
let textByLine = text.split('\n\n');
let count = 0;

for (line of textByLine) {
  let lineArr = line.split(/[\n ]/);
  let obj = {};
  
  for (property of lineArr) {
    // console.log(property);
    let keyValue = property.split(':');
    obj[keyValue[0]] = keyValue[1];
  }
  console.log(obj);

  if (Object.keys(obj).length >= 8) {
    count += 1;
    console.log(obj);
    console.log('yes');
  } else if (Object.keys(obj).length === 7 && !obj.cid){
    count += 1;
    console.log(obj);
    console.log('yes');
  }
}

console.log(textByLine.length);
console.log(count);