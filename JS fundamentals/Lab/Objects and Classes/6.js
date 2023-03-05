function songs(input) {

    const numberOfSongs = input.shift();
    const typeList = input.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }

        output() {
            console.log(this.name);
        }
    }

    for (const line of input) {
        let [type, name, time] = line.split('_');
        time = Number(time);

        if (type === typeList || typeList === 'all'){
            let song = new Song(type, name, time);
            song.output();
        }
    }

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])

