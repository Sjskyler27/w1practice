// express web server 
const express = require('express'); // require is grabbing from node modules, it allows us to use express on this page
const app = express(); // the object app now has the functionallity of express

app.get('/',(req,res) =>{
    res.send('Hello skyler ');
});
app.get('/home',(req,res) =>{
    res.send('homepage ');
});

const port = 3000

app.listen(port || process.env.port);
console.log('Web server at port: ' + (port || process.env.port));

