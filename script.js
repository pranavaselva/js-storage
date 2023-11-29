//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

// Challenge 2:
localStorage.getItem('firstName');
localStorage.getItem('lastName');
localStorage.getItem('age');
localStorage.getItem('country');
console.log(localStorage);

// Challenge 1:
localStorage.setItem('firstName', 'Rajat');
localStorage.setItem('lastName', 'singh');
localStorage.setItem('age', 25);
localStorage.setItem('country', 'India');
localStorage.setItem('state', 'Mumbai');
console.log(localStorage);

// Challenge 3:
localStorage.removeItem('state');
console.log(localStorage);

// Challenge 4:
localStorage.clear();

// Challenge 5:
var use = JSON.stringify(user);
console.log(use);
