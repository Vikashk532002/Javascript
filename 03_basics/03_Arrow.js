const user = {
    username: "vikash",
    price: 999,

    welcomeMassage: function() {
        console.log(`${this.username} , welcome to website`);
       // console.log(this);
    }
}

//user.welcomeMassage()
//user.username = "ram"
//user.welcomeMassage()

//console.log(this);

//function chai(){
//    let username = "vikash"
//    console.log(this.username);
//}

//chai()

//const chai = function(){
//    let username = "vikash"
//    console.log(this.username);
//}
//chai()

const chai = () =>{
     let username = "vikash"
     console.log(this.username);
}
 //chai()

 //const addtwo  = (num1, num2) => {
 //   return num1 + num2      //explicit returns 
 //}

 //const addtwo  = (num1, num2) => num1 + num2
// const addtwo  = (num1, num2) => (num1 + num2)   //implicit returns

//const addtwo  = (num1, num2) => {username: "vikash"}

const addtwo  = (num1, num2) => ({username: "vikash"})

console.log(addtwo(3, 4));       

const myArray = [2, 5, 3, 7, 8]
//myArray.forEach( () => ())
        //( () => {})
        //(function () {})