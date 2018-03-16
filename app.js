const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path'); //manages file system paths of all users
const bodyParser = require('body-parser');
const db = require('./db/_db.js').db; //need the db property of the obj

//logging middle-ware
app.use(morgan('dev'));

//static middleware, we don't have anything to server (headless server)

//parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//other kinds of middleware
app.use('/api', require('./routes'));

//basic error handling middleware
app.use((err, req,res,next) =>{
  console.log(err.stack); //.stack gives the whole story of the error
  res.status(err.status || 500).send(err)
})

app.get('*', (req,res,next)=>{
  res.send('splat');
})

db.sync({force:true})
.then(()=>{
  app.listen(3000, function(){
    console.log('port 3000 started');
  })
})
