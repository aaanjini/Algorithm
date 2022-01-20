function solution(participant, completion) {
    let answer = ''; 
    
    participant.sort(); // 각 배열을 사전순으로 정렬합니다.
    completion.sort();
    
    for(let i = 0; i < participant.length; i++){        
        if(completion[i] !== participant[i]){ //두 배열을 돌면서 완주자와 비완주자가 일치하지 않을 때
            //완주한 선수배열보다 완주하지못한 선수배열의 길이가 무조건 1크므로 비교가능
            return participant[i] // 그 값을 리턴합니다.
        };
    };
   
}