function solution(n)
    {
        let answer = 0;
        let str = n.toString();
        let str_split = str.split('');

        for(let i=0; i<str_split.length; i++){
            answer += parseInt(str_split[i]);
            console.log(answer)
        }

        return answer;
    }