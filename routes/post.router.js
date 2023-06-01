import express from 'express'


const postRouter = express.Router()

postRouter.get('/post', (req, res) => {
    res.send('Hent alle poster');
})
postRouter.post('/post', (req, res) => {
    res.send('Hent alle poster');
})
postRouter.put('/post', (req, res) => {
    res.send('Hent alle poster');
})
postRouter.delete('/post', (req, res) => {
    res.send('Hent alle poster');
})

export { postRouter }