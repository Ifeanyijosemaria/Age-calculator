

document.getElementById("hello").onclick= sayHello;

// create a function
function sayHello() {
    console.log("hello")
    // get the user name input from the text
    let yourName = document.getElementById("yourname").value;
    console.log("your name is" + " " + yourName)
    // display message in the inner element
    document.getElementById("msg").innerHTML = "Hello" + " " + yourName + "!";
    // get the age from the user
    let yourAge =  document.getElementById("age").value;
    console.log("Your age is" + " " + yourAge)
    // display the age message
    document.getElementById("agemsg").innerHTML= "Your age is" + " " + yourAge; 
    // change the age to number
    yourAge = parseInt(yourAge)
    // this lines of code calculates your age in 10 years 
    let age10 = yourAge + 10;
    console.log("type is" + " " + typeof yourAge);
    console.log("age10 is" + " " + age10);
    // DISPLAY MY AGE IN 10 YEARSs
    document.getElementById("age10").innerHTML =
      "Hello " + yourName + " "+ "your age in 10 years will be" + " " + age10;


}