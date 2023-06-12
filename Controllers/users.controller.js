import db from '../Config/db.config.js'


class usersController {
    constructor() {
        console.log('Class usersController instantiated');
    }


    list = (req, res) => {
        const sql = `SELECT *
                        FROM users
                        `
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
        const sql = `SELECT *
                        FROM users
                        WHERE user_id = ?`
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error(err)
            } else {
                res.json(result)
            }
        })
    }


    create = (req, res) => {
        const { user_id, firstname, lastname, username, password, email, birthday, gender } = req.body

        if (user_id && firstname && lastname && username && password && email && birthday && gender) {
            const sql = `
            INSERT INTO users(user_id, firstname, lastname, username, password, email, birthday, gender)
            VALUES (?,?,?,?,?,?,?,?)
            `
            db.query(sql, [user_id, firstname, lastname, username, password, email, birthday, gender], (err, result) => {
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
                        FROM arist 
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


export default usersController