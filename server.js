const express = require('express');
const dotenv = require('dotenv');

//Load ENV
dotenv.config({ path: './config/confg.env' });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up @ ${PORT}`));
