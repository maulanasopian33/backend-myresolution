const bodyParser = require('body-parser');
const express = require('express');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let routes = require('./routes');
routes(app);
const PORT = 5000;
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server started on port`);
});

