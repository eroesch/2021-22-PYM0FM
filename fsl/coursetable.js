function tableFromArray(arrayIn, tableIdStr) {

// Now reverse the array to display in the correct order
	var courseArrayRev = arrayIn.reverse()
	// number of table columns and rows
	var nCols = 3
	var nRows = Math.ceil(courseArrayRev.length/nCols)
	// initialize correctly sorted column array
	var courseArrayColSort = []
	// loop through courseArray in chucks of nRows
	// this will create a nCols X nRows matrix
	for (var i = 0; i < courseArrayRev.length; i+=nRows){
		// append row with selected columns values
		courseArrayColSort.push(courseArrayRev.slice(i, ((nRows*i)+nRows)))	
	}
	// define transpose function
	transpose = m => m[0].map((x,i) => m.map(x => x[i]))
	// now transpose to have nRows X nCols
	courseArrayColSort = transpose(courseArrayColSort)

    // always 3 columns, with growing rows each year
	// first row always has just one course (the most recent)
	var courseTable = $("#" + tableIdStr)
	var row, cell
	for (var i = 0; i < courseArrayColSort.length; i++) {
		// make first row have first column with data, and remaining columns empty
		row = $('<tr />')
		courseTable.append(row)
		for (var j = 0; j < courseArrayColSort[i].length; j++){
			var val = courseArrayColSort[i][j]
			if (val === undefined){
				val = ""
			}
			cell = $('<td>' + val + '</td>')
			row.append(cell)
		}
	}
	
}
