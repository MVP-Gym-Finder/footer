const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = 8001;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use(express.static(path.join(__dirname, './')));

app.listen(port, () => console.log(`\u001b[1;34mMVP Server listening on port ${port}\u001B[37m`));
