function extract(content) {

    let text = document.getElementById('content').textContent;
    let regexp = /\([^)]*[^)]*\)/g;

    let matches = text.match(regexp);

    let result = [];

    for (let match of matches) {
        match = match.substring(1, match.length - 1);
        result.push(match);
    }

    return result.join('; ')
}
