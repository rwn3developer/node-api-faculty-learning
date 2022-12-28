const express = require('express'); //node module

const port = 9000;

const app = express();

const path = require('path'); //node module

app.set('view engine','ejs');  //ejs node module
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,(err)=>{   
    if(err){
        console.log("Server is not start");
        return false;
    }
    console.log("Server is start on port :- "+port);
})