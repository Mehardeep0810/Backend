function demo(a,b,callback){
  var c =a*b+a;
  callback(c);
}
demo(10,20,function(result){
console.log(result);
})

//multiple parameters
function demo(a,b,callback){
  var c =a*b+a;
  callback(c,"this is the answer");
}
demo(10,20,function(c,msg){
console.log(c+ msg);
})