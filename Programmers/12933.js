function solution(n) {
  let answer = 0;
  let sort = n.toString().split('');//n을 문자열로 만든 뒤 잘라서 배열로 만듭니다.
  
  sort.sort((a,b) => b - a ); //내림차순으로 정렬합니다. 
  sort = sort.join('');//합친 값을 sort에 담아줍니다.
  
  return parseInt(sort); //sort를 정수로 변환한 값을 리턴합니다.
}