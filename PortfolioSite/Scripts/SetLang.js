const setlang = document.querySelector("#setlang");

setlang.addEventListener("click", function(){
    if (window.location.pathname.includes("indexnewEng.html"))
        window.location.href = "index.html"
    else
        window.location.href = "indexnewEng.html"
})