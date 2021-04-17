import kotlin.browser.*
import org.w3c.dom.*

data class Contatos(val head:String,val numero:String ,var tail: Contatos?)

val nomeEncadeado = Contatos("Larissa","32421680",
Contatos("Joao","987654321", 
Contatos("Luiz","99750444",
Contatos("Alicia","1517489",
Contatos("Bruno","08199987216",
Contatos("Poli","32421688",
Contatos("Rute","88564887",
Contatos("Poli","012348967",null))))))))

/* Função que printa uma lista Ordenada */
@JsName("printListaOrdenada")
fun printListaOrdenada(){
  val divContato = document.getElementById("listaOrdenada")
  if (divContato==null) {
		println("error elemento não encontrado")
		return
	}
   divContato.innerHTML += ""
   val auxiliar = ordenaLista(nomeEncadeado)
  forEach(auxiliar,{ x -> divContato.innerHTML += """ 
  <li class="listarNomesOrdenado"> 
  <div class="contatos">
    <div class="circuloContato"> ${x[0]} </div>
     <span style="padding-left:10px;"> $x </span>
  </div> 
  </li>
  """ })
} 

/* Função para ordenar uma lista */
fun ordenaLista(l : Contatos?): Contatos? = ordenaListaAux(l, null)
fun ordenaListaAux(l1: Contatos?, l2: Contatos?): Contatos? = when(l1){
    is Contatos -> {
        ordenaListaAux(l1.tail, insereOrdenado(l2, l1.head,l1.numero))
    }
    else -> l2
}
/* Função para inserir ordenadamente */
fun insereOrdenado(lista: Contatos?, nome: String, numeroNovo:String): Contatos = when(lista){
    is Contatos-> {
        if(nome > lista.head){
            Contatos(lista.head, lista.numero ,insereOrdenado(lista.tail, nome,numeroNovo))
        } else Contatos(nome,numeroNovo,lista)
    }
    else -> Contatos(nome,numeroNovo,null)
}

/* Função para calcular o tamanho da lista */
fun tamanhoContatos(x:Contatos?):Int{
    if(x == null) return 0
    else return 1 + tamanhoContatos(x.tail)
}
/* Função que printa o tamanho da lista */
@JsName("printartamanhoContatos")
fun printartamanhoContatos(){
     val divContato = document.getElementById("tamanhoContatos")
  if (divContato==null) {
		println("error elemento não encontrado")
		return
	}
   divContato.innerHTML += """
  ${tamanhoContatos(nomeEncadeado)} Contatos <br>
	"""
}
/* Função para listar os contatos sem ser de forma ordenada e também clicar em detalhes */
@JsName("listarContatos")
fun listarContatos(){
  val divContato = document.getElementById("parte4")
    if (divContato==null) {
		println("error elemento não encontrado")
		return
	}
divContato.innerHTML= ""
 forEachNumero(nomeEncadeado,{ x,y -> divContato.innerHTML += """ 
 <a href="./details.html/?nome:$x?numero:$y">
  <li class="listarnomes" $x" > 
  <div class="contatos">
    <div class="circuloContato"> ${x[0]} </div>
     <span style="padding-left:10px;"> $x </span>
  </div> 
  <div class="detalhes" >Exibir Detalhes ➕ </div>
  </li>
  </a>
  """ })
}
/* Função para concatenar duas listas */
fun concatenar(l1:Contatos?,l2:Contatos?):Contatos?{
  if( l1 == null ) return l2
  else if ( l2 == null) return l1
  else return Contatos(l1.head,l1.numero,concatenar(l1.tail,l2))
}
/* Função para inverter uma lista */
fun inverter(lista: Contatos?): Contatos? { 
    if(lista == null) return null
    else return concatenar(inverter(lista.tail),Contatos(lista.head, lista.numero,null))
}
/* Chama inverter lista e printa */
@JsName("inverterLista")
fun inverter(){
  val divContato = document.getElementById("listainvertida")
  if (divContato==null) {
		println("error elemento não encontrado")
		return
	}
  
 forEach(inverter(nomeEncadeado),{ x -> divContato.innerHTML += """ 
  <li class="listarnomesInvertido"> 
  <div class="contatos">
    <div class="circuloContato"> ${x[0]} </div>
     <span style="padding-left:10px;"> $x </span>
  </div> 
  </li>
  """ })
}

