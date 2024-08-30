console.log("Mehardeep 2210997287")

let EmployeeData =[
  {name:"Mehar", Salary:30000, State:"Punjab"},
  {name:"Swati", Salary:30000, State:"Punjab"},
  {name:"Simran", Salary:20000, State:"Haryana"},
  {name:"Sweta", Salary:40000, State:"Goa"},
  {name:"Sikha", Salary:50000, State:"Delhi"},
 
];

function fun(){
  let newarr= EmployeeData.filter(Employee=> Employee.Salary>20000 && Employee.State=="Punjab");
    console.log(newarr);
}
fun();