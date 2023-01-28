function characterInRange(characterOne, characterTwo) {

    let start = Math.min(characterOne.charCodeAt(), characterTwo.charCodeAt());
    let end = Math.max(characterOne.charCodeAt(), characterTwo.charCodeAt());

    let result = '';

    for (let i = start + 1; i < end; i++) {

        let current = String.fromCharCode(i);
        result += `${current} `;
    }

    console.log(result);

}
characterInRange('#', ':')