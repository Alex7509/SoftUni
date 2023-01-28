function wordOccurrences(input) {

    const words = {};

    for (let i = 0; i < input.length; i++) {
        const currentWord = input[i];

        if (!words[currentWord]) {
            words[currentWord] = 0;
        }
        words[currentWord]++;
    }

    const sortedByCount = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const [word] of sortedByCount) {
        console.log(`${word} -> ${words[word]} times`);
    }
}
