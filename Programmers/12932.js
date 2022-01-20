function solution(n) {
    let answer = [];
    let num = n.toString().split('');//자연수 n을 문자열로 만들고 각각 쪼갭니다.
    
    for(let i = num.length-1; i >= 0; i--){ //num의 길이에서 1뺀값 즉 끝에서 부터 시작해서 -1씩 뺍니다. (5,4,3...)
        answer.push(parseInt(num[i])); //값을 정수로 만들어줍니다.
    }
    
    return answer;
}