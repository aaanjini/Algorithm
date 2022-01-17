function solution(phone_number){
    var result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    // repeat함수로 phone_number의 -4(끝부터 4자리)를 빼고 *로 바꾼다 거기에 phone_number 끝부터 네자리를 더한다
    // ******* + 1234 이런 식
    return result;
  }