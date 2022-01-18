function solution(new_id) {
    let answer = '';
    let lower = new_id.toLowerCase();
    let step2 = lower.replace(/[^a-z\d-_.]/g,'').replace(/\.+/g,'.').replace(/^\./g,'').replace(/\.$/g,'');
    
    if(step2 === ''){
        step2 = "a"
    };
    
    let step3 = step2.substr(0,15).replace(/\.$/g,'');     
    
    for(let i = 0; i < 4; i++){
       if(step3.length < 3){
            let str = step3.substr(-1);
            step3 += str;   
            console.log(step3)
        }else{
            return step3;
        };    
    }
}