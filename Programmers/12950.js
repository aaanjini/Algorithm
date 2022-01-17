function solution(arr1, arr2) {
    let answer = [[]];
    
    for(let i = 0; i < arr1.length; i++){ // arr1의 길이만큼 반복한다.
        answer[i] = [];  //[]안에 i값을 담아준다. ex) [1],[2]
        for(let j = 0; j < arr1[i].length; j++){ 
            answer[i][j] = arr1[i][j] + arr2[i][j]// 각 배열의 요소를 쭉 나열하고 더한 후 answer에 담는다
        }
    }
    
    return answer;
}