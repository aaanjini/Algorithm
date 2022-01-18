function solution(x) {
    let answer = true;    
    let num = 0;
    let str = x.toString();
    let str_split = str.split('');

    for(let i=0; i<str_split.length; i++){
        num += parseInt(str_split[i]);          
    }
    if(x % num == 0){
        return answer = true
    }else{
        return answer = false
    }
    
}