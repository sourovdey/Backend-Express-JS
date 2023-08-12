const express = require('express');

const app = express();
// app.use(express.json());
// app.use(express.raw());
// app.use(express.text());
// app.use(express.urlencoded());
// app.use(express.static(`${__dirname}/public/`));
// app.use(express.static(`${__dirname}/public/`,{
//     index : 'home.html'
// }));
const router = express.Router({
    caseSensitive : true
});

app.use(router);

router.get('/',(req, res)=>{
    res.send("Hello..")
})
router.get('/about',(req, res)=>{
    res.send("About..")
})


app.get('/', (req, res) =>{
    res.send("This is Home Page.")
})
// app.get('/resume', (req, res) =>{
//     res.send("This is Resume Page.")
// })
// app.get('/about', (req, res) =>{
//     res.send("This is About Page.")
// })
app.post('/contact', (req, res) =>{
    // req.body()
    // console.log(typeof(req.body))
    console.log(req.body.toString())
    res.send("This is Contact Page");
})


app.listen(5000, () =>{
    console.log("Server is runnig...")
})