function solution(phone_number) {
    var answer = '';
    let length = phone_number.length;
    for (let i = 0; i < length; i++){
        if (i>=length-4) answer += phone_number[i];
        else answer += "*";
    }
    return answer;
}