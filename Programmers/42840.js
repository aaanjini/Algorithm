function solution(answers) {
    var answer = [];
    const A = [1,2,3,4,5];
    const B = [2, 1, 2, 3, 2, 4, 2, 5];
    const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const a1 = answers.filter((a,i)=> a === A[i%A.length]).length;
    const a2 = answers.filter((a,i)=> a === B[i%B.length]).length;
    const a3 = answers.filter((a,i)=> a === C[i%C.length]).length;
    
    const best = Math.max(a1,a2,a3)
    console.log(a1,a2,a3,best);
    
    if(best === a1){
        answer.push(1);
    }if(best === a2){
        answer.push(2);
    }if(best === a3){
        answer.push(3);
    };
  
    
    return answer;
}