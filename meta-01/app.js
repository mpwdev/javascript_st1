const company = {
  curEmployee: 0,
  employees: ['Bob', 'Dan', 'Kate'],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  },
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

let employee = company.next();

while (!employee.done) {
  console.log(employee.value);
  employee = company.next();
}
