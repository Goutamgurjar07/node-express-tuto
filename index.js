const path=require('path')
const express = require('express')
const app=express();
const hbs=require('hbs')

// let staticPathName=path.join(__dirname+'/public')
let templatePath=path.join(__dirname,'/templates/views')
let partialPath=path.join(__dirname,'/templates/partials')

app.set('view engine','hbs')
app.set('views',templatePath)

hbs.registerPartials(partialPath)

console.log(templatePath);
// app.use(express.static(staticPathName))

app.get('/',(req,res)=>{
    res.render('profile',{
     uname:'poonam'
    })
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.listen(8080,()=>{
     console.log('server is running on port no 8000');
})