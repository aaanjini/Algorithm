function solution(numbers) {
    let str = numbers.toString().split(','); //정렬을 위해 요소들 전부 문자열로 변환
    let sort = str.sort((a,b)=> (b + a) - (a + b)).join('');
    //b+a(정방향으로 정렬한 것)와 a+b(역방향으로 정렬한 것)를 비교해서 - , 즉 내림차순으로 정렬  
    
    if(sort.charAt(0) === "0"){
    //내림차순으로 정렬했으므로 첫번째글자가 0이라면 전부 0이란 소리임 return "0"  = 문자열 0을 리턴한다.
        return "0";
    }else{
        return sort;
    }
}