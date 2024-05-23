function solution(s) {
    const words = s.split(" ");
    const newWords = words.map((w)=>{
        let temp = "";
        for (let i = 0; i < w.length; i++) {
            if(i%2===0) temp += w[i].toUpperCase();
            if(i%2!==0) temp += w[i].toLowerCase();
        }
        return temp;
    })
    const answer = newWords.join(" ");
    return answer;
}