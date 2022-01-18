function solution(lottos, win_nums) {
    let answer = [];
    const zero = lottos.filter(v=>!v).length;
    const lotto = lottos.filter((el,index)=> win_nums.includes(el)).length;
    const max = lotto + zero;
    
    console.log(zero,lottos,max);
    
    if (lotto>1){
       answer = [7-max,7-lotto]
    } else{
        if(max>0 ){
            answer = [7-max,6]    
        } else{
            answer = [6,6]
        }

    }

 
    return answer;
}