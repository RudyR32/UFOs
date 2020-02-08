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

//Create function handle click
function handleClick() {
    let date = d3.select("#datetime").property("value");
    //Add variable data table
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

//Listen for the Click
d3.select("#filter-btn").on("click", handleClick);
//Call build datatable
buildTable(tableData);