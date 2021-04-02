# plotly-challenge

**Background**

For this project, I was tasked with building an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

A small handful of microbial species (also referred to as operational taxonomic units or OTUs) were found to be present in over 70% of people, while the other species were relatively rare. 

![](https://github.com/erinmann12/plotly-challenge/blob/main/Images/dashboard.PNG)

**Tools Used**

1. D3 Library
2. JavaScript
3. HTML
4. Plotly

**Project Tasks**

First I used the D3 library to read in the data from the provided JSON document. Next, I used Plotly to create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in the individual.

![](https://github.com/erinmann12/plotly-challenge/blob/main/Images/barchart.png)

Next, I created a bubble chart to display each OTU sample. 

![](https://github.com/erinmann12/plotly-challenge/blob/main/Images/bubblechart.png)

Finally, as an extra step, I created a gauge chart to show how many times a week the individual washed their belly button.

![](https://github.com/erinmann12/plotly-challenge/blob/main/Images/gauge.png)

