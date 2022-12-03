const Employee = require('../lib/employee');

test('create employee', () =>{
    const employee = new Employee('Rathalos',579,'MHFU@gmail.com');
    expect(employee.name).toEqual('Rathalos');
    expect(employee.id).toEqual(579);
    expect(employee.email).toEqual('MHFU@gmail.com');
});

test('test get id',() =>{
    const employee = new Employee('Rathalos',579,'MHFU@gmail.com');
    expect(employee.getId()).toEqual(579);
});

test('test get email',() =>{
    const employee = new Employee('Rathalos',579,'MHFU@gmail.com');
    expect(employee.getEmail()).toEqual('MHFU@gmail.com');
});

test('testing get role',() =>{
    const employee = new Employee('Rathalos',579,'MHFU@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});