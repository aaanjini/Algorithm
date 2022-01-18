function solution(arr, divisor) {
    let answer = [];
    for(let i = 0; i < arr.length; i++){        
        if(arr[i]%divisor === 0){   //arr가 divisor 나눈 값이 0일 경우     
            answer.push(arr[i]); // 그 값을 배열에 추가한다.
        }          
    }
    answer.sort(function(a, b){return a - b}); // 오름차순 정렬
    
    if (answer.length === 0){ // 나누어 떨어진 게 아무것도 없다면
        answer.push(-1); // -1을 배열에 추가한다.
    };
    return answer;
}