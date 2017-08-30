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

var hunter = new Employee('hunter', '1234', '10000', 3);
console.log('Employee  test ->', hunter)
console.log('employeeList array ->', employeeList);




function bonusCalc( rating, salary, employeeNumber ) {
    var percentage = 0;
    // Beginning of rating check
    if (rating === 5) {
        percentage += 0.10;
    } else if (rating === 4) {
        percentage += 0.06;
    } else if (rating === 3) {
        percentage += 0.04;
    };
    // Beginning of salary check
    if (salary > 65000) {
        percentage -= 0.01;
    };
    // Beginning of employee number check
    if (employeeNumber.length === 4) {
        percentage += 0.05;
    };
    // Beginning of bonus range check
    if (percentage > 0.13) {
        percentage = 0.13;
    } else if (percentage < 0) {
        percentage = 0;
    };
    return percentage;
};

console.log(bonusCalc (5, '64000', '1234'));

// takes an employee object and makes a new object with bonus amounts
function Bonus(employee) {
        this.name = employee.name;
        this.bonusPercentage = bonusCalc(employee.reviewRating, employee.annualSalary, employee.employeeNumber);
        this.totalBonus = Math.round(parseInt(employee.annualSalary) * this.bonusPercentage);
        this.totalCompensation = this.totalBonus + parseInt(employee.annualSalary);
        this.totalBonus = this.totalBonus.toString();
        this.totalCompensation = this.totalCompensation.toString();
        console.log('Employee Payout -> ', this.totalCompensation);
}

console.log('bonus test -> ', new Bonus(hunter));
