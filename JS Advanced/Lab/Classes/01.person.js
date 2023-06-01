class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.toString = () => {
            return `${firstName} ${lastName} (age: ${age}, email: ${email})`;
        }
    }
}