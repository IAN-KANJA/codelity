function solution(A){
    if (!A || A.length === 0) {
        return 0;
    }
    //this how we tell JavaScript to compare numbers correctly, ensuring the smallest numbers come first.
    A.sort((a, b) => a - b);

    let rooms = [];

    for (let preference of A) {
        let placed = false;
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i] < preference) {
                rooms[i] += 1;
                placed = true;
                break;
            }
        }
        if (!placed) {
            rooms.push(1);
        }
    }
    return rooms.length;
}