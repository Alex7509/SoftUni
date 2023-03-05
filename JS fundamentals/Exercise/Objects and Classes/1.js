function employees(input) {

   let employees = {};

    for (const name of input) {
        employees[name] = name.length;
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`); 
    }  
}
employees(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])
