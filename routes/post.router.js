import express from 'express'


const postRouter = express.Router()

postRouter.get('/get', (req, res) => {
    console.log(req.query.sortkey)
    res.send('Hent alle poster - get');
})
postRouter.post('/post', (req, res) => {
    res.send(`
${req.body.firstname}
${req.body.lastname}
${req.body.email}
${req.body.birthday}
${req.body.password}
${req.body.occupation}
${req.body.city}
${req.body.address}
    `)
})
postRouter.put('/put', (req, res) => {
    res.send('Hent alle poster - opdater');
})
postRouter.delete('/delete', (req, res) => {
    res.send('Hent alle poster - slet');
})

export { postRouter }