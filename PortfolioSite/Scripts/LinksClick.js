let proj = document.querySelector("#mp")
let priz = document.querySelector("#pz")
let show = document.querySelector("#sc")
let kont = document.querySelector("#kt")

let proj2 = document.querySelector("#mmp")
let priz2 = document.querySelector("#mpz")
let show2 = document.querySelector("#msc")
let kont2 = document.querySelector("#mkt")
let topb = document.querySelector("#_topbar")

console.log(proj, priz, show, kont, proj2, priz2, show2, kont2, topb)

proj.addEventListener("click", function(){
    window.location.href = "index.html#_mp";
})

priz.addEventListener("click", function(){
    window.location.href = "index.html#_pz";
})

show.addEventListener("click", function(){
    window.location.href = "index.html#ShowcaseContainer";
})

kont.addEventListener("click", function(){
    window.location.href = "index.html#_kt";
})

proj2.addEventListener("click", function(){
    window.location.href = "index.html#_mp";
})

priz2.addEventListener("click", function(){
    window.location.href = "index.html#_pz";
})

show2.addEventListener("click", function(){
    window.location.href = "index.html#ShowcaseContainer";
})

kont2.addEventListener("click", function(){
    window.location.href = "index.html#_kt";
})

topb.addEventListener("click", function(){
    window.location.href = "index.html#TopDiv";
})