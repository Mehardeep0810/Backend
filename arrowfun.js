//example 1
const fa = (x,y,z) =>{
  var q=5;
  return (q+x+y+z);
}
var ans = fa(3,4,5);
console.log("Answer is "+ans);

//example 2
const a=["Hydrogen","Helium","lithium"];
const a2= a.map(function(s){
  return s.length;
})
console.log("Normal way", a2);

//example 3 (simplified of example 2)
const a3 = a.map((s) => s.length);
console.log("Using Arrow function", a3);


const fun=(l)=>l.length;
var ans=fun("chitkara");
console.log(ans);
