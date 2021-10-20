const list=document.querySelector("ol")
let arr =["one","two","three","fiur"]

arr.forEach(balu=>{
  const e =document.createElement('li')
  const t =document.createTextNode(balu)
  e.appendChild(t)

  e.addEventListener("click",(e)=>{
    const userInput=window.prompt(`are u want to delate "${balu}"`)
    if (userInput=="YES")e.target.remove()
 
  })
  list.appendChild(e)
})