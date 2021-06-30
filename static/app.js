// create variable
var tableData = data;

var tbody = d3.select("tbody");

data.forEach((ufoReport) => {
    let row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// create the actual button variable
var button = d3.select('#filter-btn');

// once the user inputs something, this function will take the info and process it upon click
button.on('click', function() {

    // make variables for inputs and values for date and city
    var inputDate = d3.select('#datetime');
    var valueDate = inputDate.property('value');

    // filter by date using user input
    var filter = tableData.filter(item => item.datetime === valueDate)

    // clear the table
    tbody.html(``);

    // to add filtered data
    filter.forEach( item => {
        var tr = tbody.append('tr');
        tr.append('td').text(item.datetime);
        tr.append('td').text(item.city);
        tr.append('td').text(item.state);
        tr.append('td').text(item.country);
        tr.append('td').text(item.shape);
        tr.append('td').text(item.durationMinutes);
        tr.append('td').text(item.comments);
    });
});