function solution(n){
    let answer = 0;    
    let num = n.toString().split('');
    
    for(let i = 0; i < num.length; i++){
      answer += parseInt(num[i]);
    };

    return answer;
}