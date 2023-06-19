import express from "express"
import OrgController from '../Controllers/org.controller.js'
import { router } from './init.sequelizer.router.js';

const controller = new OrgController()

router.get('/org', (req, res) => {
    controller.list(req, res)
})
router.get('/org/:id([0-9]*)', (req, res) => {
    controller.details(req, res)
})

router.post('/org', (req, res) => {
    controller.create(req, res)
})

router.put('/org/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})

export { router }