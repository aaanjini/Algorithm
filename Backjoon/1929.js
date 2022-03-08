let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);;

let M = input[0];
let N = input[1];


const is_prime = (num) => {
    if (num === 1) {
        return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return true;
}; 

for(let i = M; i <= N; i++ ){
    is_prime(i)?console.log(i):"";
}