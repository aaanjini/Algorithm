function solution(x) {
    let answer = true;    
    let num = 0;
    let str = x.toString().split('');

    for(let i=0; i<str.length; i++){
        num += parseInt(str[i]);          
    };
    if(x % num == 0){
        return answer = true;
    }else{
        return answer = false;
    };
    
}