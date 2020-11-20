const express=require('express');
const app=express();
const path=require('path'); 
const style_path=path.join(__dirname,"./public");
// console.log(style_path);
const port=process.env.PORT || 4000;
app.use(express.static(style_path));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
   res.render('index');
});
app.get('/about',(req,res)=>{
   res.render('about');
});
app.get('/weather',(req,res)=>{
   res.render('weather');
});
app.get('*',(req,res)=>{
   res.render('404page');
});
app.listen(port);