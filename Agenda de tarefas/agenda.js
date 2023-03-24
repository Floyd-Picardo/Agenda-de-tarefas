var dark = document.querySelector ("#btn")
   dark.addEventListener("click", clicar)

  function   clicar() {
    
    dark.classList.toggle ("active")
   
    document.body.classList.toggle("dark-theme")
  
}

var enter = document.querySelector ('#enter')
var res = document.querySelector ('#res')
    enter.addEventListener("click", (e)=>{
        e.preventDefault()
        console.log('running')
        Enter()
    })

    function Enter() {


    console.log('running enter')
    var texto = document.querySelector ('#texto').value
    var repe = document.querySelector ('#repet')
    var div = document.createElement("div")
    div.className = "task"
      
repe.append(div)

div.innerHTML = texto 
  

}
var remove = document.querySelector ('#remove')

remove.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log('running')
    document.querySelector(".task").remove()
})

  



