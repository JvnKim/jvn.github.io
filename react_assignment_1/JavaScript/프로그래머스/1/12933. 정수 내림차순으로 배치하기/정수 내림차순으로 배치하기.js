function solution(n){
    var numString = n.toString();
    var sortString = numString.split('').sort((a,b) => b-a).join('');
    var sortNum = parseInt(sortString);
    return sortNum;
}