# belly-button-challenge


## Background ## 

In this assignment, I was tasked to build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/) to an external site., which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Files ##

Downloaded the following files to get started:

[Module 14 Challenge files](https://bootcampspot.instructure.com/courses/3819/assignments/56644?module_item_id=1000218)

## Instructions ##

Completed the following steps:

1. Used the D3 library to read in **samples.json** from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    - Used **sample_values** as the values for the bar chart.

    - Used **otu_ids** as the labels for the bar chart.

    - Used **otu_labels** as the hovertext for the chart.
  
![alt text](https://github.com/mdyousufreja/belly-button-challenge/assets/135454460/fd245817-d7d5-4f34-bd96-0a6e32f315f3)

  
3. Created a bubble chart that displays each sample.

    - Used **otu_ids** for the x values.

    - Used **sample_values** for the y values.

    - Used **sample_values** for the marker size.

    - Used **otu_ids** for the marker colors.

    - Used **otu_labels** for the text values

![alt text](https://github.com/mdyousufreja/belly-button-challenge/assets/135454460/b0b397b6-ab7c-4338-a3bd-b0d071394b26)


4. Displayed the sample metadata, i.e., an individual's demographic information.

5. Displayed each key-value pair from the metadata JSON object somewhere on the page.

![alt text](https://github.com/mdyousufreja/belly-button-challenge/assets/135454460/9348ca33-a82a-4bd1-8e00-1dfff4cf9a12)


6. Updated all the plots when a new sample is selected.

7. Deployed my app to a free static page hosting service, such as GitHub Pages. Submit the links to my deployment and my GitHub repo.


## References ##

Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.
