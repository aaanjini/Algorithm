function solution(n) {
    let answer = 0;
    let x = Math.sqrt(n);//n의 제곱근을 x에 담습니다.
    
    if(Number.isInteger(x) == false){//x가 정수인지 판별합니다.
        return -1;//아니라면 -1 리턴
    }else{
        return Math.pow(x+1,2);//맞다면 x+1의 제곱을 리턴합니다.
    }
}