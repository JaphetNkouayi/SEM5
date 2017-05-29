alert("hello toi");

var pointure = parseInt(prompt("quel est ta pointure??"));
var anneeNaissance = parseInt(prompt("en quel anne es tu né(e)?"));    
var resultat;
   function calcul(x,y){

   	   x +=5;
   	   x +=50;
   	   x = x-y;
   	   x = x+1766;

   	    return x;
   } 

   resultat = calcul(pointure,anneeNaissance);
   alert(resultat);