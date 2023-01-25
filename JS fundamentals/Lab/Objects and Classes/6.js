function songs(input) {

    let songsCount = input.shift();
    let printType = input.pop();
    let newArr = [];

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (const line of input) {
        let [type, name, time] = line.split('_');

        let song = new Song(type, name, time);

        newArr.push(song);
    }

    for (let i = 0; i < newArr.length; i++) {
        let line = newArr[i];

        if (printType === line.type || printType === 'all') {
            console.log(line.name);
        }
    }

}
