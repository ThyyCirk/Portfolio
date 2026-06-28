let cards = document.querySelectorAll(".card");

cards.forEach(element => {
    let link = element.querySelector("a")
    element.addEventListener("click", function(){
        link.click();
    })
});