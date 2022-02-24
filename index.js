let fs = require('fs');
const [n, ...num] = require('fs').readFileSync('example.txt').toString().trim().split(/\s+/);

function solution(n, num){
    let answer = [];
    const arr =  num;
    const arr2 =  arr.slice();
    const sort = arr2.sort((a,b) => a-b);
    

    for(let i = 0; i < n; i++){
        answer.push(arr.indexOf(sort[i]));
      
    }
    return answer;
}

console.log(solution(n,num));