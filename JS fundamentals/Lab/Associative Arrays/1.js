function phoneBook(input) {

    const book = {};

    for (const line of input) {
        let [name, phone] = line.split(' ');
        book[name] = phone;
    }

    for (const person in book) {
        console.log(`${person} -> ${book[person]}`);
    }
}
