function solution(S, C){
    let result = 0;
    let count = 0;
    for(let i = 0; i < S.length; i++){
        if(S[i] === C){
            count++;
            }else{
                count = 0;
                }
                if(count === 3){
                    result++;
                    count = 0;
                    }
                    }
                }
                    return result;
