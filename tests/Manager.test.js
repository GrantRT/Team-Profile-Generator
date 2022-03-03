const Manager = require('../lib/Manager');

const manager = new Manager('Grant', '1', 'grant@grant.com', '777');

describe('Manager name', () => {
  it("returns the manager's name", () => {
    expect(manager.getName()).toEqual('Grant');
  });
});

describe('manager ID', () => {
  it("returns the manager's ID", () => {
    expect(manager.getId()).toEqual('1');
  });
});

describe('manager email', () => {
  it("returns the manager's email address", () => {
    expect(manager.getEmail()).toEqual('grant@grant.com');
  });
});
describe('manager github', () => {
  it("returns the manager's github name", () => {
    expect(manager.getOfficeNumber()).toEqual('777');
  });
});

describe('manager role', () => {
  it("returns the manager's role", () => {
    expect(manager.getRole()).toEqual('Manager');
  });
});
