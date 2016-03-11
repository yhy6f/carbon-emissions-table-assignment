

$(document).ready(function() {

	// 1.
	// When the page is loaded,
	// call the loadData() function.

	loadData();

});




function loadData() {
	
	$.getJSON("js/carbon-emissions-by-state-2015.json", function(data) {
		writeTable(data);
	});

	// 2.
	// Write an AJAX call here to load your data.
	// Then PASS the data to writeTable();
}



function writeTable(data) {

		// 3.
		// * Loop through the data and write a new row for each state.
		// * Each row should have three columns: state name, total emissions and a bar.
		// * The bar will be expressed as a percent of the largest value in the data set,
		// which is Texas: 641.0. To get the percent value, simply divide each State's
		// total emissions by 641.0, then multiply by 100.
		// * Draw your bar as a div. You can reference the exercise-three project where
		// we drew bars for graduation rates: https://github.com/chriscanipe/exercise-three
		// * Omit the United States total value
		// * Highlight the value for Missouri by making it's bar red.
		// * Set the default number of rows to 51 so that all values are displayed at the same time.
		// You'll need to look that last one up in the documentation. Or google it. 
		// ** BONUS POINTS if you can figure out how to round displayed totals to a single decimal value (Ex: 640.1);


		for(i=0; i < data.length; i++) {

			var state = data[i].state;
			var totalDisp = data[i].total;
			var pct = (data[i].total/641) * 100;


			if (state !== "United States total") {
			
				$("table.emissions tbody").append(
					"<tr>"+
						"<td class='state'>"+state+"</td>"+
						"<td class='total'>"+totalDisp+"</td>"+
		                "<td data-sort='"+data[i].total+"'>"+
		                	"<div class='bar' style='width : "+pct+"%'></div>"+
		                "</td>"+
	                "</tr>"
				);
			
			}

		}




		$('.emissions').DataTable(
			{
	        	"order" : [[ 1, "desc" ]],
	        	 "iDisplayLength": 51
	    	}
    	);


	// 3.
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>): 
	// - Contribution Date
	// - Contributon Information
	// - Amount
}

