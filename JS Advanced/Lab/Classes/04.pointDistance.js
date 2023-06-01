class Point {

    static distance(a, b) {
        let x = a.x - b.x;
        let y = a.y - b.y;
        let result = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        return result;
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}