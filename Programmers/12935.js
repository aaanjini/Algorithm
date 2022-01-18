function solution(n) {
    let answer = 0;    
    let num = Math.sqrt(n)  
    
    if(Number.isInteger(num) == false){
        return -1;
    }else{
        return Math.pow(num+1,2);
    }
}