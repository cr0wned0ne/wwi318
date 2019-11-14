console.log("Hello from external script");
//Declare variables
// "var" should not be used anymore.
let x = 1;
x = true;
x = 1.1;
x = new Date();
x = 1;
x = 'Peter';
console.log("let x is: ", x);

const y = 2;

const myArray = ['Dog', new Date()];

const myObject = {
    name : 'Stefan',
    age : 30,
    birthday : new Date(),
    favoriteFood: ['pizza', 'pasta'],
    address: {
        city: 'Stuttgart',
        postCode: '70176'
    }
}
console.log(myObject);