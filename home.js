const express=require("express");
const router=express.Router();
router.get("/home",(req, res, next) =>{
  res.send("This is the home page")
})
module.exports=router;