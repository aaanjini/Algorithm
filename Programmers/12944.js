function solution(arr) {
    var answer = 0;    
    answer = arr.reduce( (prev, curr) => prev + curr ,0)/arr.length;
    //reduce 함수로 다 더한 후에 arr의 길이만큼 나누면 평균값이 나온다.
    return answer;
}