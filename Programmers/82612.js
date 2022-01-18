function solution(price, money, count) {
    let answer = 0; 
    let total_price = 0;
    
    for(let i = 1; i < count+1; i++){ 
        total_price += price*i
    }
    answer = (total_price - money)
    
    return answer > 0 ? answer : 0; //삼항연산법 answer > 0 가 조건 ? 기준으로 오른쪽이 결과값 왼쪽이참:오른쪽이 거짓
}