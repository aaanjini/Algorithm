function solution(x) {
    let answer = true;
    let split = x.toString().split('');
    let sum = 0;
    
    for(let i = 0; i < split.length; i++){        
        sum += parseInt(split[i]);        
    }  
    
    if(x % sum !== 0){
        return false;
    }else{
        return answer; 
    }   
    
}