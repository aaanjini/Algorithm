function solution(numbers) {
    return 45 - numbers.reduce((a,b) => a + b, 0); 
    //0-9까지의 합이 45이므로 45에서 배열의 합을 빼면 없는 숫자의 합이 된다
}