function solution(n) {
    let answer = [];
    let num = n.toString().split(''); //숫자를 문자열로 만든 뒤 자리마다 쪼갭니다.
    let arr = [];
    
    for(let i = num.length-1; i >= 0; i--){ //num의 길이에서 1뺀값 즉 끝에서 부터 시작해서 -1씩 뺍니다. (5,4,3...)
        arr.push(parseInt(num[i]));   // num[i]를 정수로 변환해줍니다.
    };
    
    return arr;
}