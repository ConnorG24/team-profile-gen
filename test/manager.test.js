const Manager = require('../lib/manager');


test('create manager',()=>{
    const manager = new Manager('Fatalis',99,'elderdaragongod@gmail.com',1)
    expect(manager.officeNum).toEqual(1);
});

test('getting office number',()=>{
    const manager = new Manager('Fatalis',99,'elderdaragongod@gmail.com',1)
    expect(manager.getOfficeNum()).toEqual(1);
});

test('test getting role',()=>{
    const manager = new Manager('Fatalis',99,'elderdaragongod@gmail.com',1)
    expect(manager.getRole()).toEqual('Manager');
});