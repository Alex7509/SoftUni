function repeatString(string, count) {

    let result = '';

    for (let i = 0; i < count; i++) {

        result += string;

    }

    return result;

}
result = repeatString('abc', 3);
console.log(result);