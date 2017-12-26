//construct list of premade wrestlers
const wrestlerList = [
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

//creates a new button for each item in wrestlerList array
function createWrestlerBtn() {
	$("#wrestlerSelect").empty();
	for (let i = 0; i < wrestlerList.length; i++) {
		const newBtn = $("<span class='inputButton wrestlerBtn'>");
		newBtn.attr("data-name", wrestlerList[i]);
		newBtn.text(wrestlerList[i]);
		$("#wrestlerSelect").append(newBtn);
	}
}


$(document).ready(function() {
	createWrestlerBtn();
	//clicking submit button will append a new item to wrestlerList and remake the button list
	$("#submitRequest").click(function() {
		const newWrestler = $("#newWrestler").val();
		wrestlerList.push(newWrestler);
		createWrestlerBtn();
	})
})