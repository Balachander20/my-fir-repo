const table=document.querySelector("table")

let response=fetch("https://jsonplaceholder.typicode.com/users")
.then(res=> res.json())
.then(data=>{
  data.forEach(user => {
    let  r =document.createElement("tr")
    let did =document.createElement("td")
    let dit =document.createTextNode(user.id)
    did.appendChild(dit)
    r.appendChild(did)
    table.appendChild(r)
    
  });

})