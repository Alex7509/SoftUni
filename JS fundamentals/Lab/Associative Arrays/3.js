function adsressBook(input) {

    const book = {};

    for (const line of input) {
        let [name, address] = line.split(':');
        book[name] = address;
    }

    const sorted = Object.entries(book);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (const line of sorted) {
        let [name, address] = line;
        console.log(`${name} -> ${address}`)
    }
}
