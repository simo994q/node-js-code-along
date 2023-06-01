import express from 'express'


const productsRouter = express.Router()

productsRouter.get('/productsGet', (req, res) => {
    res.send('Hent alle products - get');
})
productsRouter.post('/productsPost', (req, res) => {
    res.send('Hent alle products - opret');
})
productsRouter.put('/productsPut', (req, res) => {
    res.send('Hent alle products - opdater');
})
productsRouter.delete('/productsDelete', (req, res) => {
    res.send('Hent alle products - slet');
})

export { productsRouter }