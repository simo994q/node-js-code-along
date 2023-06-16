import express from 'express'
import { router as songRouter } from './routes/song.router.js';
import { router } from './routes/init.sequelizer.router.js';
import { router as UserRouter } from './routes/user.router.js'
import dotenv from 'dotenv';


const app = express()
app.use(express.urlencoded({ extended: true }))


app.use(songRouter)
app.use(router)
app.use(UserRouter)
dotenv.config();


const port = process.env.PORT;


app.get("/", (req, res) => {
    res.send("Velkommen til min node.js app " + port);
})


app.listen(process.env.PORT, () => {
    console.log(`Kører på port: http://localhost:${process.env.PORT}`);
})


app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})
