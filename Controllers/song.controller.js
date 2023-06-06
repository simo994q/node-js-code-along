class SongController {
    constructor() {
        console.log('Class SongController instantiated');
    }

    list = () => {
        console.log('Kører list metode');
        return true
    }

    details = () => {
        console.log('Kører details metode');
        return true
    }

    create = () => {
        console.log('Kører create metode');
        return true
    }

    read = () => {
        console.log('Kører read metode');
        return true
    }

    update = () => {
        console.log('Kører update metode');
        return true
    }

    delete = () => {
        console.log('Kører delete metode');
        return true
    }
}

export default SongController

