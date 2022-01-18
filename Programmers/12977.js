function check(sum){
    for(let i = 2; i*i <= sum; i++){
      if(sum % i === 0) return false;
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
                      count++
                  }
              } 
          }
      }
      //console.log(count)
      return count;
  }