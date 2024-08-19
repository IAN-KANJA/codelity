function FindIntersection(strArr){
    let list1 = strArr[0].split(',').map(Number);
    let list2 = strArr[1].split(',').map(Number);
    let intersection = list1.filter(x => list2.includes(x));
    return intersection.length > 0 ? intersection.sort((a, b) => a - b).
    map(x => x.toString()).join(',') : 'false';
}
console.log(FindIntersection(["1, 3, 4, 7, 13"]))