const rxpress = require('express');

const app = express();

app.get('/',(req, res) =>{
    res.send('h');

});

app.listen(3000);

console.log('Server listen: http://localhost:3000');