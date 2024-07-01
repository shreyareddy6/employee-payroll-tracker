// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray=[];

// Collect employee data
const collectEmployees = function() {

  let keepGoing = true;

  while(keepGoing) {
    // TODO: Get user input to create and return an array of employee objects
    let firstName = window.prompt("Enter first name");
    let lastName = window.prompt("Enter last name");
    let salary = window.prompt("Enter salary");

    //salary is string initially as we get it from prompt input, parseFloat converts it into number
    salary = parseFloat(salary);

    //store the details of the employee in an object
    const employeeData = {
      firstName : firstName,
      lastName : lastName,
      salary : salary
    }
    employeesArray.push(employeeData);
    keepGoing=window.confirm("Do you want to add another employee?");
  }
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  for(let employee of employeesArray) {
    totalSalary += employee.salary; 
  }
  let averageSalary = totalSalary / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex =  Math.floor(Math.random()*employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
