//백준 1874번:스택 수열

const fs = require('fs');
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const nums = arr.map(i => parseInt(i));
const stack = [];
let answer = [];
let count = 1;

for(let i = 0; i < n; i ++){
  const num = nums.shift();

  while(count <= num){
    stack.push(count++);
    answer.push('+ ');
  }

  const item = stack.pop();
  if(num !== item) {
    return console.log('NO');
  }

  answer.push('- ');
}

console.log(answer.join(''));