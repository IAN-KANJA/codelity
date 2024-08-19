function solution(S){
    let result = 0;
    let map = new Map();
    for(let i = 0; i < S.length; i++){
        if(map.has(S[i])){
            map.set(S[i], map.get(S[i]) + 1);
            }else{
                map.set(S[i], 1);
                }
                }
                for(let [key, value] of map){
                    if(value > 1){
                        result = 0;
                        break;
                        }else{
                            result = Math.max(result, key.length);
                            }
                            }
                            return result;
                            }