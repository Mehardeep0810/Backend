console.log("Mehardeep 2210997287");

let employeeData=[
  {name:"John Doe",age:28,salary:25000,state:"Punjab"},
  {name:"John",age:34,salary:18000,state:"Punjab"},
  {name:"Emily",age:30,salary:22000,state:"Punjab"},
  {name:"Michael",age:40,salary:26000,state:"Delhi"},
  {name:"Jessica Wilson",age:25,salary:24000,state:"Punjab"},
];

const increasedSalary = employee=>({
...employee,
salary: employee.salary*1.10
});

//arrow function to process employee data
const processEmployees =(data,func)=>{
  return data.map(func); //returning individual value to updated data 
};

//Process the employee data with the provided function
const updatedData = processEmployees(employeeData, increasedSalary);

//Print the updated employee data
console.log(updatedData);

