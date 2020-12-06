// var pokemon = [{"name":"Squirtle","type":"water"},{"name": "Magicarp", "type":"water"},{"name":"Blastoise","type":"water"}];
// var div = document.getElementById('first');


// div.addEventListener('click', function(){
// 	 // for(i= 0; i < pokemon.length; i++){
// 		// 			 	if (pokemon[i].type == "electric"){
// 		// 			alert(pokemon[i].name + ' ' + pokemon[i].type)
// 		// 		}
// 		// 		else {	i=pokemon.length+1;
// 		// 			alert("you don't have any electric type pokemon")}
// 		// 			}


// 		var i = 0;
// 			var text = "";
// 			while (pokemon[i]) {
//  			 text += pokemon[i].name + "\n";
//   				i++;}
//   				alert(text);
				
// 			});






var pokemon = [{"name":"Squirtle","type":"water"},{"name": "Magicarp", "type":"water"},{"name":"Blastoise","type":"water"}];
var div = document.getElementById('first');
div.addEventListener('click', function(){

	var i=0;
	var text ="";
	if (pokemon[i].type == "electric"){
	 while (pokemon[i]) {
					 	
					 		text += pokemon[i].name + "\n";
  				i++;} 
  				alert(text);
				}
				else { alert("you dont have any electric pokemon")}
				
				});
