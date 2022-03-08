let fs = require('fs');
const input = require('fs').readFileSync('example.txt').toString().trim();

let N = parseInt(input);
let num = N;
let count = 0;


while (true) {
    let sum = parseInt(num%10 + num/10);
    num = (num%10)*10 + sum%10;
    count++;
    if (num === N) break;
}

console.log(count);














