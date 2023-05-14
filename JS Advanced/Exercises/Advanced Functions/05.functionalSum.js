function add(x) {

    let sum = 0;
    sum += x;

    function calculate(y) {
        sum += y;
        return calculate;
    }

    calculate.toString = () => {
        return sum;
    }

    return calculate;
}
