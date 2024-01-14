// https://lodash.com/
// https://www.jsdelivr.com/package/npm/lodash

const customers = ['Bob', 'Noel', 'Kate'];

const activeCustomers = ['Bob', 'Noel'];

const inactiveCustomers = _.difference(customers, activeCustomers);

// const test = _.difference([2, 1], [2, 3]);
// console.log(test);

console.log(inactiveCustomers);
