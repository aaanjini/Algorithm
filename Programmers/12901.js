function solution(a,b){
    let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] 
    let date = new Date(`${a}, ${b}, 2016`).getDay() //2016년 a월 b일의 데이를 가져온다 (index로나옴)
    return day[date] // 인덱스를 넣어서 리턴한다.
}