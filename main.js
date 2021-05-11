
$(document).ready(function(){
var buttons = document.querySelectorAll("button");//j'ai séléctionné mes trois boutton avec le sélecteur css query
var score=document.getElementById("box2");
let count = 0;
let gamerA=0;
let gamerB=0
var numberChoice=$("button").click(function() {
  count++;
  $("#box1").html("nombre d'essaie: "+count);
})

for (let i = 0; i < buttons.length; i++) {//j'ai créé une loop je l'ai initialisé i=index 0 et le i sera inférrieur au choix des boutton et j'ai incrémenter pour sortir de la loop
  buttons[i].addEventListener('click', displayChoice)//j'ai ajouté un boutton evenement clique et j'ai nommé ma fonction
  function displayChoice(){//j'ai crée ma fonction
    var gamer1 = buttons[i].innerHTML;//j'ai déclaré des variables locales le innerHtml accede au contenu
    var gamer2 = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;//math random il génére alétoirement des nombres
    let result = "";
 
    if (gamer1===gamer2) {
      result = "Egalité";
    }else if ((gamer1=== "Pierre" && gamer2 === "Ciseaux") || (gamer1 === "Ciseaux" && gamer2 === "Feuille") || (gamer1 === "Feuille") && (gamer2 === "Pierre")) {
      result = " joueur 1 a gagné";
      gamerA++;
       score.innerHTML="J'ai gagné:" +gamerA +" fois";
      $("#btn").click(function(){
        $("#box3").html("le pourcentage de victoire est"+gamerA*100/count+"%")
        //console.log(gamerA*100/count); 
       })
    } else {
      result = "joueur 2 a gagné";
    }
 
  document.getElementById("box").innerHTML = `
  Joueur1 : ${gamer1}</br>
  Joueur2 : ${gamer2} <br/>
  Résultat : ${"resultat instantané: "+result}
`  ; 
  };
}
});
