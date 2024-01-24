const express = require('express')
const path = require('path')
const cors = require('cors')

require('dotenv').config() 

const port = process.env.PORT

const app = express()


const router = require('./routers/Router.js');


app.use(cors({credentials:true ,origin: 'http://localhost:3000'}))

app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

require('./config/db.js')


app.use(router)
app.use(express.urlencoded({ extended:false }))

app.listen(port,() => {
    console.log(`app esta rodando na porta ${port}`);
})
