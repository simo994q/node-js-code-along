import express from 'express'
import { songRouter } from './routes/song.router.js';
import { productsRouter } from './routes/products.router.js';
import dotenv from 'dotenv';

// import db from './Config/db.config.js'

// db.query(`SELECT title, name FROM artist JOIN song ON artist.id = song.artist_id`, (err, result) => {
//     console.log(result);
// })

const app = express()
app.use(express.urlencoded({ extended: true}))

app.use(songRouter)
app.use(productsRouter)
dotenv.config();

const port = process.env.PORT;
const pass = process.env.DBPASSWD;

app.get("/", (req, res) => {
    res.send("Velkommen til min node.js app " + port + " " + pass);
})

app.listen(process.env.PORT, () => {
    console.log(`Kører på port: http://localhost:${process.env.PORT}`);
})

app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})