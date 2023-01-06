const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')
const router = require('./routes/api');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//when the url localhost:8080/ is entered, the get request below is executed.
app.get('/', (req, res) => {
    res.send('hello from server :)');
})
//when the url localhost:8080/api is entered, the server knows it has to use api
app.use('/api', router);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
