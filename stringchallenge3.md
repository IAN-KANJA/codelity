have the function StringChallenge(strArr) read the array of strings stored in strArr which will be an unsorted list of times in a 12-hour format like so;
HH:MM(am/pm).your goal is to determine te smallest diffrence in minutes between two of the times in the list Eg;if strArr is ["2:10pm","1:30pm","10:30am","4:42pm"] ten your program should return 40 because te smallest difference of 40 minutes.the input array will always contain at least 2 elements and all of the elements will be in the correct format and unique

function StringChallenge(strArr){
    // convert all times to minutes
    let times = strArr.map(time => {
        let [hours, minutes, period] = time.split(':');
        let hour = parseInt(hours);
        let minute = parseInt(minutes);
        if (period === 'pm' && hour !== 12) {
            hour += 12;
            } else if (period === 'am' && hour === 12) {
                hour = 0;
                }
                return hour * 60 + minute;
                });
                // sort the times
                times.sort((a, b) => a - b);
                // find the smallest difference
                let smallestDiff = Infinity;
                for (let i = 0; i < times.length - 1; i++) {
                    let diff = times[i + 1] - times[i];
                    if (diff < smallestDiff) {
                        smallestDiff = diff;
                        }
                        }
                        return smallestDiff;
                        }
                        // test the function
                        console.log(StringChallenge(["2:10pm","1:30pm","10:30am
                        "4:42pm"])); // Output: 40



<!-- THE ANSWER -->
function StringChallenge(strArr){
    
    let time= strArr.map(time => {
        let [Currenthours, Currentminutes, period] = time.split(':');
        let Currenthour =           parseInt(Currenthours);
        let Currentminute = parseInt(Currentminutes);
        if (period=='pm'&Currenthour!==12) {
            hour+=12;
            } else if (period=='am'&Currenthour==12){
                Currenthour = 0;
                }
                return Currenthour * 60 + Currentminute;
                });
                time.sort((a, b) => a - b);
                let smallestDifference = Infinity;
                for (let i=0;i<time.length-1; i++){
                    let difference=time[i+1]-time[i];
                    if (difference<smallestDifference) {
                        smallestDifference=difference;
                        }
                        }
                        return smallestDifference;
                        }
                        // test the function
                        console.log(StringChallenge(["2:10pm","1:30pm","10:30am","4:42pm"]));