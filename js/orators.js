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
var arlindoOliveira = document.getElementById("arlindo-oliveira");
var anaCosta = document.getElementById("ana-costa");
var carolinaPereira = document.getElementById("carolina-pereira");
var zeMagico = document.getElementById("ze-magico");

/*Clara Não*/
if (claraNao.addEventListener) {
  claraNao.addEventListener("click", function() {
    n.innerText = "Clara Não";
    d.innerText = "Clara Não nasceu e vive no Porto. Licenciou-se em Design de Comunicação pela Faculdade de Belas Artes no Porto e foi devido à sua experiência de erasmus em Roterdão que direcionou o seu caminho pela ilustração e pela escrita. Há 2 anos voltou à Faculdade de Belas Artes onde tirou o seu mestrado em desenho e técnicas de impressão. Clara Não destaca-se pela sua ironia e irreverência, nas ilustrações onde reivindica a igualdade, trata de tabus sociais e desenvolve a escrita ambidestra. Está representada em diversas galerias, como a Senhora Presidenta, Circus Network, Ó! Galeria, Malapata, Apaixonarte e Área 55. É mencionada de forma regular em diversas publicações, como a Vogue, Público e Jornal de Notícias, e tem uma forte presença diariamente no Instagram.";
  });
}
/*Arlindo Oliveira*/
if (arlindoOliveira.addEventListener) {
  arlindoOliveira.addEventListener("click", function() {
    n.innerText = "Arlindo Oliveira";
    d.innerText = "Arlindo Oliveira é um reconhecido investigador, académico e escritor português, na área das ciências de computação. Professor do departamento de Engenharia Eletrotécnica e de Computadores do IST (Lisboa), os seus principais interesses são: Algoritmos e Complexidade, Bioinformática e Design de Circuitos Digitais. O seu livro mais recente é Inteligência Artificial publico pela Fundação Francisco Manuel dos Santos. Doutorado na Universidade de Califórnia, Berkeley, é membro da Academia Portuguesa de Engenharia e membro sénior da IEEE.";
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
/*Zé Mágico*/
if (zeMagico.addEventListener) {
  zeMagico.addEventListener("click", function() {
    n.innerText = "Zé Mágico";
    d.innerText = "Nascido a 1994 e conhecido como o “Zé Mágico”, este conheceu a sua paixão pelo ilusionismo com apenas 15 anos. Através de livros, vídeos, espetáculos e todos os formatos a que tinha acesso, conseguiu tornar-se num dos maiores ilusionistas do nosso país. Aparte da sua formação em Design de Mobiliário, também se apaixonou pelo Teatro Experimental, o que considerou fundamental na construção da sua personalidade e de todas as personagens que daí surgiram. Com os seus diverso espetáculos e eventos personalizados, garante criar um ambiente mágico nas suas atuações com o seu carismo e atitude única.";
  });
}
