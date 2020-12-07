const { response } = require('express');
const rxpress = require('express');

const app = express();

app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.use((req, res, next)=>{
    console.log(`middleware: all url: ${req.url}`);

    response.header("Acces-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

next();
});

app.post('/',(req, res)=> {
    let message = req.body.message;
    let result = {
        message: req.body.message,
    };
res.send(result);
    });

app.get('/',(req, res,) =>{
    res.send('Hello World!');

});

app.listen(3000)

console.log('Server listen: http://localhost:3000');