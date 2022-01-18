function solution(s) {
    let answer = '';    
    let arr = s.split(' '); 
    
    for(let j=0; j < arr.length; j++){        
        for(let i=0; i < arr[j].length; i++){           
            if(i % 2 == 0){
                answer+=arr[j][i].toUpperCase();       
            }else{
                answer+=arr[j][i].toLowerCase();
            }  
        }  
        answer+=' ';
    }
    
    
        
    console.log(answer)
    return answer.slice(0, -1);
}