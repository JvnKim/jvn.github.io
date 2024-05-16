function solution(arr) {
    var answer = 0;
    const addNum = arr.reduce((prev, cur) => {
        return prev + cur;
    }, 0);
    answer = addNum/arr.length;
    return answer;
}