// Immediately Involved Function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// (function chai(){
//      console.log(`DB CONNECTED`);
//  })();
 
//  (function aurcode(){
//     console.log(`DB CONNECTED TWO`);
// })()

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// ( () => {
//    console.log(`DB CONNECTED TWO`);
// })()

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // only IIFE 
   console.log(`DB CONNECTED TWO ${name}`);
})('vikash')