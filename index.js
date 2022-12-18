const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const genHTML = require('./src/genHTML');

staffArray = [];

const newManager = () =>{
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Please enter the managers name'
        },{
            type:'input',
            name:'id',
            message:'Please enter the managers ID'
        },{
            type:'input',
            name:'email',
            message:'Please enter the managers email'
        },{
            type:'input',
            name:'officeNum',
            message:'Please enter the managers room number'
        }
    ]).then(managerData=>{
        const {name, id, email, officeNum} = managerData;
        const manager = new Manager(name,id,email,officeNum);
        staffArray.push(manager); 
    })
}

const newStaff = () =>{
    return inquirer.prompt([
        {
            type:'list',
            name:'role',
            message:'select a role',
            choices:['Intern','Engineer']
        },{
            type:'input',
            name:'name',
            message:'Enter a name'
        },{
            type:'input',
            name:'id',
            message:'Enter ID'
        },{
            type:'input',
            name:'email',
            message:'enter employee email'
        },{
            type:'input',
            name:'github',
            message:'Enter employee github username',
            when:(input)=>input.role ==='Engineer'
        },{
            type:'input',
            name:'school',
            message:'Enter employee school',
            when:(input)=>input.role ==='Intern'
        },{
            type:'confirm',
            name:'anotherOne',
            message:'add another employee?',
            default: false
        }
    ]).then(staffData =>{
        let {name,id,email,role,school,github,anotherOne} =staffData;
        let employee;
        if (role ==='Intern'){
            employee = new Intern (name,id,email,school);
        } else if (role ==='Engineer'){
            employee = new Engineer(name,id,email,github);
        }
        staffData.push(employee);
        if(anotherOne){
            newStaff(); 
        } 
    })
}