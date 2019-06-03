'use strict';

function getYearOfBirth(age){
  if(age < 0){
    throw new Error('Age can not be negative');
  } else{
    return 2019 - age;
  }
}

function createGreeting (name, age){
  try{
    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`;
  } catch (error){
    console.log('Entered negative age');
  }
}

const greeting1 = createGreeting('Martha', 29);
console.log(greeting1);
