const express = require('express');

const app = express(); //main app
const admin = express();//sub app
// const user = express();//sub app

//event
// admin.on('mount',function(parent){
//     console.log('Admin Mounted');
//     console.log(parent)
// });

// app.locals.title = "Hello developer";
// app.locals.name = "Sourov Dey";

// app.get('/', (req, res) =>{

//     // console.log(app.locals.title, app.locals.name)
//     res.send("Home Page")
// });

// app.enable('case sensitive routing..')
// app.disable('case sensitive routing..')

// app.set("name", "Sourov")

// admin.get('/',(req, res)=>{
//     console.log(app.get("name"))
//     res.send("this is admin page")
// });

// admin.post('/',(req, res)=>{
//     res.send("this is admin page - post method")
// });

// admin.put('/',(req, res)=>{
//     res.send("this is admin page - put method")
// });

// admin.all('/',(req, res)=>{
//     res.send("this is All Method")
// });

// admin.delete('/',(req, res)=>{
//     res.send("this is delete Method")
// });

// admin.get('/',(req, res)=>{
//     console.log(user.mountpath);
//     res.send("this is admin page")
// });

// user.get('/',(req, res)=>{
//     res.send("this is user page");
// });

// admin.param('id',(req, res, next, id) =>{
//     const userdetails = {
//         userId : id,
//         userName : "Sourov",
//     };

//     req.userData = userdetails;
//     next();
// })

// admin.get('/user/:id',(req, res)=>{
//     console.log(req.userData)
//     res.send("this is admin page");
// });

// admin.get('/',(req, res)=>{
//     console.log(admin.path());
//     res.send("this is admin page");
// });

// admin.route('/adminpanel')
//     .get((req,res) =>{
//         res.send("This is admin Home")
//     })
//     .post((req,res) =>{
//         res.send("This is reg Home")
//     })

// admin.get('/',(req, res)=>{
//     res.send("this is admin page");
// });

// admin.post('/',(req, res)=>{
//     res.send("this is reg page");
// });

app.set("view engine", 'ejs');

admin.route('/')
    .get((req,res) =>{
        res.render('index')
    })
    // .get((req,res) =>{
    //     res.render('pages/contact')
    // })
    .post((req,res) =>{
        res.send("This is reg Home")
    })

app.use('/admin', admin);
// app.use('/admin/ouradmin', admin);
// app.use('/user', user);

app.listen(5000,() =>{
    console.log('Server Running...')
})