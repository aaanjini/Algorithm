function solution(answers) {
    let answer = [];
    // 수포자들의 반복되는 규칙의 수를 배열로 저장
    const A = [1,2,3,4,5];
    const B = [2, 1, 2, 3, 2, 4, 2, 5];
    const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    // filter를 사용하여 answers를 탐색하면서 수포자들의 번호와 비교(완전탐색)
    const a1 = answers.filter((a,i)=> a === A[i%A.length]).length;
    const a2 = answers.filter((a,i)=> a === B[i%B.length]).length;
    const a3 = answers.filter((a,i)=> a === C[i%C.length]).length;
    // 세 사람의 점수 중 최대값 구하기
    const best = Math.max(a1,a2,a3)
    console.log(a1,a2,a3,best);
    
    // 최대값과 일치한 점수를 가지면 answer에 저장
    if(best === a1){
        answer.push(1);
    }if(best === a2){
        answer.push(2);
    }if(best === a3){
        answer.push(3);
    };
  
    
    return answer;
}