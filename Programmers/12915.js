function solution(strings, n) {
    let answer = [];
    return strings.sort().sort((a,b) => a.charCodeAt(n)-b.charCodeAt(n));
    //charCodeAt : 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환합니다. (사전순으로 정렬)
}