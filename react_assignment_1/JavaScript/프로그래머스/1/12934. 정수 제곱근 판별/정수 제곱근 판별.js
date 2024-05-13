function solution(n){
    var answer = 0;
    var sqrtN = Math.sqrt(n);

    if (Number.isInteger(sqrtN)){
        answer = (sqrtN+1)**2;
    }else{
        answer = -1;
    }

    return answer;
}