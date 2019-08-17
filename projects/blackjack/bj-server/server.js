const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:3000"}));

app.get('/',
  (req, res) => res.json({greeting: "OLA"}));

app.listen(8090, () => console.log('blackjack server is listening on 8090...'));
