const express = require('express')
var path = require('path');
const app = express();
const port = 3000;

// Routers for subsites
var requestsRouter = require('./routes/requests');
var authRouter = require('./routes/auth'); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', requestsRouter);
app.use('/auth', authRouter);

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

module.exports = app