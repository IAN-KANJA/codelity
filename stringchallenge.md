have the function StringChallenge(str) read the str parameter being passed which will represent the movements made ina 5*5 grid of cells strating from the top left position.the characters in the input string will be entirely composed of r,l,u,d,?.Each of the characters stand for the direction to take within the grid,for example:r=right,l=left,u=up,d=down.your goal is to determine what characters the question mark should be in order for the path to be created to go from the top left of the grid all the way to the bottom right without touching previously travelled on cells in the grid 

for example if str is "r?d?drdd" then your program should output the final correct string that will allow a path to be formed from the top left of a 5*5 grid to the bottom right for this input your program should therefore return the string rrdrdrdd there will only ever be one correct path there will always be a least one question mark wihin the input string 

function StringChallenge(str){
    let x = 0
    let y = 0
    let path = ""
    let visited = new Set()
    let directions = {
        "r": [1,0],
        "l": [-1,0],
        "u": [0,-1],
        "d": [0,1]
        }
        let queue = [[x,y,""]]
        while(queue.length > 0){
            let [x,y,path] = queue.shift()
            if(x === 4 && y === 4){
                return path
                }
                if(visited.has(`${x},${y}`));
                return path
                }
    }
StringChallenge("r?d?drdd"); //returns "rrdrdrdd"

