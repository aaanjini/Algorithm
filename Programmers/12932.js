function solution(n) {
    let answer = [];
    const str = n.toString();
    const str_split = str.split('');    
    
    for(let i = str_split.length-1; i >= 0; i--){
        const aaaa = parseInt(str_split[i]); 
        answer.push(aaaa)
    }
    
    
    return answer;
}