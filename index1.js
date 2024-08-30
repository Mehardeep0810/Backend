const express = require('express');
const homeroute=require("./route/home.js")
const loginroute = require("./route/login.js")
const app=express()
app.use("/",homeroute)
app.use("/",loginroute)
app.listen((5500),()=>{
  console.log("Server is Running")
})