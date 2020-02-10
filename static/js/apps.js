// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a function to build a table
function buildTable(data){
    //tbody first clears out any existing data
    tbody.html("");

    // Build For each function
    // Next, loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td")
            cell.text(val);
            }
        );
    });
}

// Challenge Changes mostly affect the next few blocks of code
// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {

    // Save the element, value, and id of the filter that was changed
    let changedElement = d3.select(this);
    let changedValue = changedElement.property("value");
    let changedID = changedElement.attr("id");
    // If a filter value was entered then add that filterId and value
    if (changedValue){
        filters[changedID]= changedValue;

    }
    // to the filters list. Otherwise, clear that filter from the filters object
    else{
        delete filters[changedID];
    };
    // Call function to apply all filters and rebuild the table
    filterTable();
    
}

function filterTable() {
    // Set the filteredData to the tableData
    let filteredData = tableData;
    // Loop through all of the filters and keep any data that matches the filter values
    Object.entries(filters).forEach(([key, value])=>{
        filteredData=filteredData.filter(row => row[key] === value);
    });
    
    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("input").on("change",updateFilters);
buildTable(tableData);

// // Build the table when the page loads
// buildTable(tableData);
// //Create function handle click
// function handleClick() {
//     let date = d3.select("#datetime").property("value");
//     //Add variable data table
//     let filteredData = tableData;
//     if (date) {
//         filteredData = filteredData.filter(row => row.datetime === date);
//     };
//     // Rebuild the table using the filtered data
//     // @NOTE: If no date was entered, then filteredData will
//     // just be the original tableData.
//     buildTable(filteredData);
// };


// //Listen for the Click
// d3.select("#filter-btn").on("click", handleClick);
// //Call build datatable
// buildTable(tableData);