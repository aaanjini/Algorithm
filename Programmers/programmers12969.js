process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); //data 값을 공백을 기준으로 잘라 배열로 만듭니다.
    const a = Number(n[0]), b = Number(n[1]); // a =n의 0번째 숫자이며, b는 1번째 숫자입니다.
    let row = '*'.repeat(a)// '*' 로 a의 길이만큼 반복해줍니다. ex)a = 5 = *****
    
    for(let i = 0; i < b;  i++){// 반복문을 돌려서 i 가 b만큼 커지기 전까지 row 함수를 반복해줍니다
        console.log(row);       // b = 3 , *****
                                //         *****
                                //         *****
    }

});