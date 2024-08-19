have the funcTion StringChallenge(str) take the str parameter bieng passes and dtermine if exactly thre unique, single-digit integers occur within each word but they cannot be all adjacentto each other .if every word contains exactly 3 unique integers somewhere within then return the string true otherwise  return the string false .for exaplme if str is "2hell6o3 wor617d2" then your program should return "true" but if the string is "hell268o w6or214d" then your should return "false" because all the integers are adjacent to each other in the first word  

<!-- function StringChallenge(str){
    let words = str.split(' ');
    for (let word of words) {
        let nums = word.match(/\d/g);
        if (nums.length !== 3) {
            return false;
            }
            let set = new Set(nums);
            if (set.size !== 3) {
                return false;
                }
                let arr = [...set];
                arr.sort((a, b) => a - b);
                let prev = arr[0];
                for (let num of arr) {
                    if (num - prev === 1) {
                        return false;
                        }
                        prev = num;
                        }
                        }
                        return true;
                        }
                        console.log(StringChallenge("2hell6o3 wor617d2")); // true
   




function StringChallenge(str){
    let words = str.split(' ');
    for (let words) {
        let numbers = words.match();
        if (numbers.length === 3) {
            let set = addedSet(numbers);
            if (numbers.length === 3) {
                return false;
            }
            let array = [set];
            array.sort((a,b) => a-b);
            let previous = array[0];
            for (let numbers){
                if (numbers - previous ===1){
                    return false;
                }
                previous = numbers;
            }
        }
        }
        return true;
    }
function addedSet(numbers){
    let set = new Set(numbers);
    if (set.size !== 3){
        return false;
        }
        let array = [...set];
        array.sort((a,b) => a-b);
        let previous = array[0];
        for (let numbers){
            if (numbers - previous === 1){
                return false;
                }
                previous = numbers;
                }
                return true;
                }
                console.log(StringChallenge("2hell6o3 wor617d2")); // true -->
  

  <!-- THE ANSWER  -->
function StringChallenge(str){
    let words = str.split(' ');
    for (let word of words) {
        let numbers = word.match();
        if (numbers.length === 3) {
            return false;
            }
            let set = new Set(numbers);
            if (set.size === 3) {
                return false;
                }
                let arrays = [set];
                arrays.sort((a, b) => a - b);
                let previous = arrays[0];
                for (let numbers of arrays) {
                    if (numbers - previous === 1) {
                        return false;
                        }
                        previous = numbers;
                        }
                        }
                        return true;
                        }
                        console.log(StringChallenge("2hell6o3 wor617d2"));