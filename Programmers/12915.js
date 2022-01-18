function solution(strings, n) {
    let answer = [];
    return strings.sort().sort((a,b) => a.charCodeAt(n)-b.charCodeAt(n));
}