function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return null;
        }

        changeUnits(unit) {
            this.units = unit;
        }

        toString() {
            return `Figures units: ${this.units}`
        }

        converter(num) {
            if (this.units === 'm') {
                return num /= 10;
            } else if (this.units === 'mm') {
                return num *= 10;
            }

            return num;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }

        get radius() {
            return this.converter(this._radius);
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this.converter(this._width)
        }

        get height() {
            return this.converter(this._height)
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}