console.log("Mehardeep 2210997287");

let employees=[
  {name:"John Doe",age:28,salary:25000,state:"Punjab"},
  {name:"John",age:34,salary:18000,state:"Punjab"},
  {name:"Emily",age:30,salary:22000,state:"Punjab"},
  {name:"Michael",age:40,salary:26000,state:"Delhi"},
  {name:"Jessica Wilson",age:25,salary:24000,state:"Punjab"},
  {name:"Chris",age:38,salary:28000,state:"Gujarat"},
  {name:"Notalie",age:35,salary:19000,state:"Punjab"},
  {name:"Robert",age:50,salary:30000,state:"Maharastra"},
  {name:"Johanson",age:29,salary:23000,state:"Tamil Nadu"},
  {name:"Tom",age:33,salary:27000,state:"Punjab"},
];
employees=employees.map(employee=>{
  return{
    salary:employee.salary*1.1
  };
})
let highSalaryEmployees=employees.filter(employee=>employee.salary>=25000);
console.log(highSalaryEmployees);