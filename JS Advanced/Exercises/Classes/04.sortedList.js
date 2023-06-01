class List {
    constructor() {
        this.elements = [];
        this.size = 0;
    }

    add(el) {
        this.elements.push(el);

        this.size++;

        this.elements.sort((a, b) => {
            return a - b;
        });
    }

    remove(index) {
        if (index > -1 || index > this.size - 1) {
            this.elements.splice(index, 1);
            this.size--;

            this.elements.sort((a, b) => {
                return a - b;
            });
        }
    }

    get(index) {
        if (index > -1 || index > this.size - 1) {
            return this.elements[index];
        }
    }
}