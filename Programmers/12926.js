function solution(s, n) {
    let answer = [];
    let result = [];
    
    
    for(let i = 0; i < s.length; i++){          
        const num = s.charCodeAt(i);
        if(num >= 65 && num <= 90){
            let upper = num+n;
            if(upper > 90){
                answer.push((upper-90)+64);
            }else{
                answer.push(upper)
            }
        }
        if(num >= 97 && num <= 122){
            let lower = num+n
            if(lower > 122){
               answer.push((lower-122) + 96);
                
            }else{
                answer.push(lower);
            }
        }
        if(num === 32){
            answer.push(32);
        }
        
        result.push(String.fromCharCode(answer[i]));
        //console.log(result)
        
    };
                
                
    // let aaa = 
    // console.log(result)
    
    return result.join('');
}