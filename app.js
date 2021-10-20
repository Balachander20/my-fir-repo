let  response=fetch("https://jsonplaceholder.typicode.com/users").then(res=>{

let parseData=res.json()
console.log(parseData)
return parseData
}).then(book=>{
  console.log(book)
})
