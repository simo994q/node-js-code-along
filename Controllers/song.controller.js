import db from '../Config/db.config.js'

class SongController {
    constructor() {
        console.log('Class SongController instantiated');
    }

    list = (req, res) => {
        const sql = `SELECT s.title, a.name
                        FROM song s
                        JOIN artist a
                        ON s. artist_id = a.id
                        ORDER BY a.name`
        db.query(sql, (err, result) => {
            if (err) {
                console.error(err)
            } else {
                res.json(result)
            }
        })
    }

    details = (req, res) => {
        const id = req.params.id
        const sql = `SELECT s.title, s.content, a.name
                        FROM song s
                        JOIN artist a
                        ON s. artist_id = a.id
                        WHERE s.id = ?
                        ORDER BY a.name`
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error(err)
            } else {
                res.json(result)
            }
        })
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

