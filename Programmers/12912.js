function solution(a, b) {
    var answer = 0;
    if(a >= b){//a가 b보다 크거나 같은 경우
        for(let i = b; i <= a; i++){// i는 b와 같고 , i가 a와 같거나 커졌을 때까지 i 값을 answer에 더한다
            answer+=i; 
        }
    }else{
        for(let j = a; j <= b; j++){ // j는 a와 같고 , j가 b와 같거나 커졌을 때까지 j 값을 answer에 더한다
            answer+=j;
        }
    }
    return answer;
}