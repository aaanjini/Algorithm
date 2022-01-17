function solution(s) {
    let i = s.length/2 // i는 s의 길이를 2로 나눈 값
    if(s.length%2 === 0){    // i로 2로 나눈 값이 0이라면 (짝수라면)   
        return s[i - 1] + s[i]; // s의 i-1 자리의 글자와, i자리의 글자를 리턴한다.
    }else{
        let floor = Math.floor(i) // 홀수라면 Math.floor()로 소수점을 없앤 후 
        return s[floor] // s[floor] 즉, 가운데 글자를 리턴한다
    }
}