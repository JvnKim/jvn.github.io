function solution(n) {
    // if (n===0){
    //     return 0;
    // }
    var answer = 0;
    let div = [];
    for (let i = 1; i <= n; i++){
        if(n % i === 0){
            div.push(i);
        }
    }
    answer = div.reduce((a,b) => a+b, 0);
    return answer;
}
