// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let amigo = document.getElementById('amigo').value;

  if (amigo == '' || !(/^[a-zA-Z\s]+$/.test(amigo))) {
    alert('Por favor, inserte un nombre');
  } else {
     amigos.push(amigo);
     limpiarEntrada();
     console.log(amigos);
     
 }
}
  
      function limpiarEntrada() {
        document.querySelector('#amigo').value = '';
      };


    
