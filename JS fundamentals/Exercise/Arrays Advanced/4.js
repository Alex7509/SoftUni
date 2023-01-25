function sorting(input) {

    let output = [];
    let sorted = input.sort((a ,b) => b - a);
    
    
    while(sorted.length > 0){

        output.push(sorted.shift());
    
        output.push(sorted.pop());

    }
    
    console.log(output.join(' '));

}
