function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.tasks = [];
            this.salary = 0;
        }

        work() {
            let current = this.tasks.shift();
            console.log(`${this.name}` + current);
            this.tasks.push(current);
        }

        getSalary() {
            return this.salary;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push('is working on a simple task.');
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push("is working on a complicated task.");
            this.tasks.push("is taking time off work.");
            this.tasks.push("is supervising junior workers.");
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push("scheduled a meeting.");
            this.tasks.push("is preparing a quarterly report.");
        }

        getSalary() {
            return super.getSalary() + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}