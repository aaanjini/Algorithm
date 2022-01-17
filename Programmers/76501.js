function solution(absolutes, signs) {
    var answer = 0;
    
    for(let i=0; i < absolutes.length; i++){
        if(signs[i] === true){ //signs[i]의 값이 참이면 양수를 의미
            answer = answer + absolutes[i]; // 더해준다
        }else{
          answer = answer - absolutes[i]; //음수이므로 빼준다
        }
    }   
    return answer;
}