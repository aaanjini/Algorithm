function solution(lottos, win_nums) {
    let answer = [];
    const zero = lottos.filter(v=>!v).length; //로또 번호 중에서 0의 갯수를 담는다.
    const lotto = lottos.filter((el,index)=> win_nums.includes(el)).length;//lottos에 win_num와 같은 번호가 몇개있는지
    const max = lotto + zero; //0의 갯수와 맞은 번호의 갯수를 더합니다.
    
    if (lotto>1){ //맞은 갯수가 1개 이상이라면
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