const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;
const app = express();
const router = require('./routers/Router.js');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.json()); 

require('./config/db.js');

app.use(router);

app.listen(port, () => {
    console.log(`App está rodando na porta ${port}`);
});


