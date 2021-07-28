const express = require("express");
const morgan = require('morgan')
const app = express();

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//SETTING
app.set("port", process.env.PORT || 3000)
app.set('json spaces', 2)

//Middlelwares
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
// app.use(express.json);

//Router
app.use('/api/database/',require('./routes/database'))
app.use(require('./routes/index'))

app.listen(app.get('port'), () => {
    console.log(`El servidor está inicializado en el puerto ${app.get('port')}`);
});