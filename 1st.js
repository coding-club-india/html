
// let d= 8;
// console.log(d);

// undefined vs null

// if else
//ternary operator
// let isbool= false;
//  isbool?console.log('67876'):console.log('vks');

//    add(); its through call the function add
  //  function add(){
  //  var a = 1;
  //   console.log(a);
  //       }
  //       add();
      // this is second type of function create       
//     const so=()=>{
//     var a= 2;
//     console.log(a);
// }
// so(); // its through call the function so 




// ---------------- ARRAY---------------------

  // let arr=[1,2,3,4,5,6,7,8]
  //   for ( let i in arr)              // this is only show index number
  //        {
  //         console.log(i);
  //        }

//  let arr=[1,2,3,6,2,6,7,8]
//          for ( let i of arr)          // this is only show index value 
//          {  
//             console.log(i);  
//          }

//  let arr=[1,2,3,4,5,6,7,8]
//          for ( let i= 1; i<5;i++)
//          {
//             console.log(i);
//          }

  // let arr=[1,2,3,4,5,6,7,8]
  //        arr.forEach((a,b,c) => {             // a is a define of value of index // b is define a index no. of array // c is define a all array in a c
  //            console.log(a,b,c)      
  //                          // its dont return any defined and define a undefined return
  //        }); 


//  let arr=[1,2,3,4,5,6,7,8]
//        let arr1=  arr.map((a,b,c) => {             // a is a define of value of index // b is define a index no. of array // c is define a all array in a c
//             console.log(a,b,c)    // arr.map reutrn a value/
//             //return a*3;
//         });
//       //  console.log(arr1) ;
        

    //     let array=[1,2,6,4,5,6,7,8]

  // let filter2=  array.filter((a,b,c)=>{

  //   return a>3;      // use a rerturn in with  condition
  //      })
//console.log(filter2);




        // undefined vs null

    // let user=null
    // console.log(user)
    // if(0){
    //     console.log('hello')
    // }
    // else{
    //     console.log('hiii')
    // }

    // let isBool=true
    // isBool?console.log('hello'):console.log('hii')

    // let arr=[1,2,3,'one', true]

    // console.log('hello')
//     function sum(){   
//        console.log('hello')
//     }
//     sum()
//     const add= () =>  {
//         console.log('hii')
//     }
//  add()

           
// let arr=[1,2,3,4,5,6,7,8]

//   let filter1=  arr.filter((a,b,c)=>{
//     return a>3
// })
// console.log(filter1)

//  let newA=  arr.forEach( (a,b,c)=>{
//     console.log(a*2)
// }  )
// console.log(newA)
//  let newa1=  arr.map((a,b,c)=>{
//     // console.log(a,b,c)
//     return a>3

// })

 //let arr= [1,2,3,4,5,6]







// let arr = [1,2,3,4,5,6];
// let new2= arr.reduce((a,b,c,d) =>{         //a is represent a index first value
//                                            //b is represent a index second value
//       return a+b;                           //c is represent a index number 
// })                                          //d is represent a index array with value

// console.log(new2);

//Object                      // create a function inside a object
//  let student ={
// name:'abc',
// age:120,
// isPass:true

// }
// student.name='xyz';

// console.log(student.name);
// console.log(student.age);
// console.log(student.isPass);
   




// let obj = {                   // object inside a function
//   name:'abhisek',
//   lastName:'amruthe',
//   sum:function(){
//     console.log(this.name+' '+this.lastName);
//   }
// }
// obj.sum();





//create object inside a array

// let arr=[{id:1,name:'ranu'},{id:2,name:'vijay'}]

// arr.map((a)=>{
//  console.log(a.id);
// }) 



//  let arr=[{id:1,name:'ranu'},{id:2,name:'vijay'}]

// arr.map((a)=>{
//  console.log(arr[1].id);
// })
//console.log(arr[].id);




//  let arr=[1,2,3,4,5]

// // arr.push(8)         //   push the last value no.
// // arr.pop()             //  pop the last value
// //  arr.unshift(3)    // push the 1st value
// //  arr.shift()         // pop the 1st value 

//  console.log(arr);

//hoisting

// console.log(a);        
// var  a = 6;

// console.log(a);        
// let  a = 6;            ///error let ya const par

// function add()
// {
//   console.log("hello");      // hello
// }

// add()


// const add=()=>
// {
//   console.log("hello");     
// }
// add()

// var add=()=>
// {
//   console.log("hello");       
// }
// add()



///scope and use
// let a= 10;
// {
//   let a= 5;
//   console.log(a);     // 5
// }
// console.log(a);     // 10


// var a= 10;
// {
//   var a= 5;
//   console.log(a);     // 5
// }
// console.log(a);     // 5


//  higher order function



// function outer(a){
//   console.log('hii');
//   a();
//   console.log('outer');
// }
// function inner(){
//   console.log('hello');
//    }
// outer(inner);




// function outer(){
//   console.log('hii');
//    function inner(){
//     console.log('inner');
//    }

//    return inner;
// }

// let a=outer()
// a();
// function inner() {
//     console.log('inner')
// }
// function outer(inn)
// {
//   console.log('outer')
//   return inner
// }
// let innr=outer(inner);
// innr();

let arr=[1,2,3,4,5,true,false, 'hello','hiiii']

//let arr=[1,2,3,4,5,true,false, 'hello','hiiii']


function get()
{
  let result=[];
  for(let  value of arr)
  {
    if(typeof value =='string')
    {
      result.push(value);
    }
  }
  return result
}
console.log( get())










// function getString()
// {
//   let res =[]
//   for(let value of arr)
//   {
//     if (typeof value == 'string') {
//       res.push(value);
//     }

//   }
//   return res;
// }
// console.log(getString(arr));



// function getNumber()
// {
//   let res =[]
//   for(let value of arr)
//   {
//     if (typeof value == 'number') {
//       res.push(value);
//     }

//   }
//   return res;
// }
// console.log(getNumber(arr));




// function getbool()
// {
//   let res =[]
//   for(let value of arr)
//   {
//     if (typeof value == 'boolean') {
//       res.push(value);
//     }

//   }
//   return res;
// }
// console.log(getbool(arr));



// let arr=[1,2,3,4,5,true,false, 'hello','hiiii']

// function getString(value)
// {
//    return typeof value === 'string';
// }
// function getNumber(value)
// {
//    return typeof value=='number'
// }
// function getBool(value)
// {
//    return typeof value=='boolean'
// }



// function get(arr, fn){
//    let result= []
//    for(let value of arr)
//    {
//      if (fn(value)) {
//       result.push(value);
//      }
//    }
//    return result;
// }

// console.log(get(arr,getString));
// console.log(get(arr,getNumber));
// console.log(get(arr,getBool));


// closer topic

// function outer()
// {
//   let user =  'write '
//   function inner()
//   {
//     console.log(user);
    
//   }
//   return inner
// }
// let a = outer()
// a()


//prototype

// let arr={id:1,
//   user:'abhi',
//   prints:function () {
//   console.log(this.user);
// }
// }
// prints();
//console.log(arr.toString())













