// Make notes and send to Thurs breakout room grp cht
//NOTE: When counting an array you will always start at zero.
//EX. ['pie', 'cake', 'taco']
//		 0  ,    1  ,    2

function dropRight(arr, n) {
// GOAL: Write a line of code where if n is greater 
// than the array length an empty aray will be returned. ex. []

	let newArr = []
// We created this varriable that is attached to an empty array so when we do our ".slice"
// we can set it to equal our newArr. Which will then change it from an empty array to whatever the ".slice" is moving into it.

	if (n >= arr.length) {
		return []
	}
	//The above "if" statement is saying: if n is greater than or equal to
	// the arrays length send back and empty array.


// Use n to count in from the end to get the index
	else {
		// This will place the "arr.slice..." into the new array that I created above.
		newArr = arr.slice(0,(arr.length - n))
		//				   ^ This is our start number.
	}
//The slice() method returns the selected elements in an array, as a new array object.
// The method requies a start and end parameter. In our case our Start is 0
// and our End is whatever (arr.length-n) will return. 

// *The Start number* is the location we what to begin at in the array in this case its 0 so we are 
//at the begining but you could change it to 2 and start at that location.	
	
	
	return newArr
	// Depending on what n is equal too the return statement above will either 
	//return our "If" statement or our "Else" statement.
}
console.log(dropRight([1,2,3,4], 2))
//					   0,1,2,3
//					   ^Start number

// So above is our console.log that will allow us to test this in our terminal.
// We have an array with ([1,2,3,4], 2)
//									 ^ This two is our -n.

// So in this case our array has  a total count of 3 and our n = 2 so therefore it is less than our array.
// So knowing this we know that it is not going to meet the requirements of our first if statement.
// So our else statement is going to be the code that runs.
// And as our else statement says we are going to take away 2 spots on our array *FROM THE END OF THE ARRAY*
// So we would get [1,2] to appear in the console because our n = 2 took away our [3, 4]

//	Feel free to change numbers around try setting the n to 5 and you can even mess around and change the start number.


// This doesnt work with only numbers you can also try this:
// console.log(dropRight(['Banks', 'Doughnut', 'Salem', 'Honey'], 2))