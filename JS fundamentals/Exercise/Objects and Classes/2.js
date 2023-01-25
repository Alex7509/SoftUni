function towns(arr) {

    let townInfo = {};

    for (const line of arr) {

        let [town, latitude, longitude] = line.split(' | ');

        townInfo.town = town;
        townInfo.latitude = Number(latitude).toFixed(2);
        townInfo.longitude = Number(longitude).toFixed(2);

        console.log(townInfo);
    }
}
