import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send("Velkommen til min node.js app");
})

app.get("/about", (req, res) => {
    res.send("Læs om min node.js app");
})
app.get("/contact", (req, res) => {
    res.send("Kontakt side");
})
app.get("/HvadErMeningenMedNpm", (req, res) => {
    res.send("Der er ingen");
})

app.listen(4242, () => {
    console.log('Kører på port 4242: http://localhost:4242');
})

app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})