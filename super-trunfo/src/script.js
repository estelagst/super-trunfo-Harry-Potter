var cartaHarry = {
    nome: "Harry Potter ",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 80,
        defesa: 80,
        magia: 90
    }
}

var cartaHermione = {
    nome: "Hermione",
    imagem: "https://images.uncyc.org/pt/5/57/Hermione_poster_detail.jpg",
    atributos: {
        ataque: 93,
        defesa: 90,
        magia: 92,
    }
}

var cartaMalfoy = {
    nome: "Draco Malfoy",
    imagem: "https://static.wikia.nocookie.net/doblaje/images/0/08/HPDracoMalfoy.png/revision/latest?cb=20181119092902&path-prefix=es",
    atributos: {
        ataque: 92,
        defesa: 85,
        magia: 90,
    }
}

var cartaRony = {
    nome: "Rony Weasley",
    imagem: "https://static.wikia.nocookie.net/harrypotterwiki/images/9/9e/D5c39b760fa02863487e50e38e4e4352e56a0db9_hq.jpg/revision/latest/top-crop/width/360/height/450?cb=20190107172632&path-prefix=pt-br",
    atributos: {
        ataque: 85,
        defesa: 80,
        magia: 80,
    }
}

var cartaDumbledore = {
    nome: "Albus Dumbledore",
    imagem: "https://static.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg/revision/latest/top-crop/width/360/height/450?cb=20110719190747&path-prefix=pt-br",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaSnape = {
    nome: "Severo Snape",
    imagem: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/05/legiao_ChgbPIAmx97B.png.jpeg",
    atributos: {
        ataque: 85,
        defesa: 92,
        magia: 97,
    }
}

var cartaVoldemort = {
    nome: "Lord Voldemort",
    imagem: "https://2.bp.blogspot.com/-lbD3nQJcvO0/WVffVnmi7OI/AAAAAAAAvE0/g2290LQpeqoWNy7XuctaeE3j9-fXM7_oACLcBGAs/s1600/la-et-hc-you-re-all-saying-voldemort-wrong-20150910.jpg",
    atributos: {
        ataque: 82,
        defesa: 70,
        magia: 93,
    }
}

var cartaBellatrix = {
    nome: "Bellatrix",
    imagem: "https://static.wikia.nocookie.net/harrypotter/images/1/14/BellatrixLestrange.png/revision/latest?cb=20171101034243",
    atributos: {
        ataque: 90,
        defesa: 75,
        magia: 90,
    }
}

var cartaDobby = {
  nome: "Dobby",
  imagem: "https://todateen.uol.com.br/wp-content/uploads/2019/06/dobby.jpg",
  atributos:{
  ataque:89,
  defesa:75,
  magia:90,
  }
}

var cartaHagrid = {
  nome:"Rubeo Hagrid",
  imagem:"https://blogdotiowalter.com.br/wp-content/uploads/2019/05/Universal-Orlando-Resorts-Most-Life-Like-Animated-Figure-Hagrid-1170x731-770x512.jpg",
  atributos:{
    ataque:75,
    defesa:80,
    magia:98,
  }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaHarry, cartaHermione, cartaMalfoy, cartaRony, cartaDumbledore, cartaSnape, cartaVoldemort, cartaBellatrix, cartaDobby, cartaHagrid,]
    

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + " / " + pontosMaquina + " Máquina "
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
    if (cartas.length == 0){
      alert("Fim de Jogo")
      if(pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">Parabéns, você ganhou!</p>'
      } else if (pontosMaquina = pontosMaquina) {
        htmlResultado = '<p class="resultado-final">Que pena, não foi dessa vez!Mas não desista, acredite em você e tente novamente.</p>'
      } else {
        '<p class="resultado-final">Hey, houve um empate! Que tal uma vingança?!</p>'
      }
    } else{
      document.getElementById("btnProximaRodada").disabled = false
    }
    
    divResultado.innerHTML = htmlResultado
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProximaRodada").disabled = false
    
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById("cartas")
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class=carta></div>`
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnJogar").disabled = true
  document.getElementById("btnProximaRodada").disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}