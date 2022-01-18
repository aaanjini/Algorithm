function solution(n) {
    let answer = 0;
    const str = n.toString();
    const str_split = str.split('');    
    
    str_split.sort(function(a, b)  {
      return b - a;
    });
    
    let aa = str_split.join('');
            
    answer = parseInt(aa)
    
    
    
    return answer;
}