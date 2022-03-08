let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const length = input[0];
let array =  [];

for (let i = 1; i <= length; i ++) {
  const item = parseInt(input[i]);    
  if (item === 0) {
    array.pop();
  } else {
    array.push(item);
  }
};

let answer = 0;

for (let i = 0; i < array.length; i ++) {
    answer += array[i];
}

console.log(parseInt(answer));