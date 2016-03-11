### Carbon Emissions Sortable Table with Bar Chart Assignment.

Create a sortable table using the carbon emissions json data in the `data` directory. One column of the table should contain horizontal bars to represent carbon emissions. You can reference the campaign contributions assignment and example from class here: https://github.com/chriscanipe/campaign-donations-table.

####In the `index.html` document:

1. Create an empty table with two class names: "emissions" and "table"
2. Create three table column headers in the table head (thead): "State" and  "Total Emissions". Leave the third colum header blank `<th></th>`.



####In the `script.js` document:

1. Call the `loadData()` function when the page is loaded.
2. Load the emissions json from the `data/` directory.
3. Pass the data to the `writeTable()` function.
4. Loop through the data and append a table row (`<tr>`) to the table body (`<tbody>`) with values for state name, total emissions and a bar.
5. Draw your bar as a div. You can reference the exercise-three project where we drew bars for graduation rates: https://github.com/chriscanipe/exercise-three
6. The width of the bar should be expressed as a percent of the largest value in the data set, which is Texas (641.0 metric tons). To get the percent value, simply divide each state's total emissions by 641.0, then multiply by 100.
7. Omit the United States total value
8. Use the DataTables library to make it sortable.
9. Sort by total emissions, most to least.
10. Set the default view to show all 50 states plus DC. You'll want to reference the [Data Tables](https://www.datatables.net/) documentation for those last three.


***Commit your finished project to your git account and send me the link.***


