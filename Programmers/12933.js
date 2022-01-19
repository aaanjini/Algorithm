function solution(n) {
  let num = n.toString().split('');
  let sort = num.sort((a,b) => b - a);    
  let answer = sort.join('');
  
  return parseInt(answer);
}