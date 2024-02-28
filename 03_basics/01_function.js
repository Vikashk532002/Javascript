function sayMyName(){
console.log("v");
console.log("i");
console.log("k");
console.log("a");
console.log("s");
console.log("h");
}

//sayMyName()

//function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
//}


//addTwoNumbers(3, 4)
//addTwoNumbers(3, "4")
//addTwoNumbers(3, "a")
//addTwoNumbers(3, null)

function addTwoNumbers(number1, number2){
     // let result = number1 + number2
      //console.log("vikash");
    //  return result 
      // result ke bad kuch bhi print nahi hota hai
      return number1 + number2
    }

const result = addTwoNumbers(3, 5)
//console.log("Result: ", result);


function loginUserMassage(username = "ram"){
    //if(username === undefined){
      if(!username){  
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMassage("vikash"))
//console.log(loginUserMassage(""))
//console.log(loginUserMassage("vikash"))

//function calculateCartPrice(num1){
//function calculateCartPrice(...num1){  
function calculateCartPrice(val1, val2, ...num1){  
  return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "Vikash",
  price: 199
 // prices: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
  username: "ram",
  price: 399
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[3]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
