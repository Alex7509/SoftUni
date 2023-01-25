function dictionary(input) {

    let dictionary = {};

    for (let line of input) {
        let json = JSON.parse(line);
        dictionary = Object.assign(dictionary, json);
    }

    let sorted = Object.keys(dictionary);
    sorted.sort((a, b) => a.localeCompare(b));

    for (let term of sorted) {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}
