function check(sum){ //소수 판별 함수
    for(let i = 2; i*i <= sum; i++){
      if(sum % i === 0) { // 2로 나뉘면 소수가 아니므로 return false
          return false;
      }
    }
    return true;
  }  
  
  function solution(nums) {
      let count = 0;
      
      for(let a = 0; a < nums.length; a++){
          for(let b = a+1; b < nums.length; b++){
             for(let c = b+1; c < nums.length; c++){
                  //console.log(sum);
                  if(check(nums[a] + nums[b] + nums[c])){
                    //a,b,c 합친 값을 check함수로 넘겨 트루라면 카운트 증가
                    count++
                  }
              } 
          }
      }
      return count;
  }