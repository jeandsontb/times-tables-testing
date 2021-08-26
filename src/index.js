const express = require('express');
const path = require('path');

const port = process.env.port || 3232;

const app = express();
const indexRoute = require('./routes/index');
const tableRoute = require('./routes/tables');

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

//====
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRoute);
app.use('/tables', tableRoute);



app.listen(port, () => console.log('Server started in port '+port));