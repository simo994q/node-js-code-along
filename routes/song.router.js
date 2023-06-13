import express from 'express'
import SongController from '../Controllers/song.controller.js';
import { router } from './init.sequelizer.router.js';


const controller = new SongController()


router.get('/songs', (req, res) => {
    controller.list(req, res)
})
router.get('/songs/:id([0-9]*)', (req, res) => {
    controller.get(req, res)
})


router.post('/songs', (req, res) => {
    controller.create(req, res)
})


router.put('/songs', (req, res) => {
    controller.update(req, res)
})


router.delete('/songs/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})



export { router }








// const song = new SongController()
// const songRouter = express.Router()


// songRouter.get('/songs', (req, res) => {
//     return song.list(req, res)
// })
// songRouter.get('/songs/:id([0-9]*)', (req, res) => {
//     return song.details(req, res)
// })


// songRouter.post('/songs', (req, res) => {
//     return song.create(req, res)
// })


// songRouter.put('/songs', (req, res) => {
//     return song.update(req, res)
// })


// songRouter.delete('/songs/:id([0-9]*)', (req, res) => {
//     return song.delete(req, res)
// })


// export { songRouter }

