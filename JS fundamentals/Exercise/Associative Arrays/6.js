function companyUsers(input) {

    let company = {};

    for (const line of input) {
        let [name, id] = line.split(' -> ');

        if (!company.hasOwnProperty(name)) {
            company[name] = [];
        }
        company[name].push(id);
    }
    let sorted = Object.entries(company).sort((a, b) => a[0].localeCompare(b[0]));

    for (const line of sorted) {
        let name = line[0];
        let id = line[1];

        console.log(name);
        
        let ids = new Set(id);
        for (const id of ids) {
            console.log(`-- ${id}`);
        }
    }
}
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ]);