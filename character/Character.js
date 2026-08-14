let CH_base = document.getElementById("1");
let CH_Full = document.getElementById("2");
let CH_img = document.getElementById("3");
let CH_BAT = document.getElementById("4");
let CH_ALT = document.getElementById("5");
let CH_ALT_FULL = document.getElementById("6");

let SKILL_ACT_but = document.getElementById("10");
let SKILL_P1_but = document.getElementById("11");
let SKILL_P2_but = document.getElementById("12");

let SKILL_ACT_TAB = document.getElementById("20");
let SKILL_P1_TAB = document.getElementById("21");
let SKILL_P2_TAB = document.getElementById("22");


console.log(CH_img)

SKILL_ACT_but.addEventListener("click", function (e) {
    console.log(CH_img)
    SKILL_ACT_TAB.style.display = 'table';
    SKILL_P1_TAB.style.display = "none";
    SKILL_P2_TAB.style.display = 'none'

})

SKILL_P1_but.addEventListener("click", function (e) {
    console.log(CH_img)
    SKILL_ACT_TAB.style.display = 'none';
    SKILL_P1_TAB.style.display = 'table';
    SKILL_P2_TAB.style.display = 'none'

})

SKILL_P2_but.addEventListener("click", function (e) {
    console.log(CH_img)
    SKILL_ACT_TAB.style.display = 'none';
    SKILL_P1_TAB.style.display = "none";
    SKILL_P2_TAB.style.display = 'table'

})

CH_base.addEventListener("click", function (e) {
    document.getElementById("3").src = "IMG.png";

})

CH_Full.addEventListener("click", function (e) {
    document.getElementById("3").src = "IMG2.png";

})


CH_ALT.addEventListener("click", function (e) {
    document.getElementById("3").src = "IMG4.png";

})

CH_ALT_FULL.addEventListener("click", function (e) {
    document.getElementById("3").src = "IMG5.png";

})

CH_BAT.addEventListener("click", function (e) {
    document.getElementById("3").src = "IMG3.png";

})


