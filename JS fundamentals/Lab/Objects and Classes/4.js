function convertToJson(name, lastName, hairColor){

    let personInfo = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    console.log(JSON.stringify(personInfo));

}
