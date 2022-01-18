function solution(s) {
    let answer = true    
    if( s == parseInt(s) && (s.length == 4 || s.length == 6)){
        answer = true
    }else{
        answer = false
    }
   
    return answer;
}