var carta1 = {
    nome: "Bulbasauro",
    imagem:"001Bulbasaur.png",
    atributos: { ataque: 7, defesa: 8, magia: 6 }
  };
  
  var carta2 = {
    nome: "Darth Vader",
    imagem:"darth-vader-.jpg",
    atributos: { ataque: 9, defesa: 8, magia: 2 }
  };
  
  var carta3 = {
    nome: "Shiryu",
    imagem:"002shiryu.jpg",
    atributos: { ataque: 5, defesa: 9, magia: 10 }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina ='';
  var cartaJogador ='';
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
    
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura = '<img src="card super trunfo.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id= 'opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      ' <img src="card super trunfo - Cópia.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = '<div id="opcoes" class="carta-status">';
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle p">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  