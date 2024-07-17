function solution(S){
    const N = S.length;
    // keep track of the number of 'x' characters encountered.
    let X = 0;
    // keep track of the number of 'y' characters encountered.
    let Y = 0;
    //  count the number of valid splits where the condition is met
    let numberOfSplits = 0;
   // Sijui inafanya nini niliuliza chat ikaniambia it is to initialize all their elements to 0.
    const prefixX = new Array(N).fill(0);

    const prefixY = new Array(N).fill(0);
    

    for (let i = 0; i < N; i++) {

        if (S[i] === 'x') {
            X++;
        } else if (S[i] === 'y') {
            Y++;
        }

        prefixX[i] = X;
        prefixY[i] = Y;
        

        for (let i = 0; i < N - 1; i++) {
            
            if (prefixX[i] === prefixY[i]) {
                numberOfSplits++;
            } else if ((prefixX[N - 1] - prefixX[i]) === (prefixY[N - 1] - prefixY[i])) {
                numberOfSplits++;
            }
        }    
    

    }
    return validSplits;
}
