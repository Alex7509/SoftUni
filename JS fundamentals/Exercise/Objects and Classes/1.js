function employees(input) {

    let employeesInfo = {};

    input.forEach(person => {
        employeesInfo[person] = person.length;
    });

    for (const key in employeesInfo) {
        console.log(`Name: ${key} -- Personal Number: ${employeesInfo[key]}`);
    }
    
}
employees(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])