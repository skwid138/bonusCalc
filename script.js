console.log('script.js sourced');

var employeeList = []; // holds list of employees

// builds initial employee object
function Employee(name, employeeNumber, annualSalary, reviewRating) {
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
    employeeList.push(this); // something to add it to the array
}

var hunter = new Employee('hunter', 1234, 1234, 3);
console.log('Employee  test ->', hunter)
console.log('employeeList array ->', employeeList);


// takes an employee object and makes a new object with bonus amounts
function Bonus() {
    for () {

    } // end for
}

function bonusCalc( rating, ) {
    if (rating === 5) {

    } else if (rating === 4) {

    } else if (rating === 3) {

    } else {

    }
}