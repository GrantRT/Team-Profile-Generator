const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Grant', '1', 'grant@grant.com', 'GrantRT');

describe('Engineer name', () => {
  it("returns the engineer's name", () => {
    expect(engineer.getName()).toEqual('Grant');
  });
});

describe('Engineer ID', () => {
  it("returns the engineer's ID", () => {
    expect(engineer.getId()).toEqual('1');
  });
});

describe('Engineer email', () => {
  it("returns the engineer's email address", () => {
    expect(engineer.getEmail()).toEqual('grant@grant.com');
  });
});
describe('Engineer github', () => {
  it("returns the engineer's github name", () => {
    expect(engineer.getGithub()).toEqual('GrantRT');
  });
});

describe('engineer role', () => {
  it("returns the engineer's role", () => {
    expect(engineer.getRole()).toEqual('Engineer');
  });
});
