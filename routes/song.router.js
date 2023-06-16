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
