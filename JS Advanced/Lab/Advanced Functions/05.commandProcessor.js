function solution() {

    let str = '';

    return {
        append: (s) => str = str.concat(s),
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str)
    }
}
