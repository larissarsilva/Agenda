if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  function Contatos(head, numero, tail) {
    this.head = head;
    this.numero = numero;
    this.tail = tail;
  }
  Contatos.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contatos',
    interfaces: []
  };
  Contatos.prototype.component1 = function () {
    return this.head;
  };
  Contatos.prototype.component2 = function () {
    return this.numero;
  };
  Contatos.prototype.component3 = function () {
    return this.tail;
  };
  Contatos.prototype.copy_f5oi3q$ = function (head, numero, tail) {
    return new Contatos(head === void 0 ? this.head : head, numero === void 0 ? this.numero : numero, tail === void 0 ? this.tail : tail);
  };
  Contatos.prototype.toString = function () {
    return 'Contatos(head=' + Kotlin.toString(this.head) + (', numero=' + Kotlin.toString(this.numero)) + (', tail=' + Kotlin.toString(this.tail)) + ')';
  };
  Contatos.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.head) | 0;
    result = result * 31 + Kotlin.hashCode(this.numero) | 0;
    result = result * 31 + Kotlin.hashCode(this.tail) | 0;
    return result;
  };
  Contatos.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.head, other.head) && Kotlin.equals(this.numero, other.numero) && Kotlin.equals(this.tail, other.tail)))));
  };
  var nomeEncadeado;
  function printListaOrdenada$lambda(closure$divContato) {
    return function (x) {
      closure$divContato.innerHTML = closure$divContato.innerHTML + (' ' + '\n' + '  <li class=' + '"' + 'listarNomesOrdenado' + '"' + '> ' + '\n' + '  <div class=' + '"' + 'contatos' + '"' + '>' + '\n' + '    <div class=' + '"' + 'circuloContato' + '"' + '> ' + String.fromCharCode(x.charCodeAt(0)) + ' <\/div>' + '\n' + '     <span style=' + '"' + 'padding-left:10px;' + '"' + '> ' + x + ' <\/span>' + '\n' + '  <\/div> ' + '\n' + '  <\/li>' + '\n' + '  ');
      return Unit;
    };
  }
  function printListaOrdenada() {
    var divContato = document.getElementById('listaOrdenada');
    if (divContato == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }divContato.innerHTML = divContato.innerHTML + '';
    var auxiliar = ordenaLista(nomeEncadeado);
    forEach(auxiliar, printListaOrdenada$lambda(divContato));
  }
  function ordenaLista(l) {
    return ordenaListaAux(l, null);
  }
  function ordenaListaAux(l1, l2) {
    if (Kotlin.isType(l1, Contatos))
      return ordenaListaAux(l1.tail, insereOrdenado(l2, l1.head, l1.numero));
    else
      return l2;
  }
  function insereOrdenado(lista, nome, numeroNovo) {
    if (Kotlin.isType(lista, Contatos))
      if (Kotlin.compareTo(nome, lista.head) > 0) {
        return new Contatos(lista.head, lista.numero, insereOrdenado(lista.tail, nome, numeroNovo));
      } else
        return new Contatos(nome, numeroNovo, lista);
    else
      return new Contatos(nome, numeroNovo, null);
  }
  function tamanhoContatos(x) {
    if (x == null)
      return 0;
    else
      return 1 + tamanhoContatos(x.tail) | 0;
  }
  function printartamanhoContatos() {
    var divContato = document.getElementById('tamanhoContatos');
    if (divContato == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }divContato.innerHTML = divContato.innerHTML + ('\n' + '  ' + tamanhoContatos(nomeEncadeado) + ' Contatos <br>' + '\n' + '\t');
  }
  function listarContatos$lambda(closure$divContato) {
    return function (x, y) {
      closure$divContato.innerHTML = closure$divContato.innerHTML + (' ' + '\n' + ' <a href=' + '"' + './details.html/?nome:' + x + '?numero:' + y + '"' + '>' + '\n' + '  <li class=' + '"' + 'listarnomes' + '"' + ' ' + x + '"' + ' > ' + '\n' + '  <div class=' + '"' + 'contatos' + '"' + '>' + '\n' + '    <div class=' + '"' + 'circuloContato' + '"' + '> ' + String.fromCharCode(x.charCodeAt(0)) + ' <\/div>' + '\n' + '     <span style=' + '"' + 'padding-left:10px;' + '"' + '> ' + x + ' <\/span>' + '\n' + '  <\/div> ' + '\n' + '  <div class=' + '"' + 'detalhes' + '"' + ' >Exibir Detalhes \u2795 <\/div>' + '\n' + '  <\/li>' + '\n' + '  <\/a>' + '\n' + '  ');
      return Unit;
    };
  }
  function listarContatos() {
    var divContato = document.getElementById('parte4');
    if (divContato == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }divContato.innerHTML = '';
    forEachNumero(nomeEncadeado, listarContatos$lambda(divContato));
  }
  function concatenar(l1, l2) {
    if (l1 == null)
      return l2;
    else if (l2 == null)
      return l1;
    else
      return new Contatos(l1.head, l1.numero, concatenar(l1.tail, l2));
  }
  function inverter(lista) {
    if (lista == null)
      return null;
    else
      return concatenar(inverter(lista.tail), new Contatos(lista.head, lista.numero, null));
  }
  function inverter$lambda(closure$divContato) {
    return function (x) {
      closure$divContato.innerHTML = closure$divContato.innerHTML + (' ' + '\n' + '  <li class=' + '"' + 'listarnomesInvertido' + '"' + '> ' + '\n' + '  <div class=' + '"' + 'contatos' + '"' + '>' + '\n' + '    <div class=' + '"' + 'circuloContato' + '"' + '> ' + String.fromCharCode(x.charCodeAt(0)) + ' <\/div>' + '\n' + '     <span style=' + '"' + 'padding-left:10px;' + '"' + '> ' + x + ' <\/span>' + '\n' + '  <\/div> ' + '\n' + '  <\/li>' + '\n' + '  ');
      return Unit;
    };
  }
  function inverter_0() {
    var divContato = document.getElementById('listainvertida');
    if (divContato == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }forEach(inverter(nomeEncadeado), inverter$lambda(divContato));
  }
  function printInverterListaOrdenada$lambda(closure$divContato) {
    return function (x) {
      closure$divContato.innerHTML = closure$divContato.innerHTML + (' ' + '\n' + '  <li class=' + '"' + 'listarNomesOrdenadoInvertido' + '"' + '> ' + '\n' + '  <div class=' + '"' + 'contatos' + '"' + '>' + '\n' + '    <div class=' + '"' + 'circuloContato' + '"' + '> ' + String.fromCharCode(x.charCodeAt(0)) + ' <\/div>' + '\n' + '     <span style=' + '"' + 'padding-left:10px;' + '"' + '> ' + x + ' <\/span>' + '\n' + '  <\/div> ' + '\n' + '  <\/li>' + '\n' + '  ');
      return Unit;
    };
  }
  function printInverterListaOrdenada() {
    var divContato = document.getElementById('inverterListaOrdenada');
    if (divContato == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }divContato.innerHTML = divContato.innerHTML + '';
    var auxiliar = inverter(ordenaLista(nomeEncadeado));
    forEach(auxiliar, printInverterListaOrdenada$lambda(divContato));
  }
  function printPertence() {
    var tmp$;
    var divContato = document.getElementById('contatoPertence');
    if (divContato == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }var inputPertence = Kotlin.isType(tmp$ = document.getElementById('nomePertence'), HTMLInputElement) ? tmp$ : throwCCE();
    var auxiliar = pertence(nomeEncadeado, inputPertence.value);
    divContato.innerHTML = '';
    if (auxiliar === true)
      divContato.innerHTML = ' ' + '\n' + '  <div class=' + '"' + 'pertenceALista' + '"' + '>' + '\n' + '  <strong>\uD83D\uDE4D\u200D\u2642\uFE0FContato<\/strong>:  ' + '\n' + '  ' + inputPertence.value + ' ' + '\n' + '  <\/div>' + '\n' + '  ';
    else
      divContato.innerHTML = ' ' + inputPertence.value + ': N\xE3o est\xE1 na lista ';
  }
  function pertence(lista, nome) {
    if (lista == null)
      return false;
    else if (equals(lista.head, nome))
      return true;
    else
      return pertence(lista.tail, nome);
  }
  function printContaOcorrencias() {
    var tmp$;
    var divContato = document.getElementById('qtdOcorrencias');
    if (divContato == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }var inputOcorrencias = Kotlin.isType(tmp$ = document.getElementById('nomeOcorrencias'), HTMLInputElement) ? tmp$ : throwCCE();
    var auxiliar = contaOcorrencias(nomeEncadeado, inputOcorrencias.value);
    divContato.innerHTML = '';
    if (auxiliar >= 1)
      divContato.innerHTML = ' ' + inputOcorrencias.value + ' aparece ' + auxiliar + ' vezes ';
    else
      divContato.innerHTML = ' ' + inputOcorrencias.value + ' N\xE3o est\xE1 na lista ';
  }
  function contaOcorrencias(lista, nome) {
    if (lista == null)
      return 0;
    else if (equals(lista.head, nome))
      return 1 + contaOcorrencias(lista.tail, nome) | 0;
    else
      return contaOcorrencias(lista.tail, nome);
  }
  function forEach(lista, comando) {
    if (lista != null) {
      comando(lista.head);
      forEach(lista.tail, comando);
    }}
  function forEachNumero(lista, comando) {
    if (lista != null) {
      comando(lista.head, lista.numero);
      forEachNumero(lista.tail, comando);
    }}
  function main() {
  }
  function adicionar(lista, nome, numeroNovo) {
    println(lista);
    if (lista == null)
      return null;
    else if (lista.tail == null) {
      lista.tail = new Contatos(nome, numeroNovo, null);
    } else
      return new Contatos(lista.head, lista.numero, adicionar(lista.tail, nome, numeroNovo));
    return null;
  }
  function remover(lista, nome) {
    if (lista == null)
      return null;
    else if (equals(lista.head, nome))
      return lista.tail;
    else
      return new Contatos(lista.head, lista.numero, remover(lista.tail, nome));
  }
  function removerLista$lambda(closure$divContato) {
    return function (x) {
      closure$divContato.innerHTML = closure$divContato.innerHTML + (' ' + '\n' + '  <li> <strong>\uD83D\uDE4D\u200D\u2642\uFE0FContato<\/strong> : ' + x + ' <\/li>' + '\n' + '  ');
      return Unit;
    };
  }
  function removerLista() {
    var tmp$;
    var divContato = document.getElementById('RemoverNome');
    if (divContato == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }var inputName = Kotlin.isType(tmp$ = document.getElementById('nome'), HTMLInputElement) ? tmp$ : throwCCE();
    divContato.innerHTML = '';
    var auxiliar = remover(nomeEncadeado, inputName.value);
    forEach(auxiliar, removerLista$lambda(divContato));
  }
  function adicionarLista() {
    var tmp$;
    var divContato = document.getElementById('parte4');
    if (divContato == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }var inputName = Kotlin.isType(tmp$ = document.getElementById('nome'), HTMLInputElement) ? tmp$ : throwCCE();
    var auxiliar = adicionar(nomeEncadeado, inputName.value, '0');
    inverter_0();
    inverter_0();
  }
  _.Contatos = Contatos;
  Object.defineProperty(_, 'nomeEncadeado', {
    get: function () {
      return nomeEncadeado;
    }
  });
  _.printListaOrdenada = printListaOrdenada;
  _.ordenaLista_qcmt9y$ = ordenaLista;
  _.ordenaListaAux_dvzl8g$ = ordenaListaAux;
  _.insereOrdenado_8it6ca$ = insereOrdenado;
  _.tamanhoContatos_qcmt9y$ = tamanhoContatos;
  _.printartamanhoContatos = printartamanhoContatos;
  _.listarContatos = listarContatos;
  _.concatenar_dvzl8g$ = concatenar;
  _.inverter_qcmt9y$ = inverter;
  _.inverterLista = inverter_0;
  _.printInverterListaOrdenada = printInverterListaOrdenada;
  _.printPertence = printPertence;
  _.pertence_varkug$ = pertence;
  _.printContaOcorrencias = printContaOcorrencias;
  _.contaOcorrencias_varkug$ = contaOcorrencias;
  _.forEach_vor79z$ = forEach;
  _.forEachNumero_xh9ojl$ = forEachNumero;
  _.main = main;
  _.adicionar_8it6ca$ = adicionar;
  _.remover_varkug$ = remover;
  _.removerLista = removerLista;
  _.adicionarLista = adicionarLista;
  nomeEncadeado = new Contatos('Larissa', '32421680', new Contatos('Joao', '987654321', new Contatos('Luiz', '99750444', new Contatos('Alicia', '1517489', new Contatos('Bruno', '08199987216', new Contatos('Poli', '32421688', new Contatos('Rute', '88564887', new Contatos('Poli', '012348967', null))))))));
  main();
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
