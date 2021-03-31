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
    
      // Slice the first 10 objects for plotting
      var slicedIds = otuids.slice(0, 10);
      var slicedSamples = sampleValues.slice(0,10);
      var slicedLabels = otuLabels.slice(0,10);
      console.log(slicedIds);
      console.log(slicedSamples);
      console.log(slicedLabels);

      //reverse the objects
      var reversedIds = slicedIds.reverse();
      var reversedSamples = slicedSamples.reverse();
      var reversedLabels = slicedLabels.reverse();
      console.log(reversedIds);
      console.log(reversedSamples);
      console.log(reversedLabels);

      // Build bar chart
      var trace1 = {
          x: reversedSamples,
          y: reversedIds.map(d => "OTU " + d),
          text: reversedLabels,
          type: "bar",
          orientation: "h"
      };

      //data
      var barData = [trace1];

      //layout 
      var layout = {
          title: "Top 10 OTUs Found",
          yaxis: {
              type: "category"
          },
          margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
          },
          barmode: 'stack'
      };

      // Render the plot to the div tag with id "plot"
      Plotly.newPlot("bar", barData, layout);

      // build bubble chart
      var trace1 = {
          x: otuids,
          y: sampleValues,
          text: otuLabels,
          mode: 'markers',
          marker: {
            color: otuids,
            size: sampleValues
          }
      };
        
      var bubbleData = [trace1];
      
      var layout = {
        title: 'Test Subject Data',
        showlegend: false,
        height: 800,
        width: 1000
      };
      
      Plotly.newPlot('bubble', bubbleData, layout);

      // build pannel data section
      var selectedMetaData = (data.metadata.filter(obj => obj.id == id))[0];
      console.log(selectedMetaData);
      // metadata key
      // you could do a table, or maybe simpler is just append like "h5"
  
      //get reference to panel-body
      var panelbody = d3.select("panel-body");
      
      selectedMetaData.forEach(function(updatePanel) {
        console.log(updatePanel);
        var row = panelbody.append("tr");
        Object.entries(panelbody).forEach(function([key,value]) {
          console.log(key,value);
          var cell = row.append("td");
          cell.text(value);
        })
      })
      // for (var key in selectedMetaData) {
      //     console.log(`${key}:${selectedMetaData[key]}`);
      //     idData = key;
      //   };
      // }
      // for (var key in selectedMetaData) {
      //   console.log(`${key}:${selectedMetaData[key]}`);
      //   var pannelData = d3.selectAll("#sample-metadata").innerText += key;
      // };
    
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