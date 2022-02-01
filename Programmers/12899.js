function solution(n) {
    let answer = '';   
    
    while(n > 0){ //n이 0이 될 때까지 반복문 돌리기
        if(n % 3 === 0){//나머지가 0이라면
            answer = '4'+answer; //4에다가 나머지 붙이기
            n = n/3-1;
        }else if(n % 3 === 1){
            answer = '1'+answer;
            n = Math.floor(n/3);//실수 -> 정수 변환
        }else{
            answer = '2'+answer;
            n = Math.floor(n/3);//실수 -> 정수 변환
        }
    }
    
    return answer;
}