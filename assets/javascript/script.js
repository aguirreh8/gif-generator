//construct list of premade wrestlers
const wrestlerRoster = [
	"John Cena",
	"Stone Cold Steve Austin",
	"The Ultimate Warrior",
	"Scott Hall",
	"Bret Hart",
	"The Undertaker",
	"Kane",
	"Rey Mysterio",
	"Eddie Guerrero"
];

//displays 10 gifs based on the wrestler name given
function getGifs(clicked) {
	$("#gifDisplay").empty();
	const search = clicked;
	const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qEsTCW0qE324onxIHrwwXq5Cr0DU8ccP&q=" + search + "&limit=10";
	$.ajax({
		url: queryURL,
		medthod: "GET"
	}).done(function(response) {
		for (let i = 0; i < response.data.length; i++) {
			const newDiv = $("<div class='gifHolder'>");
			const rating = $("<p>");
			const newImg = $("<img data-state='still' class='wrestlerGif'>");
			rating.text("Rating: " + response.data[i].rating);
			newImg.attr("src", response.data[i].images.fixed_height_still.url);
			newImg.attr("data-still", response.data[i].images.fixed_height_still.url)
			newImg.attr("data-animate", response.data[i].images.fixed_height.url)
			newDiv.append(rating, newImg);
			$("#gifDisplay").append(newDiv);
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

	$(document).on("click", ".wrestlerBtn", function() {
		const value = $(this).data("name");
		getGifs(value);
	})

	$(document).on("click", ".wrestlerGif", function() {
		const animate = $(this).attr("data-animate");
		const still = $(this).attr("data-still");
		const state = $(this).attr("data-state");

		if (state === "still") {
			$(this).attr("src", animate);
			$(this).attr("data-state", "animating");
		} else {
			$(this).attr("src", still);
			$(this).attr("data-state", "still");
		}

	})
})