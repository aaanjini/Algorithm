function solution(progresses, speeds) {
    let answer = [];    
    
    while(progresses.length !== 0){//배열이 하나도 없으면 (배포되면 삭제할것이기때문)
        let finish = 0; //완성된 요소를 담을 곳
        
        for(let i = 0; i < progresses.length; i++){
            progresses[i] += speeds[i]; //진도율에 스피드만큼 계속 더해줌
        }        
        
        while(progresses[0] >= 100){ //그러다가 진도율이 100센트가 되면 혹은 크면
            finish += 1; //작업이 완료됐단 뜻으로 1을 더해줌            
            progresses.shift(); //첫번째 요소를 (완료된 것) 지워버림
            speeds.shift(); //스피드도 같이 지워버림
        }
        
        if(finish !== 0){//앞에 배포된 게 이미 있는 경우
            answer.push(finish);
        }
    } 

    
    return answer;
}