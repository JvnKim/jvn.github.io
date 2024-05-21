function solution(n) {
    const ternary = n.toString(3);
    const reversedTernary = ternary.split('').reverse().join('');
    const answer = parseInt(reversedTernary, 3);
    return answer;
}