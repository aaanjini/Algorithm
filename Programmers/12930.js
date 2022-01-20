function solution(s) {
    let answer = '';
    let arr = s.split(' '); //s를 공백을 기준으로 잘라 배열로 만든다.
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(j % 2 === 0){ // j를 2로 나눈 값이 0일 경우 (짝수일경우)
                answer += arr[i][j].toUpperCase(); // arr의 [i]번째 (ex try)의 [j](ex.t)를 대문자로 변환   
            }else{
                answer += arr[i][j].toLowerCase();// arr의 [i]번째 (ex try)의 [j](ex.t)를 소문자로 변환   
            }                      
        }
        answer += " "; //바깥 for문이 한 번 돌때마다 공백 추가 (try공백추가hello공백추가world공백추가)
    }
    
    return answer.slice(0,-1); //마지막에 남는 공백 제거 후 리턴
}