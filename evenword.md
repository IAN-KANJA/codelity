In an even word, each letter occurs an even number of times.
Write a function solution that, given a string S consisting of N characters, returns the minimum number of letters that must be deleted to obtain an even word.
Examples:

1. Given S = "acbcbba", the function should return 1 (one letter b must be deleted).
2. Given S = "axxaxa", your function should return 2 (one letter a and one letter x must be deleted).
3. Given S = "aaaa", your function should return 0 (there is no need to delete any letters).

Write an efficient algorithm for the following assumptions:
N is an integer within the range [0..200,000];
string S is made only of lowercase letters (a−z)

"acbcbba" -> aabbcc -> b = 1
"axxaxa"  -> aaxx  -> 'a' & 'x' = 2
"aaaa"  -> aaaa  -> 0


function Solution(S){
    let count = {};
    for(let i = 0; i < S.length; i++){
        if(count[S[i]]){
            count[S[i]]++;
            }else{
                count[S[i]] = 1;
                }
                }
                let odd = 0;
                for(let key in count){
                    if(count[key] % 2 !== 0){
                        odd++;
                        }
                        }
}
                        return odd;
        



