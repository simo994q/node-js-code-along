import express from 'express'
import db from '././Config/db.config.js'

const postRouter = express.Router()

db.query(`SELECT title, name FROM artist JOIN song ON artist.id = song.artist_id`, (err, result) => {
    console.log(result);
})


postRouter.get('/get', (req, res) => {
    // console.log(req.query.sortkey)
    // res.send('Hent alle poster - get');



})


postRouter.post('/post', (req, res) => {
    res.send(`
${req.body.firstname}
${req.body.lastname}
${req.body.email}
${req.body.birthday}
${req.body.password}
${req.body.occupation}
${req.body.city}
${req.body.address}
    `)
})
postRouter.put('/put', (req, res) => {
    res.send('Hent alle poster - opdater');
})
postRouter.delete('/delete', (req, res) => {
    res.send('Hent alle poster - slet');
})

export { postRouter }