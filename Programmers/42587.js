function solution(priorities, location) {
    let answer = 0;
    let first = 0; 
    
    while(true){//조건없이 계속 찾을 때까지 돌려버리기
        first = priorities.shift();//대기목록 가장 앞에 있는 문서 꺼내기
        let high = Math.max(...priorities); //배열에서 중요도 제일 높은 값 구하기
        if(first < high){//중요도가 더 높은 게 한개라도 있다면 
            priorities.push(first); //맨 뒤로 보내버림
            if(location === 0){//만약에 내 문서가 맨앞에 있었다면 즉 첫번째요소였다면
                location = priorities.length-1; //맨 뒤로 보냈으므로 길이-1 값을 할당
            }else {
                location -= 1; //내 문서가 중간 어딘가에 있었다면 순서 1칸 앞당기기
            }
        }else {//중요도가 첫번째 요소보다 높은 게 없다면
            answer += 1; //인쇄 횟수 +1
            if (location === 0) { //심지어 내가 원한 문서였다?
                break; //바로 브레이크
            }else {
                location -= 1; //앞으로 순서가 1칸 당겨졌으므로 -1
            }
        }
        
    }
    
    return answer; 
}