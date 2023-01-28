function sortedBy2Criteria(input) {

    let sorted = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    });

    console.log(sorted.join('\n'));

}
sortedBy2Criteria(['alpha', 'beta', 'gamma'])