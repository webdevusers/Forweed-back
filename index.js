const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5175

app.use(cors())
app.use(express.json())

const formRouter = require('./Form/router/router')

app.use('/form', formRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://developer:NMjtK8DPH0msfB2t@cluster0.pcfz7fr.mongodb.net/');
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});    } catch (e) {
        console.log(e)
    }
}
start();