/* chama inverter e printa lesta ordenada invertida */
@JsName("printInverterListaOrdenada")
fun printInverterListaOrdenada(){
  val divContato = document.getElementById("inverterListaOrdenada")
  if (divContato==null) {
		println("error elemento não encontrado")
		return
	}
   divContato.innerHTML += ""
   val auxiliar = inverter(ordenaLista(nomeEncadeado))
  forEach(auxiliar,{ x -> divContato.innerHTML += """ 
  <li class="listarNomesOrdenadoInvertido"> 
  <div class="contatos">
    <div class="circuloContato"> ${x[0]} </div>
     <span style="padding-left:10px;"> $x </span>
  </div> 
  </li>
  """ })
} 
/* Função que printa se um contato estiver na lista */
@JsName("printPertence")
fun printPertence(){
  val divContato = document.getElementById("contatoPertence")
   if (divContato==null) {
		println("error elemento não encontrado")
		return
	}
  val inputPertence = document.getElementById("nomePertence") as HTMLInputElement
  val auxiliar = pertence(nomeEncadeado,inputPertence.value)
  divContato.innerHTML= ""

  if(auxiliar==true) divContato.innerHTML= """ 
  <div class="pertenceALista">
  <strong>🙍‍♂️Contato</strong>:  
  ${inputPertence.value} 
  </div>
  """    
  else divContato.innerHTML= """ ${inputPertence.value}: Não está na lista """   
  
}
/* Função que checa se um nome está em uma lista */
fun pertence(lista:Contatos?, nome:String):Boolean{
if(lista == null ) return false 
else if (lista.head == nome ) return true 
else return pertence(lista.tail,nome)
}
/*Função que printa quantos contatos iguais a um nome passado existe */
@JsName("printContaOcorrencias")
fun printContaOcorrencias(){
  val divContato = document.getElementById("qtdOcorrencias")
   if (divContato==null) {
		println("error elemento não encontrado")
		return
	}
  val inputOcorrencias = document.getElementById("nomeOcorrencias") as HTMLInputElement
  val auxiliar = contaOcorrencias(nomeEncadeado,inputOcorrencias.value)
  divContato.innerHTML= ""
  if(auxiliar >= 1) divContato.innerHTML= """ ${inputOcorrencias.value} aparece ${auxiliar} vezes """    
  else divContato.innerHTML= """ ${inputOcorrencias.value} Não está na lista """   
  
}
/* Função que conta quantos nomes iguais passados no input existem*/
fun contaOcorrencias(lista:Contatos?,nome:String):Int{
if( lista == null ) return 0
else if ( lista.head == nome ) return 1 + contaOcorrencias(lista.tail,nome)
else return contaOcorrencias(lista.tail,nome)
}

/* função para aplicar forEach em uma lista encadeada passando apenas o nome no comando*/
fun forEach(lista : Contatos?, comando : (String)->Unit) { 
  if ( lista == null ) null
  else {
      comando(lista.head)
      forEach(lista.tail, comando)
  }
} 
/* Função para aplicar o forEach passando nome e numero */
fun forEachNumero(lista : Contatos?, comando: (String ,String)->Unit ) { 
  if ( lista == null ) null
  else {
      comando(lista.head,lista.numero)
      forEachNumero(lista.tail, comando)
  }
} 


fun main() {

}

fun adicionar(lista:Contatos?,nome:String, numeroNovo:String):Contatos?{
println(lista)
if(lista == null) return null
else if( lista.tail == null) {
  lista.tail = Contatos(nome,numeroNovo,null)
}
else return Contatos(lista.head,lista.numero,adicionar(lista.tail,nome,numeroNovo) )
return null;
}

/* Função para remover um nome*/
fun remover(lista:Contatos?,nome:String):Contatos?{
    if(lista == null) return null
    else if (lista.head == nome ) return lista.tail
    else return Contatos(lista.head,lista.numero,remover(lista.tail,nome))
}
/*Função para printar uma lista removida*/
@JsName("removerLista")
fun removerLista(){
   val divContato = document.getElementById("RemoverNome")
  if (divContato==null) {
		println("error elemento não encontrado")
		return
	}
val inputName = document.getElementById("nome") as HTMLInputElement
divContato.innerHTML= ""
val auxiliar = remover(nomeEncadeado,inputName.value)
forEach(auxiliar,{ x -> divContato.innerHTML += """ 
  <li> <strong>🙍‍♂️Contato</strong> : $x </li>
  """ })
}




@JsName("adicionarLista")
fun adicionarLista(){
  val divContato = document.getElementById("parte4")
 if (divContato==null) {
		println("error elemento não encontrado")
		return
	}
  val inputName = document.getElementById("nome") as HTMLInputElement
  val auxiliar = adicionar(nomeEncadeado, inputName.value, "0")
inverter()
inverter()
}