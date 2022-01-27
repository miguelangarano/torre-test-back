const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const axios = require('axios');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(cors())

app.get('/api/bios/:username', async (req, res) => {
  const respdata = await axios.get('https://torre.bio/api/bios/' + req.params.username)
    .catch(error => {
      console.log(error);
    });
  res.status(200).send({ message: "ok", data: respdata.data })
})


app.listen(port, () => {
  console.log(`corriendo en http://localhost:3001`)
});