function convertToObject(jsonStr) {

    let converted = JSON.parse(jsonStr);

    for (const key of Object.keys(converted)) {
        console.log(`${key}: ${converted[key]}`);
    }

}
