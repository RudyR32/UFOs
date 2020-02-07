// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a function to build a table
function buildTable(data){
    tbody.html("");
}

// Build For each function
data.forEach((dataRow) => {
    //Append a row to the table body
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td")
        cell.text(val);
        }
    );
});