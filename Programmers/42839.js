function solution(numbers) {
    let answer = [];
    
    const isPrime = (num) => {//소수 체크 함수 
        if (num < 2){ // 0,1 이면 소수가 아니므로 거른다.
            return;
        }
        for(let i = 2; i < num; i++){
           if (num % i === 0){ // 2의 배수로 나뉘면 역시 소수가 아니므로 거른다.
                return;
            } 
        }
        answer.push(num); //위의 if에 걸러지지 않은 소수들을 answer에 담는다.
    }
    
    const roop = (arr,num) => { //배열을 arr에 
        if(num.length > 0){ //num이 있다면
            isPrime(+num); //소수체크 함수로 보낸다.
        }
        
        if(arr.length > 0){//arr가 비어있지 않다면
            for(let i = 0; i < arr.length; i++){
                const copy = [...arr];//arr 원본훼손을 막기위해 배열을 얕게 복사 한다.
                copy.splice(i,1);//splice 함수로 i번째의 요소부터 1개 자릅니다.
                roop(copy,arr[i] + num); 
                //splice로 자르고 남은 배열 (copy) , 잘린 요소(arr[i]) , 넘겨받은 인자(num)
            }   
        }
    }
    
    roop(numbers,""); //roop 함수에 numbers와 빈값을 넣어서 돌린다.
    
    const count = new Set(answer);//중복제거를 위한 answer를 set 처리한다.
    return [...count].length; // count라는 배열의 길이를 리턴한다. (소수의 갯수)
}