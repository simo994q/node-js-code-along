import db from '../Config/db.config.js'


class SongController {
    constructor() {
        console.log('Class SongController instantiated');
    }


    list = (req, res) => {
        let { sortkey, sortdir, limit, attributes } = req.query

        // ternary operators
        sortkey = sortkey ? sortkey : 's.id'
        sortdir = sortdir ? sortdir.toUpperCase() : 'ASC'
        limit = limit ? `LIMIT ${parseInt(limit)}` : ''
        attributes = attributes ?  attributes : 's.id, s.title, a.name'

        const sql = `SELECT ${attributes}
                        FROM song s
                        JOIN artist a
                        ON s. artist_id = a.id
                        ORDER BY ${sortkey} ${sortdir} ${limit}`
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


    create = (req, res) => {
        const { title, content, artist_id } = req.body

        if (title && content && artist_id) {
            const sql = `
            INSERT INTO song(title, content, artist_id)
            VALUES (?,?,?)
            `
            db.query(sql, [title, content, artist_id], (err, result) => {
                if (err) {
                    console.error(err);
                } else {
                    res.json({ new_id: result.insertId })
                }
            })
        }
    }


    update = (req, res) => {
        const { title, content, artist_id, id } = req.body

        if (title && content && artist_id && id) {
            const sql = `
            UPDATE song
            SET title = ?,
            content = ?,
            artist_id = ?
            WHERE id = ?
            `
            db.query(sql, [title, content, artist_id, id], (err, result) => {
                if (err) {
                    console.error(err);
                } else {
                    res.json({
                        status: 'ok',
                        updated_id: id
                    })
                }
            })
        }

    }


    delete = (req, res) => {
        const id = req.params.id
        const sql = `DELETE
                        FROM song 
                        WHERE id = ?`
        db.query(sql, id, (err, result) => {
            if (err) {
                console.error(err)
            } else {
                res.json({
                    status: 'ok',
                    deleted_id: id
                })
            }
        })
    }
}


export default SongController
