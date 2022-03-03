let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let num = parseInt(input);
let count = 0;

while(true){
    if(num % 5 === 0){
        console.log(num/5+count);
        break;
    }else if(num < 0 ){
        console.log(-1);
        break;
    }
    num = num-3;
    count++;
}
