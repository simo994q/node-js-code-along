import express from 'express'
import usersController from '../Controllers/users.controller.js'


const users = new usersController()
const usersRouter = express.Router()


usersRouter.get('/users', (req, res) => {
    return users.list(req, res)
})
usersRouter.get('/users/:id([0-9]*)', (req, res) => {
    return users.details(req, res)
})


usersRouter.post('/users', (req, res) => {
    return users.create(req, res)
})


usersRouter.put('/users', (req, res) => {
    return users.update(req, res)
})


usersRouter.delete('/users/:id([0-9]*)', (req, res) => {
    return users.delete(req, res)
})




export { usersRouter }