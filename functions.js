// Para mostrar o alerta na tela 

function ShowAlert() {
    alert("Obrigado pela leitura! Capivara está aqui");
}


// Para adicionar "blur" no header ao descer a página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("header").style.backdropFilter = "blur(10px)";
  } else {
    document.getElementById("header").style.backdropFilter = "blur(0)";
  }
}