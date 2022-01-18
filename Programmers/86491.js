function solution(sizes) {
    let answer = 0;  
    let arr = [];
    let aa = sizes.reduce(
      ( accumulator, currentValue ) => accumulator.concat(currentValue),
      []
    ); //sizes의 전체 배열요소를 병합한다.
    let max = aa.reduce((previous, current) => { return previous > current ? previous:current; }); // 병합된 요소에서 최대값을 구한다.
    
    for(let i = 0 ; i<sizes.length; i++){ // 반복문을 돌려 배열을 분리한다.
        let bbb =  Math.min.apply(null, sizes[i]);  //배열 요소 중 가장 작은 값을 불러온다.     
        arr.push(bbb) // 새 배열에 담는다.
    }
    let c = Math.max.apply(null,arr); // 새 배열(arr)에 담긴 요소들중 가장 큰 걸 불러온다.       
    console.log(c)
    
    return max*c;   // 두 값을 곱한다.
    
}