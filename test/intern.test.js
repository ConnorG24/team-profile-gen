const Intern = require('../lib/intern');


test('create intern',()=>{
    const intern = new Intern('Jagras',54,'greatjagras@hotmail.com','Monster University')
    expect(intern.shcool).toEqual('Monster University');
});

test('test getting school',()=>{
    const intern = new Intern('Jagras',54,'greatjagras@hotmail.com','Monster University')
    expect(intern.getSchool()).toEqual('Monster University');
});

test('test getting role',()=>{
    const intern = new Intern('Jagras',54,'greatjagras@hotmail.com','Monster University')
    expect(intern.getRole()).toEqual('Intern');
});