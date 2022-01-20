function solution(new_id) {
    let answer = '';
    let lower = new_id.toLowerCase();
    let step2 = lower.replace(/[^a-z\d-_.]/g,'').replace(/\.+/g,'.').replace(/^\./g,'').replace(/\.$/g,'');
    //replace(/[^a-z\d-_.]/g,'') = 알파벳 소문자와 숫자, 특수문자(-_.)이 아니면 모두 ''으로 바꿔라(지워라)
    //replace(/\.+/g,'.').replace = .이 두번이상 반복된다면 .으로 바꿔라
    //replace(/^\./g,'') = 문장의 첫번째에 .이 있다면 ''으로 바꿔라 (지워라)
    //replace(/\.$/g,'') = 문장의 끝에 점이 있다면 ''으로 바꿔라(지워라)
    if(step2 === ''){ //리플레이스를 거친 아이디가 빈값이라면
        step2 = "a" // 아이디에 a를 대입해라
    };
    
    let step3 = step2.substr(0,15).replace(/\.$/g,'');  //15자로 아이디를 자르고 끝에 .가 있다면 지워라
    
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