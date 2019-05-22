// from data.js assign data to an array
var tableData = data;

//create function
function buildtable(data){
    //loop for each ufo sighting
 data.forEach(ufoSight => {
     ufoRow = d3.select("tbody").append("tr")
     Object.values(ufoSight).forEach(ufoDetail => {
        ufoRow.append("td").text(ufoDetail)
     })
     
 });
    
}
// build table by calling the function
buildtable(tableData)
//On button click call buttonclick function
d3.selectAll("#filter-btn").on("click",buttonclick);
function buttonclick(event){
    // prevent page from refreshing
    d3.event.preventDefault()
    
    d3.selectAll("tbody tr").remove()
    ufoDate = d3.select("#datetime").node().value
    if (ufoDate ==="") {
        // if no search requirement then display the whole data table
        buildtable(tableData)
    }
    else{
        //pull the data table by filtering only rows which matches with
        // datetime of input search criteria
     buildtable(tableData.filter(function(element){return ufoDate===element.datetime}))
    }
    console.log(ufoDate)
}


