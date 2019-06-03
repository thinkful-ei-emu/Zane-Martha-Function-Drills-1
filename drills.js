'use strict';

function createGreeting (name, age){
  return `Hi, my name is ${name} and I am ${age} years old.`;
}

function getYearOfBirth(age){
  const yob = 2019 - age;
  return `I was born in ${yob}.`;
}

const greeting1 = createGreeting();
console.log(greeting1);
