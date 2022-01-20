function solution(numbers) {
    let answer = [];
    
    for ( let i = 0; i < numbers.length; i++) {
      for ( let j = i + 1; j < numbers.length; j++) {//number[i]번째요소의 다음 요소를 가르킴 ex) n= [1,2,3] 여기서 [i]는 1, [j]는 2,3
        let sum = numbers[i] + numbers[j];
        if( answer.indexOf(sum) === -1) {//배열에서 sum을 찾았을 때 없을 경우에만
          answer.push(sum);//배열에 추가
        }
      }
    }
    
    answer.sort((a,b) => a - b);//오름차순으로 정렬
    
    return answer;
}