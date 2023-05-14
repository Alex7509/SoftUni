function solve(input) {

    let result = [];

    function inner() {

        return {
            add: (str) => result.push(str),
            remove: (str) => result = result.filter(x => x !== str),
            print: () => console.log(result.join(','))
        }
    }

    let arr = inner();

    input.forEach(line => {
        let [command, value] = line.split(' ');

        arr[command](value);
    });
}
