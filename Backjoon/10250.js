const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : 
`2
6 12 1
30 50 72`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let line = input();

while(line){
    let temp = input().split(' ').map(v => +v);
    let H = temp[0]; //호텔의 층 수
    let W = temp[1]; //각 층의 방 수
    let N = temp[2]; //몇 번째 손님
    let count = 1; //거리

    while(N > H){
        count ++;
        N = N - H;
    }
    if(count < 10){
        console.log(`${N}0${count}`);
    }else{
        console.log(`${N}${count}`);
    }

    line -= 1;
};











