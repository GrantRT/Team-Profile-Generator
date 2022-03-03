const Employee = require('../lib/Employee');

const employee = new Employee('Grant', '1', 'grant@grant.com');

describe("Employee's name", () => {
  it("returns the employee's name", () => {
    expect(employee.getName()).toEqual('Grant');
  });
});

describe('Employee ID', () => {
  it("returns the employee's ID", () => {
    expect(employee.getId()).toEqual('1');
  });
});

describe('Employee email', () => {
  it("returns the employee's email address", () => {
    expect(employee.getEmail()).toEqual('grant@grant.com');
  });
});

describe('Employee role', () => {
  it("returns the employee's role", () => {
    expect(employee.getRole()).toEqual('Employee');
  });
});
