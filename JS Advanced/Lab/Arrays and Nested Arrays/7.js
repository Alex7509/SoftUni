function solve(arr, firstParameter, secondParameter) {

    let startIndex = arr.indexOf(firstParameter);
    let endIndex = arr.indexOf(secondParameter);
    let result = arr.slice(startIndex, endIndex + 1);

    return result;
}
solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')