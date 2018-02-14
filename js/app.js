const form= document.getElementById("form-search");
const searchField = document.getElementById("inputSearch");
const responseContainer= document.getElementById("noticia"); 
let searchedForText; 

form.addEventListener("submit", function(e) {
	e.preventDefauult();
	responseContainer.innerHTML= ''; 
	searchedForText = searchField.value; 
	getNews(); 
})

function getNews(){
	const articleRequest = new XMLHttpRequest(); 
	articleRequest.open('GET', )
}