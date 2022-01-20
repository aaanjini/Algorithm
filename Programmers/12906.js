function solution(arr){
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        if( arr[i] !== arr[i+1]){//arr[i]와 다음숫자인 arr[i+1]이 같지않을경우에만
          answer.push(arr[i])//배열에 요소를 넣는다.
        }
    };
    return answer;
}