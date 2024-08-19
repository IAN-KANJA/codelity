function Solution(S){
    if (S.length === 0) {
        return 0;
    } else if (S.length > 200000) {
        return 'N should not pass 200000 integers';
    }
    if (S !== S.toLowerCase()){
        return 'The string should be in lowercase'
    }
    const lower = S.toLowerCase();

    let countObj = {}

    for (let letter of lower){
        console.log(letter); 'a', 'c', 'b','c','b','a'
        letterMap();
    }
    
    return S.length;
}
console.log(solution('ahahadmm'))