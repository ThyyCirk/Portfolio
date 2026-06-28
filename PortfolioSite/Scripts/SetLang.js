const setlang = document.querySelector("#setlang");

setlang.addEventListener("click", function(){
    if (window.location.pathname.includes("indexnewEng"))
        window.location.href = "index"
    else
        window.location.href = "indexnewEng"
})