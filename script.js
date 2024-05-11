const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const semMascara = document.querySelector(".mascara-formulario")

function coliqueiNoBotao(){
   form.style.left= "50%"
   form.style.transform = "translateX(-50%)"
   mascara.style.visibility = "visible" 
}
function cliqueiNamascara(){
    form.style.left= "-300px"
    form.style.transform = "none"
    semMascara.style.visibility = "hidden" 
}