function solution(n) {
    var answer = 0;
    for (let i = n; i > 0 ; i--){
        if (i % 2 === 0) {
        answer = answer + i;
    }
    }
    return answer;
}