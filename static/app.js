// from data.js
var tableData = data;


var $searchButton = document.querySelector("#filter-btn");

//event listener for later when the search button is click
$searchButton.addEventListener("click", afterClickingSearch);

//declare variable with d3.select
var tbody = d3.select("tbody");

//function to loop through using forEach and Object.entries
function displayData(ufo){ 
    tbody.text("")
    ufo.forEach(function(diff_sights){
    row = tbody.append("tr")
    Object.entries(diff_sights).forEach(function([key, value]){
        new_td = row.append("td").text(value)	
    })
})
};

displayData(tableData)

//create a function for searching
function afterClickingSearch(event) {

var dateEnter = document.querySelector("#datetime");

//prevent refreshing
event.preventDefault();

//filter the data 
var filtered = dateEnter.value.trim();
if (filtered != "") {
  tableData = data.filter(function (data) {
    var dataDate = data.datetime;
    return dataDate === filtered;
    
   // d3.event.preventDefault();
  });
};
//run the display function again after filtering
displayData();
}

//var $date = document.querySelector("#datetime");


var resetbutton = d3.select("#reset-btn");
//reset everything
resetbutton.on("click", () => {
	tbody.html("");
	displayData(data)
	console.log("Table reset")
})