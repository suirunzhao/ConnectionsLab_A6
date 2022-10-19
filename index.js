let express = require('express');

let app = express();

// app.get('/',(req,res) =>{

// });
app.use('/', express.static('public'));


app.listen(3000,() => {
    console.log('loaded');
});