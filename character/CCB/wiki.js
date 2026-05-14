let CH_base = document.getElementById("1");
let CH_Full = document.getElementById("2");
let CH_img = document.getElementById("3");

let SKILL_ACT_but = document.getElementById("10");
let SKILL_P1_but = document.getElementById("11");
let SKILL_P2_but = document.getElementById("12");

let SKILL_ACT_TAB = document.getElementById("20");
let SKILL_P1_TAB = document.getElementById("21");
let SKILL_P2_TAB = document.getElementById("22");


console.log(CH_img)

CH_base.addEventListener("click", function (e) {
    document.getElementById("3").style.backgroundImage = "url('IMG.png')";

})

CH_Full.addEventListener("click", function (e) {
    document.getElementById("3").style.backgroundImage = "url('IMG2.jpg')";

})

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