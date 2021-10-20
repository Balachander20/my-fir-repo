let value=new Promise((resolve,reject)=>{
  setTimeout(() => {
    reject("hello")
    
  },3000)
})
console.log(value)
setTimeout(() => {
  console.log(value)
  
},4000);
