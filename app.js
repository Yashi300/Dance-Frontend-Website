const express=require("express");
const path=require("path");
const app=express();
const port=process.env.PORT || 800;


app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const param={}
    res.status(200).render('home.pug',param);
})

app.get('/contact',(req,res)=>{
    const param={}
    res.status(200).render('contact.pug',param);
})
app.get('/about',(req,res)=>{
    const param={}
    res.status(200).render('about.pug',param);
})


app.listen(port,(req,res)=>{
    console.log(`The app started successfully on port ${port}`);
})