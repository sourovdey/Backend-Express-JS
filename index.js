const express = require('express');


const app = express(); //main app

// app.set('view engine','ejs');

// app.get('/', (req, res)=>{
//     // console.log(res.headersSent)
//     // res.send("Home Page!")
//     // console.log(res.headersSent)
//     res.render('pages/contact',{
//         number : '01837717713'
//     });
// })
// app.get('/', (req, res)=>{
//     // res.set('Content-Type', 'text/plain')
//     res.set('Name', 'Sourov Dey')
//     console.log(res.get('Name'))
//     res.send("Home Page!")
    
// })

// app.get('/', (req, res)=>{

//     // res.send("Home Page!")
//     res.cookie() 
//     res.end()   
// })
// app.get('/', (req, res)=>{

//     // res.send('Hello World')
//     res.json({'name':'Sourov'})
// })
// app.get('/', (req, res)=>{

//     // res.status(500)
//     // res.end()
//     // res.status(200).send('OK..')
//     // res.status(400).send('Bad Request..')
//     // res.status(404).send('Not Found..')
//     // res.status(500).send('Internal Server Error..')
//     res.sendStatus(500)
// })

// app.get('/', (req, res)=>{

//     res.format({
//         'text/plain': function () {
//             res.send('hey text/plain')
//         },

//         'text/html': function () {
//             res.send('<p>hey text/html</p>')
//         },

//         'application/json': function () {
//             res.send({ message: 'hey application/json' })
//         },

//         default: function () {
//             // log the request and respond with 406
//             res.status(406).send('Not Acceptable')
//         }
//     })
// })


// app.get('/', (req, res)=>{
//     // res.cookie('login', 'Sourov Dey')
//     res.cookie('login', 'Sourov',{domain: '.sourovdey.com',path: '/admin', secure: true})
//     res.send('Hello')
// })

// app.get('/', (req, res)=>{
//     res.location('http://sourov.com')
//     res.send('Hello')
// })
app.get('/', (req, res)=>{
    res.redirect('/blog')
    res.end()
})
app.get('/about', (req, res)=>{
    res.send('About Page')
})
app.get('/blog', (req, res)=>{
    res.status(404).send('Blog Page')
})

app.listen(5000,() =>{
    console.log('Server Running...')
})