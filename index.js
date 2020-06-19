/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
        }
    }
}

function posta(){
    //Obtendo o texto digitado pelo usuário:
    var texto = document.getElementById("counter").value;
    //Armazenando a referência da Div dentro de uma variável:
    var div = document.getElementById("counter"); 
    //Inserindo o texto dentro da Div:
    div.innerHTML = texto; 
    //Limpando a caixa de texto:
    document.getElementById("counter").value = "1"; 
} 
