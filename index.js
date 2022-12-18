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