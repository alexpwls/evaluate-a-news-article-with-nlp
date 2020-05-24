const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const AYLIENTextAPI = require('aylien_textapi');

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));

const textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
 
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/sentiment-text', (req, res) => {
    textapi.sentiment({ text: req.body.sentimentText }, (error, result) => {
        if(error) {
            console.log('No valid response for this request.');
            res.send(result);
            return;
        }
        console.log(result);
        res.send(result);
    })
})

app.post('/sentiment-url', (req, res) => {
    textapi.sentiment({ url: req.body.sentimentUrl }, (error, result) => {
        if(error) {
            console.log('No valid response for this request.');
            res.send(false);
            return;
        }
        console.log(result);
        res.send(result);
    })
})

module.exports = app;