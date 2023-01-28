function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const line of arr) {
        let [name, age] = line.split(' ');
        age = Number(age);

        let cat = new Cat(name, age);
        cat.meow();
    }

}
cats(['Mellow 2', 'Tom 5'])