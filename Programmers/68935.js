function solution(n) {
    let answer = 0;
    let num = n.toString(3); // n을 3진법으로 변환한다.
    let num_split = num.split('');  // 변환한 n을 배열형식으로 만든다.
    let reverse = num_split.reverse(); // 배열을 반전한다.(0포함)
    let join = reverse.join(''); // 반전한 배열을 합친다.

    return parseInt(join,3)
}