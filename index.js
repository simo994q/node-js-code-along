import express from 'express'
import { postRouter } from './routes/post.router.js';
import { productsRouter } from './routes/products.router.js';

const app = express()

app.use(postRouter)
app.use(productsRouter)

app.get("/", (req, res) => {
    res.send("Velkommen til min node.js app");
})

app.listen(4242, () => {
    console.log('Kører på port 4242: http://localhost:4242');
})

app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})