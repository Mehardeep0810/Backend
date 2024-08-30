const express=require('express')
const app=express();
const port=5500;
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.get('/',(req,res)=>{
    res.render('home',{name:'Mehardeep 2210997287'});
});
app.get('/home1',(req, res)=>{
    let data={
        name:'Mehardeep Kaur',
        hobbies:['Baking','Reading']
    }
    res.render('home1',{data:data});
});
app.get('/home2',(req,res)=>{
    res.render('home2',{message:'This is experiement 4.1'});
});

app.listen(port,function(){
    console.log(`Server is running on http://localhost:${port}`);
})