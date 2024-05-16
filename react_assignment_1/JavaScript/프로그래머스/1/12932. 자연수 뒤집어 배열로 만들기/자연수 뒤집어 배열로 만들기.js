function solution(n) {
    let arr = n.toString().split('');
    var answer = [];
    
    for (let i = arr.length-1; i >=0; i--) {
        answer.push(Number(arr[i]));
    }

    return answer;
}