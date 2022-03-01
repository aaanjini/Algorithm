let fs = require('fs');
const input = require('fs').readFileSync('example.txt').toString().trim().split(' ');

const num1 = input[0];
const num2 = input[1];

console.log(parseInt(num1)+parseInt(num2));