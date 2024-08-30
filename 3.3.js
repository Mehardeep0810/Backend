const fs=require("fs");
const data=fs.readFileSync('demo.txt',"utf8");
console.log(data);
console.log("done with blocking");
fs.readFileSync("demo.txt",(err,data)=>{
  if(err) throw err;
  console.log(data);
});
console.log("done with non blocking");