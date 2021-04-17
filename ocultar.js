/* Funções em JS para printar as listas dos filtros */


var botao = document.getElementById("inverterLista");
var botaoOrdenar = document.getElementById("ordenarLista");
var botaoInverterListaOrdenada =  document.getElementById("btninverterListaOrdenada");


var listainvertida = document.getElementById("listainvertida");
var listaOrdenada = document.getElementById('listaOrdenada');
var inverterListaOrdenada = document.getElementById('inverterListaOrdenada');
var parte4 = document.getElementById("parte4");

/* Chamar evento clique quando clicar nos botões */
botao.addEventListener("click", ocultarLista);
botaoOrdenar.addEventListener("click", printarOrdenada);
botaoInverterListaOrdenada.addEventListener("click", printarInverterListaOrdenada);

/*Funções para chamar no click*/
function inverterLista(){
  main.inverterLista();
}

function ordernarLista(){
  main.printListaOrdenada();
}

function listaOrdenadaInvertida(){
  main.printInverterListaOrdenada();
}

/* Lista Ordenada Invertida */
function printarInverterListaOrdenada(){
  if( inverterListaOrdenada.classList.contains('OcultarlistaOrdenadaInvertida') ){
      inverterListaOrdenada.classList.remove('OcultarlistaOrdenadaInvertida');
      parte4.classList.add('listateste');
      listaOrdenadaInvertida();

      /* Para limpar a página caso algum outro filtro esteja aplicado */
       if(!listainvertida.classList.contains('OcultarlistaInvertida')){
          listainvertida.classList.add('OcultarlistaInvertida');
          document.getElementById("listainvertida").innerHTML = "";
      }
      else if(!listaOrdenada.classList.contains('OcultarlistaOrdenada')){
              listaOrdenada.classList.add('OcultarlistaOrdenada');
              document.getElementById("listaOrdenada").innerHTML = "";
      }


  }
  else{
    inverterListaOrdenada.classList.add('OcultarlistaOrdenadaInvertida');
    parte4.classList.remove('listateste');      
    document.getElementById("inverterListaOrdenada").innerHTML = "";

      /* Para limpar a página caso algum outro filtro esteja aplicado */
       if(!listainvertida.classList.contains('OcultarlistaInvertida')){
          listainvertida.classList.add('OcultarlistaInvertida');
          document.getElementById("listainvertida").innerHTML = "";
      }
      else if(!listaOrdenada.classList.contains('OcultarlistaOrdenada')){
              listaOrdenada.classList.add('OcultarlistaOrdenada');
              document.getElementById("listaOrdenada").innerHTML = "";
      }
  }
}

/* Lista Ordenada */
function printarOrdenada(){
  if(listaOrdenada.classList.contains('OcultarlistaOrdenada')){
      listaOrdenada.classList.remove('OcultarlistaOrdenada');
      parte4.classList.add('listateste');
      ordernarLista();      
      /* Para limpar a página caso algum outro filtro esteja aplicado */
      if(!listainvertida.classList.contains('OcultarlistaInvertida')){
          listainvertida.classList.add('OcultarlistaInvertida');
          document.getElementById("listainvertida").innerHTML = "";
      }
      else if ( !inverterListaOrdenada.classList.contains('OcultarlistaOrdenadaInvertida') ){
                inverterListaOrdenada.classList.add('OcultarlistaOrdenadaInvertida');
                document.getElementById("inverterListaOrdenada").innerHTML = "";
      }

  }
  else{
      listaOrdenada.classList.add('OcultarlistaOrdenada');
       parte4.classList.remove('listateste');      
       document.getElementById("listaOrdenada").innerHTML = "";

        if(!listainvertida.classList.contains('OcultarlistaInvertida')){
          listainvertida.classList.add('OcultarlistaInvertida');
          document.getElementById("listainvertida").innerHTML = "";
      }
      /* Para limpar a página caso algum outro filtro esteja aplicado */
      else if ( !inverterListaOrdenada.classList.contains('OcultarlistaOrdenadaInvertida') ){
                inverterListaOrdenada.classList.add('OcultarlistaOrdenadaInvertida');
                document.getElementById("OcultarlistaOrdenadaInvertida").innerHTML = "";
      }
  }
}

/* Inverter Lista */
function ocultarLista(){
  if(listainvertida.classList.contains('OcultarlistaInvertida')){ 
   listainvertida.classList.remove('OcultarlistaInvertida');
   parte4.classList.add('listateste');
   inverterLista();
/* Para limpar a página caso algum outro filtro esteja aplicado */
   if(!listaOrdenada.classList.contains('OcultarlistaOrdenada')){
     listaOrdenada.classList.add('OcultarlistaOrdenada');
     document.getElementById("listaOrdenada").innerHTML = "";
   }
    else if ( !inverterListaOrdenada.classList.contains('OcultarlistaOrdenadaInvertida') ){
                inverterListaOrdenada.classList.add('OcultarlistaOrdenadaInvertida');
                document.getElementById("inverterListaOrdenada").innerHTML = "";
      }
  }
  else {
    listainvertida.classList.add('OcultarlistaInvertida');
    parte4.classList.remove('listateste');
    document.getElementById("listainvertida").innerHTML = "";
    /* Para limpar a página caso algum outro filtro esteja aplicado */
   if(!listaOrdenada.classList.contains('OcultarlistaOrdenada')){
     listaOrdenada.classList.add('OcultarlistaOrdenada');
     document.getElementById("listaOrdenada").innerHTML = "";
   }
    else if ( !inverterListaOrdenada.classList.contains('OcultarlistaOrdenadaInvertida') ){
                inverterListaOrdenada.classList.add('OcultarlistaOrdenadaInvertida');
                document.getElementById("inverterListaOrdenada").innerHTML = "";
      }

  }
}
