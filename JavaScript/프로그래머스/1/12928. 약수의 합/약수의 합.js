function solution(n) {
    var answer = 0;
    let div = [];
    if (n===0){
        return 0;
    }
    for (let i = 1; i <= n; i++){
        if(n % i === 0){
            div.push(i);
        }
    }
    answer = div.reduce((a,b) => a+b);
    return answer;
}