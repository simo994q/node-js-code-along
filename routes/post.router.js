import express from 'express'


const postRouter = express.Router()

postRouter.get('/get', (req, res) => {
    res.send('Hent alle poster - get');
})
postRouter.post('/post', (req, res) => {
    res.send('Hent alle poster - opret');
})
postRouter.put('/put', (req, res) => {
    res.send('Hent alle poster - opdater');
})
postRouter.delete('/delete', (req, res) => {
    res.send('Hent alle poster - slet');
})

export { postRouter }