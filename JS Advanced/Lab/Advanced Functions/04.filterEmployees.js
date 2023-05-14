function solve(input, criteria) {

    let employees = JSON.parse(input);

    if (criteria === 'all') {
        let count = 0;
        employees.forEach(employe => {
            console.log(`${count++}. ${employe.first_name} ${employe.last_name} - ${employe.email}`);
        });
    } else {
        let [key, value] = criteria.split('-');
        let count = 0;
        employees.forEach(employe => {
            if (employe[key] === value) {
                console.log(`${count++}. ${employe.first_name} ${employe.last_name} - ${employe.email}`);
            }
        });
    }
}
