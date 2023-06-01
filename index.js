import express from 'express'
import { postRouter } from './routes/post.router.js';

const app = express()

app.get("/", (req, res) => {
    res.send("Velkommen til min node.js app");
})

app.use(postRouter)

app.listen(4242, () => {
    console.log('Kører på port 4242: http://localhost:4242');
})

app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})