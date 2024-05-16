function solution(numbers) {
    var answer = 0;
    const addNum = numbers.reduce((prev, cur)=>{
        return prev + cur;
    }, 0);
    answer = addNum/numbers.length;
    return answer;
}