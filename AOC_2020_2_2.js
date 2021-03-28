let fs = require('fs');
let text = fs.readFileSync('/Users/Dana/Downloads/Advent_Code_2020/input_2.txt').toString('utf-8');
let textByLine = text.split('\n');
var totalCount = 0;

textByLine.forEach(element => {
  let specsAndPassword = element.split(':')[0];
  var password = element.split(':')[1].replace(' ', '');
  let numbers = specsAndPassword.split(' ')[0];
  let letter = specsAndPassword.split(' ')[1]
  let lowNum = numbers.split('-')[0];
  let highNum = numbers.split('-')[1];
  let count = 0;
 
  if ((password[lowNum - 1] == letter && password[highNum - 1] !== letter) || (password[lowNum - 1] !== letter && password[highNum - 1] == letter)) {
    totalCount += 1;
    console.log(lowNum, highNum, letter, password);
  }
})
console.log(totalCount);
// Input examples
// '3-4 l: vdcv',
// '6-9 d: dddddkzdl',
// '6-13 f: mfswqfrqffrvfvf',
// '10-12 l: sfzlnwcptlnlflq',
// '2-4 m: qbwcmt',
// '15-16 v: vvvvvvvvnvvvvcvvvvgv',
// '1-4 n: wnnzfln',
// '1-3 x: xxgx',
// '7-8 j: jjjjjfvh',
// '6-8 x: xxzxxnnwx',
// '3-8 t: djtdznbtgwtrhxf',
// '7-9 w: glwwwwxtxwlwwwcp',
// '4-5 g: jggjtgggg',