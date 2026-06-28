function IntroAnim(){
    let fg = document.createElement("div");
    let text = document.createElement("h1");

    fg.appendChild(text);

    fg.style.display = "flex";
    fg.style.alignItems = "center";
    fg.style.height = "100%";
    fg.style.width = "100%";

    text.style.fontFamily = "HaasGroteskBold";
    text.style.fontSize = "clamp(1rem, 10vw, 150px)";
    text
}