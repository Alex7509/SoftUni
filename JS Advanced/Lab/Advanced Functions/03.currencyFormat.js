function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    let formatted = function (value) {
        return currencyFormatter(separator, symbol, symbolFirst, value);
    }
    return formatted;
}
