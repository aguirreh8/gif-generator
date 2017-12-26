//construct list of premade wrestlers
const wrestlerRoster = [
	"John Cena",
	"Stone Cold Steve Austin",
	"The Ultimate Warrior",
	"Razor Ramon",
	"Bret Hart",
	"The Undertaker",
	"Kane",
	"Rey Mysterio",
	"Eddie Guerrero"
];

//displays 10 gifs based on the wrestler name given
function getGifs(clicked) {
	const search = clicked;
	const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qEsTCW0qE324onxIHrwwXq5Cr0DU8ccP&q=" + search + "&limit=10";
	$.ajax({
		url: queryURL,
		medthod: "GET"
	}).done(function(response) {
		for (let i = 0; i < response.data.length; i++) {
			const newDiv = $("<div class='gifHolder'>");
			const rating = $("<p>");
			const newImg = $("<img>");
			rating.text("Rating: " + response.data[i].rating);
			newImg.attr("src", response.data[i].images.original.url);
			newDiv.append(rating, newImg);
			$("#gifDisplay").append(newDiv);
			console.log(response); 
		}
	})
}

//creates a new button for each item in wrestlerRoster array
function createWrestlerBtn() {
	$("#wrestlerSelect").empty();
	for (let i = 0; i < wrestlerRoster.length; i++) {
		const newBtn = $("<span class='inputButton wrestlerBtn'>");
		newBtn.attr("data-name", wrestlerRoster[i]);
		newBtn.text(wrestlerRoster[i]);
		$("#wrestlerSelect").append(newBtn);
	}
}


$(document).ready(function() {
	createWrestlerBtn();
	//clicking submit button will append a new item to wrestlerRoster and remake the button list
	$("#submitRequest").click(function() {
		const newWrestler = $("#newWrestler").val();
		wrestlerRoster.push(newWrestler);
		createWrestlerBtn();
	})
})