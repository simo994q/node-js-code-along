import express from 'express'
// import db from '../Config/db.config.js'
import SongController from '../Controllers/song.controller.js';

const song = new SongController()

const postRouter = express.Router()

// db.query(`SELECT title, name FROM artist JOIN song ON artist.id = song.artist_id`, (err, result) => {
//     console.log(result);
// })


postRouter.get('/get', (req, res) => {
    // console.log(song.list());
    return song.list(req, res)
})
postRouter.get('/get/:id([0-9]*)', (req, res) => {
    return song.details(req, res)
})

postRouter.post('/post', (req, res) => {
    console.log(song.create());
})

postRouter.put('/put', (req, res) => {
    console.log(song.update());
})

postRouter.delete('/delete', (req, res) => {
    console.log(song.delete());
})

export { postRouter }