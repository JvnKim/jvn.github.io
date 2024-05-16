function solution(x) {
    const digits = x.toString().split('').map(Number);
    const sum = digits.reduce((total, digit) => total + digit, 0);
    if (x%sum===0){
        return true;
    } else {
        return false;
    }
}