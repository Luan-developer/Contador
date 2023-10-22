let contador = document.getElementById("contador");
contador.innerText = localStorage.getItem("contador") || "0";

function incrementar(){
  contador.innerText = parseInt(contador.innerText) + 1;
  salvarCont();
}
function decrementar(){
  contador.innerText = parseInt(contador.innerText) - 1;
  salvarCont();
}
function resetar(){
  contador.innerText = "0";
  salvarCont();
}

function salvarCont(){
  localStorage.setItem("contador", contador.innerText);
  salvarCont();
}