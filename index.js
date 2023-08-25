const express = require('express');
// const cookieparser = require('cookie-parser');
const reg = require('./regitration')

const app = express(); //main app
// app.use(cookieparser())
// app.use(express.json())


// const admin = express();//sub app

// admin.get('/dashboard',(req, res)=>{
//     console.log(req.baseUrl)
//     console.log(req.originalUrl)
//     console.log(req.path)
//     console.log(req.hostname)
//     console.log(req.ip)
//     res.send("Dashboard Page.")
// })



// app.get('/', (req, res)=>{
//     // console.log(req.baseUrl)
//     // console.log(req.originalUrl)
//     // console.log(req.path)
//     // console.log(req.hostname)
//     console.log(req.protocol)
//     // console.log(req.query.search_query)
//     console.log(req.secure === "Https")
//     res.send("Home Page!")
// })

// app.get('/about/:id', (req, res)=>{
//     console.log(req.params)
//     console.log(req.params.id)
//     res.send("About Page!")
// })

// app.post('/regitration', (req, res)=>{

//     console.log(req.body)
//     res.send("Regetration Page!")
// })

app.post('/regitration',reg)

// app.use('/admin', admin);


app.listen(5000,() =>{
    console.log('Server Running...')
})