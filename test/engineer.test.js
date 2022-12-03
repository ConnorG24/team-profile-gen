const Engineer = require('../lib/engineer');

test('create engineer',()=>{
    const engineer = new Engineer('Diablos',666,'diablosMHFU@yahoo.com','diablosHMFU343')
    expect(engineer.github).toEqual('diablosHMFU343');
});

test('test getting github',()=>{
    const engineer = new Engineer('Diablos',666,'diablosMHFU@yahoo.com','diablosHMFU343')
    expect(engineer.getGithub()).toEqual('diablosHMFU343');
});

test('test getting role',()=>{
    const engineer = new Engineer('Diablos',666,'diablosMHFU@yahoo.com','diablosHMFU343')
    expect(engineer.getRole()).toEqual('Engineer');
});