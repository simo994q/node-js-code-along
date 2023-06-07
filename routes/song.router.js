import express from 'express'
// import db from '../Config/db.config.js'
import SongController from '../Controllers/song.controller.js';

const song = new SongController()

const songRouter = express.Router()

// db.query(`SELECT title, name FROM artist JOIN song ON artist.id = song.artist_id`, (err, result) => {
//     console.log(result);
// })


songRouter.get('/songs', (req, res) => {
    // console.log(song.list());
    return song.list(req, res)
})
songRouter.get('/songs/:id([0-9]*)', (req, res) => {
    return song.details(req, res)
})

songRouter.post('/songs', (req, res) => {
    return song.create(req, res)
})

songRouter.put('/songs', (req, res) => {
    console.log(song.update());
})

songRouter.delete('/songs', (req, res) => {
    console.log(song.delete());
})

export { songRouter }