const bcrypt = require("bcrypt");

//callback is a function which is passed inside another function
//passing the result of outer function inner function for further computation

/*****Function that return the mean value ***********/
/********** Array Data **********/
const arr = [2, 4, 4, 5, 6];
/****Unnamed Function*****/
let arrayTotal = "";
const meanValue = function (arr, total) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  arrayTotal = arr.reduce(reducer);
  arrayTotal = arrayTotal / total;
  return arrayTotal;
};

const value = meanValue(arr, arr.length);
console.log(value);

/****Named Function*****/
let arrayTotals = "";
function meanValues(arr, total) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  arrayTotals = arr.reduce(reducer);
  arrayTotals = arrayTotals / total;
  return arrayTotals;
}

const values = meanValues(arr, arr.length);
console.log(values);

/****Arrow Function *****/
let arrayTotalss = "";
const meanValuess = (arr, total) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  arrayTotalss = arr.reduce(reducer);
  arrayTotalss = arrayTotalss / total;
  return arrayTotalss;
};

const valuess = meanValuess(arr, arr.length);
console.log(valuess);

/*****Function passed as argument inside map ***********/

const persons = ["pallavi", "Rahul", "Paiya", "Yaml", "Toila"];
function greet(name) {
  return `Hello, ${name}!`;
}

//if we pass the arr to the greet and grab value in a variable it show result a string of values
const people = greet(persons);
console.log(people);

//if we iterate over the map and pass the function then store that it give an object [..,..]
const messages = persons.map(greet);
console.log(messages);

/*****Create Hummus***********/
let receipes = [];
let steps = [];
const hummus = function (intensity, amount, unit, name) {
  let amountIngredient = "";
  const ingredient = function (amount, unit, name) {
    amountIngredient = amount * intensity;
    if (amountIngredient > 1) {
      unit += "s";
    }
    return `${amountIngredient} ${unit} ${name}`;
  };
  const value2 = ingredient(amount, unit, name);
  return steps.concat(value2);
};

// you can input this value with an input form
//use an onClik event and assign the function
// to create a hummous receipe
// then you can add these results in an array to receipe list
// require to make pizza"
//you can display this list to show what stuffs needs dynamically
//nextwhen you want to change your measured values
//just update it in the database

const receipe = hummus(2, 0.25, "cup", "lemon juice");

console.log(receipe);

/*****Create Hummus using a callback***********/

//this is the data we want to give to the function
const fooditems = [
  {
    foodName: "cinnamon",
    quantity: "4",
  },
  {
    foodName: "ajwain",
    quantity: "0.53",
  },
  {
    foodName: "salt",
    quantity: "2",
  },
];

//this is the defination of the fucntion

const showFoodList = (data, format) => {
  //traverse the array : You can use either of the loops
  const mappedArray = [];
  for (const item of data) {
    //push the item to the callback function to show the message
    mappedArray.push(format(item));
  }

  // data.forEach((element) => {
  //   console.log(element);
  // });

  //data.map((r) => console.log(r));

  return mappedArray;
};

//we want to display function like this
function showingredientlists(item) {
  console.log(item);
  return `take, ${item.foodName} with a measurement of ${item.quantity}`;
}

/******Other way***********/

//this function takes the data and the format we want to display the
//data with
//we can call this function either in a render block
//call this function onClick event
const disPlayFood = showFoodList(fooditems, showingredientlists);

/************Hashing Password Using bcrypt ************ */
const saltRounds = 10;
const password = "Fkdj^45ci@Jad";

//passing the result of 1st method to the callback method
bcrypt.genSalt(saltRounds, function (err, salt) {
  //with the bcrypt it gives a hash which is passed to the function as parameter
  const hashed = bcrypt.hash(password, salt, function (err, hash) {
    if (err) {
      console.log(err);
    }
    console.log(hash);
  });
});

//https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt
