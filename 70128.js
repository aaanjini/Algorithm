function solution(a, b) {
    let answer = 0;
    let sum = 0;
    for(let i = 0; i < a.length; i++){        
        let arr = a[i]*b[i]        
        answer = sum += arr        
    }
    
    return answer;
}