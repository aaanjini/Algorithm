function solution(s, n) {
    let answer = [];
    let result = [];
    
    
    for(let i = 0; i < s.length; i++){          
        const num = s.charCodeAt(i); //UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환 (아스키코드)
        if(num >= 65 && num <= 90){ //대문자라면
            let upper = num+n; //n만큼 밀어준 값
            if(upper > 90){//그게 Z를 넘어간다면
                answer.push((upper-90)+64); //그 값에서 90을 빼준뒤 64를 더해준다.(순환형식)
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
        if(num === 32){//공백이라면 그대로 넣는다.
            answer.push(32);
        }
        
        result.push(String.fromCharCode(answer[i])); //다시 숫자로 변환한다.
        //console.log(result)
        
    };
                
                
    // let aaa = 
    // console.log(result)
    
    return result.join(''); //합쳐서 리턴
}