class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.calcArea = () => {
            return width * height;
        }
    }
}
