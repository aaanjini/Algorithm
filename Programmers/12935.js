function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    //indexOf를 사용해 찾은 요소를 1개 삭제합니다.
    if(arr.length === 0){
        return[-1]
    };
    
    return arr;
}