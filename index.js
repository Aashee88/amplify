//  1. Ways to print out Javascript
// console.log("Hallo world")
// alert("touchme");
// document.write("This is focument write")

// 2. Javascript console API
// console.log(" Hallo World", 4 + 4 * 8, "Another Log");
// console.warn("This is a warning message");
// console.error("This is a error message");

// 3. Javascript Variables

/* What are Variables ? = Containers to store data values
Multi line 
comment */

// var number1 = 34 - 22;
// var number2 = 22 - 2;
// console.log(number1 + number2);



// // 4. String types in Javascript
// var str1 = "This is a string";
// var str2 = "This is also a string";

// // 5. Data type in JS
// var num1 = 45;
// var num2 = 22.22;

// //  6.Object type in JS
// var marks = {
//     Ravi: 22,
//     Shubhi: 32,
//     Cherry: 25
// }

// // Booleans
// var a = true;
// var b = false;

// // undefined
// var und = undefined;

// // Null
// var n = null;

// // /*Data type in Javascript 
// a.Primitive -- undefined, null, number, string, boolean, symbol.
// b.reference data type -- Arrays, objetcs */



// // 7. Arrays - collections of elements (collections of number, strings, boolean)
// var arr = [1, 2, 3, 4, 5]

// // 8. Operators in Javascript
// var r = 22;
// var s = 53;
// // console.log("The value of r + s", r+s);
// console.log("The value of r - s", r-s);


// Assignment operators
// var r = s;
// r -= 2; (r = r-2)
// r *= 2; (r=r*2)
// etc

// Comparison operators
/*var x = 32;
var y = 40;
// console.log(x == y);
console.log(x <=y); */

// Logical Operators
// AND
/*console.log(true && true)
console.log(true && false)
console.log(false && false)*/
// OR
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

//  NOT
// console.log(!true)
// console.log(!false)

// Operators -- and operants
// +,-,*             34,22,25  


// 9. Javascript Functions
// DRY= DONOT REPEAT YOURSELF

//function avg(a, b){
/*  return (a+b)/2;
}
c1 = avg(18, 2);
c2 = avg(10, 12);
console.log(c1, c2); */
//  BLue - Number 
//  String - Black

// 10. Conditional in Javascript
// IF Statement
// var age = 20
// if(age>8){
// console.log('You are not a kid');
// }
// IF ELSE Statement
// var age = 20
// if(age>8){
//     console.log('You are not a kid');
//     }
// else{
//     console.log('You are a kid')
// }

// IF Else Ladder Statement

/*var age = 20
if(age > 8){
        console.log("You are not a kid");
        }
    else if(age >12){
        console.log("You are not a kid");
    }
    else if(age >14){
    console.log("You are not a kid");

    else{
        console.log("You are a kid");
            } */

// LOOPS in Javascript 
// For LOOP
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// FOR EACH LOOP
//  arr.forEach(funtion(element){
//      console.log(element);
//  }

// Let j=0;
// const a = 0;
// a = a +1;


// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// Break -- STop the ittration 
// Continue -- cancel the particular ittration and continue

// let myArr = ["fan", "Camera", 43, Null, true];
// // Array Methods
// // myArr.pop(); -- last will come out 
// // myArr.push("harry") -- harry will add on list
// console.log(myArr.length);

  
// STRING METHODS in JAVASCRIPT

// let myLovelyString = "Ferry is a old guy";
// console.log(myLovelyString.length);

// DOM _ Document object model


// let elem = document.getElementById ('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName ("container");
// console.log(elemClass);
// // elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");

// tn = document.getElementsByTagName('div')
// console.log(tn)

// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);

// Events in Javascripts
//  function clicked (){
//      console.log('The button was clicked')
//  }
//  let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// //  firstContainer.addEventListener('click', function(){
// //      document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked on it</b>"
// //      console.log("click Hua")
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up Hua");
// })
// firstContainer.addEventListener('mouseup', function(){
// document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked on it</b>"
// console.log("mouse down hua");
// })

// ARROW FUNCTIONS
// summ = (a, b)=>{
//     return a+b;




// SET TIMEOUT and SET INTERVAL
// FIrst argument is Function
// logkaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set Interval Fired</b>"
//     console.log("I am your log")

// }
// clr = setInterval(logkaro, 2000); 

// Javascript Local Storage

// to save data in user computer as a string
// localStorage.setItem('name', 'cherry')
// localStorage.getItem('name')

// JSON
//  obj = {name: "cherry", length: 1}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse('{"name": "cherry", "length": 1}')
// console.log(parsed);


