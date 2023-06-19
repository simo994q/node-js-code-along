// import db from '../Config/db.config.js'
// import SongModel from '../Models/song.model.js'
// import ArtistModel from '../Models/artist.model.js'
// ArtistModel.hasMany(SongModel)
// SongModel.belongsTo(ArtistModel)

import OrgModel from '../Models/org.model.js'

class OrgController {
    constructor() {

    }

    list = async (req, res) => {
        const result = await OrgModel.findAll({
            attributes: ['id', 'title'],
            limit: 5,
            order: ['title'],
            include: {
                attributes: ['id', 'title']
            }
        })
        res.json(result)
    }

    get = async (req, res) => {
        const result = await OrgModel.findAll({
            attributes: ['id', 'title', 'address', 'zipcode', 'city', 'country', 'created_at', 'updated_at'],
            where: {id: req.params.id},
        })
        res.json(...result)
    }

    create = async (req, res) => {
        const {title, address, zipcode, city, country} = req.body
        if (title && address && zipcode && city && country) {
            const model = await OrgModel.create(req.body)
            return res.json({newid: model.id})
        } else {
            res.send(418)
        }
    }

    update = async (req, res) => {
        const {title, address, zipcode, city, country} = req.body
        if (title && address && zipcode && city && country) {
            const model = await OrgModel.update(req.body, {where: {id: id}})
            return res.json({msg: 'updated'})
        } else {
            res.send(418)
        }
    }

    delete = async (req, res) => {
        try {
            await OrgModel.destroy({where: {id: req.params.id}})
            res.sendStatus(200)
        }
        catch(err) {
            res.send(err)
        }
    }
}


export default OrgController






    // constructor() {
    //     console.log('Class SongController instantiated');
    // }


    // list = (req, res) => {
    //     let { sortkey, sortdir, limit, attributes } = req.query

    //     // ternary operators
    //     sortkey = sortkey ? sortkey : 's.id'
    //     sortdir = sortdir ? sortdir.toUpperCase() : 'ASC'
    //     limit = limit ? `LIMIT ${parseInt(limit)}` : ''
    //     attributes = attributes ?  attributes : 's.id, s.title, a.name'

    //     const sql = `SELECT ${attributes}
    //                     FROM song s
    //                     JOIN artist a
    //                     ON s. artist_id = a.id
    //                     ORDER BY ${sortkey} ${sortdir} ${limit}`
    //     db.query(sql, (err, result) => {
    //         if (err) {
    //             console.error(err)
    //         } else {
    //             res.json(result)
    //         }
    //     })
    // }


    // details = (req, res) => {
    //     const id = req.params.id
    //     const sql = `SELECT s.title, s.content, a.name
    //                     FROM song s
    //                     JOIN artist a
    //                     ON s. artist_id = a.id
    //                     WHERE s.id = ?
    //                     ORDER BY a.name`
    //     db.query(sql, [id], (err, result) => {
    //         if (err) {
    //             console.error(err)
    //         } else {
    //             res.json(result)
    //         }
    //     })
    // }


    // create = (req, res) => {
    //     const { title, content, artist_id } = req.body

    //     if (title && content && artist_id) {
    //         const sql = `
    //         INSERT INTO song(title, content, artist_id)
    //         VALUES (?,?,?)
    //         `
    //         db.query(sql, [title, content, artist_id], (err, result) => {
    //             if (err) {
    //                 console.error(err);
    //             } else {
    //                 res.json({ new_id: result.insertId })
    //             }
    //         })
    //     }
    // }


    // update = (req, res) => {
    //     const { title, content, artist_id, id } = req.body

    //     if (title && content && artist_id && id) {
    //         const sql = `
    //         UPDATE song
    //         SET title = ?,
    //         content = ?,
    //         artist_id = ?
    //         WHERE id = ?
    //         `
    //         db.query(sql, [title, content, artist_id, id], (err, result) => {
    //             if (err) {
    //                 console.error(err);
    //             } else {
    //                 res.json({
    //                     status: 'ok',
    //                     updated_id: id
    //                 })
    //             }
    //         })
    //     }

    // }


    // delete = (req, res) => {
    //     const id = req.params.id
    //     const sql = `DELETE
    //                     FROM arist 
    //                     WHERE id = ?`
    //     db.query(sql, id, (err, result) => {
    //         if (err) {
    //             console.error(err)
    //         } else {
    //             res.json({
    //                 status: 'ok',
    //                 deleted_id: id
    //             })
    //         }
    //     })
    // }