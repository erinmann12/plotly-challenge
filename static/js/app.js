//create charts
function loadCharts(id) {
    // initially 940
    console.log(id);

    // make data available in this function
    d3.json("samples.json").then((data)=>{
    
    // check if you have data
    console.log(data);

    var selectedData = data.samples.filter(obj => obj.id == id);

    // check that selected object has been isolated
    console.log(selectedData);

    // create variables to get object out of array
    var otuids = selectedData[0].otu_ids;
    var sampleValues = selectedData[0].sample_values;
    var otuLabels = selectedData[0].otu_labels;

    console.log(otuids);
    console.log(sampleValues);
    console.log(otuLabels);
    
    // Build bar chart
    // do .slice here

    // build bubble chart

    // build pannel data section
    var selectedMetaData = data.metadata.filter(obj => obj.id == id);
    console.log(selectedMetaData);
    // metadata key
    // you could do a table, or maybe simpler is just append like "h5"

    });

}

// read in JSON as promise
d3.json("samples.json").then((data)=>{
    // console.log(data);

    // console.log(data.names);

    var dropDown = d3.select("#selDataset");

    data.names.forEach((dataObj) => {
        dropDown.append("option").text(dataObj).property("value",dataObj);
    })

    var id = data.names[0];
    loadCharts(id)
})

function optionChanged(selectedId){
    // load charts of selected id
    loadCharts(selectedId);
}