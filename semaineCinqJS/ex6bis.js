
  // ma function
     var resteDiv;
  function ResteNombre(){
   alert("hello!");
        	var nombreUn = parseInt(document.getElementById('premierNombre').value);
        	var nombreDeux = parseInt(document.getElementById('deuxiemeNombre').value);
                
                // modulo pour faire la division et recuperer le reste
        	resteDiv = nombreUn % nombreDeux;
        	alert(resteDiv);
            alert("Premier nombre :" + nombreUn + "\n" + " Deuxième nombre :" + nombreDeux + "\n" + "premierNombre % deuxiemeNombre: " + resteDiv);

  }