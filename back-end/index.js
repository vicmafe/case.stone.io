const express = require('express');
const registerController = require('./Controller/registerController');
const bodyParser = require('body-parser');



const app = express();
const PORT = 3001;
app.use(bodyParser.json());


app.use('/register', registerController);

app.get('/', (_req, res) => {
  res.send("Hello Stone");
});

app.listen(PORT, () => console.log(`app listen on port ${PORT}`));