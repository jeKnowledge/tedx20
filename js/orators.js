var info = document.getElementById("orator-info");
var orator = document.getElementById("orator-icon");

function orInfo() {
  info.style.display = "block";
}

function orOut() {
  info.style.display = "none";
}

var n = document.getElementById("name");
var d = document.getElementById("description");

var claraNao = document.getElementById("clara-nao");
var anaCosta = document.getElementById("ana-costa");
var carolinaPereira = document.getElementById("carolina-pereira");

/*Clara Não*/
if (claraNao.addEventListener) {
  claraNao.addEventListener("click", function() {
    n.innerText = "Clara Não";
    d.innerText = "Clara Não nasceu e vive no Porto. Licenciou-se em Design de Comunicação pela Faculdade de Belas Artes no Porto e foi devido à sua experiência de erasmus em Roterdão que direcionou o seu caminho pela ilustração e pela escrita. Há 2 anos voltou à Faculdade de Belas Artes onde tirou o seu mestrado em desenho e técnicas de impressão. Clara Não destaca-se pela sua ironia e irreverência, nas ilustrações onde reivindica a igualdade, trata de tabus sociais e desenvolve a escrita ambidestra. Está representada em diversas galerias, como a Senhora Presidenta, Circus Network, Ó! Galeria, Malapata, Apaixonarte e Área 55. É mencionada de forma regular em diversas publicações, como a Vogue, Público e Jornal de Notícias, e tem uma forte presença diariamente no Instagram.";
  });
}
/*Ana Filpa Costa*/
if (anaCosta.addEventListener) {
  anaCosta.addEventListener("click", function() {
    n.innerText = "Ana Filpa Costa";
    d.innerText = "Ana Filipa Costa é uma das impulsionadoras da sustentabilidade na indústria da moda. Formada em Engenharia do Ambiente pela Faculdade Nova de Lisboa, e em Gestão pelo ISCTE - Instituto Universitário de Lisboa. Em 2017, aliou então a sua experiência profissional à sua paixão e fundou a Baseville. Esta sua marca tem como princípio a criação de peças que sejam ambiental e socialmente responsáveis. Recentemente, aliou-se à plataforma Catalyst | Inspiring Future Fashion que visa maximizar o reconhecimento da sustentabilidade nesta indústria.";
  });
}
/*Carolina Salgueiro Pereira*/
if (carolinaPereira.addEventListener) {
  carolinaPereira.addEventListener("click", function() {
    n.innerText = "Carolina Salgueiro Pereira";
    d.innerText = "Com apenas 19 anos Carolina Salgueiro Pereira, além de estudante de educação física é também fundadora do My Destiny, um projeto internacional de voluntariado através do surf. É ainda criadora da marca criadoras da marca Frozen, que inclui uma linha de roupa, um canal online e pranchas de surf. Carolina faz também parte da HeForShe Portugal e é voluntária na organização SOS Salvem o Surf.";
  });
}
$(document).ready(function() {
  if ($(window).width() <= 800) {
    $('#clara-nao-img').attr('src', 'img/orators/Clara Nao 1.jpg');
    $('#clara-nao-img').attr('onmouseover', false);
    $('#clara-nao-img').attr('onmouseout', false);
  }
});
$(document).ready(function() {
  if ($(window).width() <= 800) {
    $('#ana-costa-img').attr('src', 'img/orators/Ana Costa 1.jpg');
    $('#ana-costa-img').attr('onmouseover', false);
    $('#ana-costa-img').attr('onmouseout', false);
  }
});
$(document).ready(function() {
  if ($(window).width() <= 800) {
    $('#carolina-pereira-img').attr('src', 'img/orators/Carolina Salgueiro Pereira.jpg');
    $('#carolina-pereira-img').attr('onmouseover', false);
    $('#carolina-pereira-img').attr('onmouseout', false);
  }
});
