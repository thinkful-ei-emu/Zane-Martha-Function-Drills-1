"use strict";

function getYearOfBirth(age){
    if(age<0){
        throw new Error("Age can not be negative.")
    }
    
    return  2019-age
    
}

function createGreeting(name, age){
    if(age<0){
        throw new Error('Age can not be negative.')
    }
    if( name === undefined|| age === undefined) {
        throw new Error('Arguements not Valid')
    } 
    if(typeof name !=="string"){
        throw new TypeError('Arguement is not a string');
    }
    if(typeof age !== 'number'){
        throw new TypeError('Argument is not a number')
    }
    const yob=getYearOfBirth(age);
    return `Hi, my name is ${name} and im ${age} years old, I was born in ${yob}`;
}
    



try{
    const greeting1=createGreeting("Zane",27);
    console.log(greeting1);
} catch(e){
    console.error(e.message)
}


    


