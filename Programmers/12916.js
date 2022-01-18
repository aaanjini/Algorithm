function solution(s){
    let answer = true;
    let up = s.toUpperCase()
    let p = up.split('P').length-1;
    let y = up.split('Y').length-1;
    
    if(p === y){
        answer = true
    }else{
        answer = false
    }
    
    

    return answer;
}