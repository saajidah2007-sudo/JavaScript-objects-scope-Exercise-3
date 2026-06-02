//Create a global variable called globalCount

let globalCount = 10;

console.log("Original globalCount:" + globalCount);

//Create a function that demonstrate local scope 

function demonstratesLocalScope() {
  let localCount = 5;

  console.log("Inside the function:");
  console.log("Local Count:", localCount);
  console.log("Global Count:", globalCount);
}

//Create a function that tries to modify both variables

function modifyBothVariables() {
  let localCount = 20;
  globalCount ++;
  localCount ++;

  console.log("Modified Local Count:", localCount);
  console.log("Modified Global Count:", globalCount);
}

modifyBothVariables();

console.log("Global Count Outside Function:", globalCount);


//Create a Student constructor function

function Student(name, age , course) {
  this.name = name;
  this.age = age;
  this.course = course;

  this.introduce = function() {
  
    console.log("Hi, my name is " + this.name + ". I'm " + this.age + " years old and I study " + this.course + ".");
  }
}

//Create a several student instnaces 

let student1 = new Student ('Saajidah', 18 , 'Architecture');
let student2 = new Student ('Mawaddah', 13 , 'Visual Communication');
let student3 = new Student ('Natheerah' , 24 , 'Software Development');

student1.introduce();
student2.introduce();
student3.introduce();

//Create an object literal with nested properties 

let person = {
  firstName: "Saajidah",
  lastName: "Abrahams",
  favouriteColour: "Blue",

  contactDetails: { 
    email:"lola@example.com",
    phone:"123-456-789",

    hobbies: {
      outdoors: "Hiking",
    }
  }
}


let { firstName, lastName, favouriteColour, contactDetails: { email, phone, hobbies: { outdoors } } } = person;

console.log("My name is " + firstName + ". My surname is " + lastName + ". My outdoor hobby is " + outdoors + ". My contact email is " + email + " and my contact phone number is " + phone + ".");
