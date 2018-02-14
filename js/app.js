const form= document.getElementById("search-form");
const searchField = document.getElementById("search-keyword");
const responseContainer= document.getElementById("response-container"); 
let searchedForText; 

form.addEventListener("submit", function(e) {
	e.preventDefault();
	responseContainer.innerHTML= ''; 
	searchedForText = searchField.value; 
	getNews(); 
})

function getNews(){
	const articleRequest = new XMLHttpRequest(); 
	articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=f9037a3df7e248ae9fbb5fb29e53f2ae`); 
	articleRequest.onload= addNews; 
	articleRequest.onerror= handleError; 
	articleRequest.send(); 
}

function handleError(){
	console.log('Se ha presentado un error'); 
}

function addNews(){
	const data= JSON.parse(this.responseText);
	const totalNews= data.response.docs.length; 
	for (let i=0; i<totalNews; i++){
		const article = data.response.docs[i];
		const title= article.headline.main; 
		const snippet = article.snippet; 

		let li= document.createElement('li'); 
		li.className= 'articleClass'; 
		li.innerHTML= `<i class="fas fa-file-alt"></i> ${snippet}`; 

		responseContainer.appendChild(li); 
	}
	

}