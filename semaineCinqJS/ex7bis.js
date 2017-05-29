
var resultat;
function monResultat(){
        		alert("hello!");
        	var pointure = parseInt(document.getElementById('pointure').value);
        	var anneeNaissance = parseInt(document.getElementById('annee').value);
                
                // multiplier pointure par 2
                 pointure *=2; // ==> pointure  = pointure * 2;
                 pointure +=5; // ==> pointure = pointure + 5;
                 pointure = pointure * 50;
                 resultat = pointure - anneeNaissance;
                 resultat = resultat + 1766;

            alert(" votre pointure :" + pointure + "\n" + " Année de Naissance :" + anneeNaissance + "\n" + 
                   "Votre Resultat :" + resultat
            	);

        }