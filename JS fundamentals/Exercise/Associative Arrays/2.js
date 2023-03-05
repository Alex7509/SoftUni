function oddOccurrences(input) {

    const elements = input.split(' ')
        .map(x => x.toLowerCase());
    const object = {};
    const result = [];

    for (const el of elements) {
        object[el] = 0;
    }

    for (const el of elements) {
        if (object.hasOwnProperty(el)) {
            object[el]++;
        }
    }

    const odd = Object.entries(object);

    for (const el of odd) {
        if (el[1] % 2 !== 0) {
            result.push(el[0]);
        }
    }

    console.log(result.join(' '));

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'); 