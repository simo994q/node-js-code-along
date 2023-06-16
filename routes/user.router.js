import express from "express"
import UserController from '../Controllers/user.controller.js'
import { router } from './init.sequelizer.router.js';

const controller = new UserController()

router.get('/user', (req, res) => {
    controller.list(req, res)
})
router.get('/user/:id([0-9]*)', (req, res) => {
    controller.details(req, res)
})

router.post('/user', (req, res) => {
    controller.create(req, res)
})

export { router }