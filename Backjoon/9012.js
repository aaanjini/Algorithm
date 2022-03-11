const fs = require('fs');
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


let answer = [];

for (let i = 0; i < n; i++) {
    let count = 0;    

    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === "("){
        count ++;
      }else {
        count --;      
      }  
      if (count < 0) {
        break;
      };
    }
    

    answer.push(count === 0 ? 'YES' : 'NO');
}

console.log(answer.join('\n'));