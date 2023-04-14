function solve(json) {

    let parsed = JSON.parse(json);
    let keys = Object.keys(parsed[0]);
    let result = '<table>\n';

    result += `    <tr>${keys.map(key => `<th>${key}</th>`).join('')}</tr>\n`;

    for (const el of parsed) {
        result += `    <tr>${keys.map(key => `<td>${el[key]}</td>`).join('')}</tr>\n`;
    }

    result += '</table>'

    console.log(result);
}
solve(`[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`)