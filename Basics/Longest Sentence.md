You would like to find the sentence containing the largest number of words in some given text. The text is specified as a string S consisting of N characters: letters, spaces, dots (.), question marks (?) and exclamation marks (!).
The text can be divided into sentences by splitting it at dots, question marks and exclamation marks. A sentence can be divided into words by splitting it at spaces. A sentence without words is valid, but a valid word must contain at least one letter.
For example, given S = "We test coders. Give us a try?", there are three sentences: "We test coders", " Give us a try" and "". The first sentence contains three words: "We", "test" and "coders". The second sentence contains four words: "Give", "us", "a" and "try". The third sentence is empty.
Write a function:

function solution(S);
that, given a string S consisting of N characters, returns the maximum number of words in a sentence.
For example, given S = "We test coders. Give us a try?", the function should return 4, as explained above.
Given S = "Forget CVs..Save time . x x", the function should return 2, as there are four sentences: "Forget CVs" (2 words), "" (0 words), "Save time " (2 words) and " x x" (2 words).

Assume that:

the length of string S is within the range [1..100];
string S consists only of letters (a−z, A−Z), spaces, dots (.), question marks (?) and exclamation marks (!).


function Solution(S){
    let words = S.split(' ');
    let max = 0;
    for(let i = 0; i < words.length; i++)
    {
        let word = words[i];
        let count = 0;
        for(let j = 0; j < word.length; j++)
        {
            if(word[j] != ' ')
            {
                count++;
            
            }
        
        if(count > max)
        {
            max = count;
        
        }

        }
        
    }
}
