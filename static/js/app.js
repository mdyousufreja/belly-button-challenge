// Store the URL in a constant
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Define a function to populate demographic info
let panelInfo = async (id) => {
    try {
        // Fetch data from the URL
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        const metadata = data.metadata;

        // Find the matching sample by ID
        const identifier = metadata.find(sample => sample.id === parseInt(id, 10));

        if (identifier) {
            const panel = document.querySelector('#sample-metadata');
            panel.innerHTML = ''; // Clear existing content

            // Append demographic info to the panel
            Object.entries(identifier).forEach(([key, value]) => {
                const infoElement = document.createElement('h6');
                infoElement.textContent = `${key}: ${value}`;
                panel.appendChild(infoElement);
            });
        } else {
            console.log(`Sample with ID ${id} not found.`);
        }
    } catch (error) {
        console.error(error);
    }
};

//Plotting barData and bubbleData
function Plots(id) {
    d3.json(url).then(function (data) {
        let sampleData = data;
        let samples = sampleData.samples;
        let identifier = samples.filter(sample => sample.id === id);
        let filtered = identifier[0];
        let OTUvalues = filtered.sample_values.slice(0, 10).reverse();
        let OTUids = filtered.otu_ids.slice(0, 10).reverse();
        let labels = filtered.otu_labels.slice(0, 10).reverse();
        let barTrace = {
            x: OTUvalues,
            y: OTUids.map(object => 'OTU ' + object),
            name: labels,
            type: 'bar',
            orientation: 'h'
        };
        let barLayout = {
            title: `Top 10 OTUs for Subject ${id}`,
            xaxis: { title: 'Sample Values' },
            yaxis: { title: 'OTU ID' }
        };
        let barData = [barTrace];
        Plotly.newPlot('bar', barData, barLayout);
        let bubbleTrace = {
            x: filtered.otu_ids,
            y: filtered.sample_values,
            mode: 'markers',
            marker: {
                size: filtered.sample_values,
                color: filtered.otu_ids,
                colorscale: 'Portland'
            },
            text: filtered.otu_labels,
        };
        let bubbleData = [bubbleTrace];
        let bubbleLayout = {
            title: `OTUs for Subject ${id}`,
            xaxis: { title: 'OTU ID' },
            yaxis: { title: 'Sample Values' }
        };
        Plotly.newPlot('bubble', bubbleData, bubbleLayout);
    })
};

//Build new upon ID change
function optionChanged(id) {
    Plots(id);
    panelInfo(id);
};

// Test Subject Dropdown and initial function
function init() {
    let dropDown = d3.select('#selDataset');

    // Load data and populate dropdown options
    d3.json(url).then(function (data) {
        sampleData = data;
        let names = sampleData.names;

        // Populate dropdown options
        names.forEach(value => {
            dropDown.append('option').text(value);
        });

        // Initialize with the first name
        const initialName = names[0];
        panelInfo(initialName);
        Plots(initialName);
    });
}

// Call the initialization function
init();