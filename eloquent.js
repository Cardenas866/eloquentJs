/*------- FizzBuzz Excersice -------------*/
for (counter = 1; counter <=100 ; counter++) {
  if (counter % 3 === 0 && counter % 5 === 0) {
  	console.log("FizzBuzz")
  	continue;
  } else if (counter % 3 === 0) {
  	console.log("Fizz")
  	continue; 
  }	else if (counter % 5 === 0) {
  	console.log("Buzz")
  	continue;
  }
  console.log(counter);
}; 
/*------- End of FizzBuzz Excersice -------*/

/*------- Chessboard Excersice Failed answer at the bottom---------*/
var size = 8*8;
var string = "";
for (var i = 0; i < 8; i++) {
	if (string == "") {
		for (var x = 0; i < 4; i++) {
		string = string + " x";
	}
	} else if (string == " ") {
		for (var x = 0; i < 4; i++) {
		string = string + "x ";
	}
	} else if (string == "x") {
		for (var x = 0; i < 4; i++) {
		string = string + " x";
	}

	console.log(string);
};
};

/*----------------ANSWER----------------------*/
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
/*-----------------End of Chesboard -------------------------*/

/*-----------------Math Min -------------------------*/

function min(num1, num2) {
	console.log(Math.min(num1, num2))
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/*-----------------END Math Min -------------------------*/


/*-----------------Recursion ------------------------*/

function isEven(target) {
	if (target % 2 == 0) {
		console.log("it's Even");
	} else if (target % 2 == 1) {
		console.log("It's Odd");
	} else {
		console.log("NAN");
	}
};

/*-----------------End of Recursion -------------------------*/

/*-----------------Beans ------------------------*/

function countBs(input) {
	let string = String(input);
	while (string.length > 0)
}


/*-----------------End of Beans ------------------------*/

/*-----------------Reversal ------------------------*/

function reversal(input) {
	let string = String(input);
	for (var i = 0; i < string.length; i++) {
		string[i] == string.length - 1;
	}
	return string;
}



let journal = [];

function testJournal(events, squirrel) {
	journal.push({events, squirrel});
};

testJournal(["saw a bird"], false);
console.log(journal.keys);



/*-----------------End of Reversal ------------------------*/

/*----------------- Range ------------------------*/

// Write a range function that takes two arguments, start and end, and returns an array containing 
// all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
// Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates 
// the “step” value used when building the array. If no step is given, the elements go up by increments 
// of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
// Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function range(start, end, step = start < end ? 1 : -1) {
	array = [];
	if (start < end) {
		for (i = start; i <= end; i++) {
		array.push(i);
		}
	} else if (start > end) {
		for (i = start; i <= end; i--) { //this was incorrect because the correct condition to stop the loop is >= instead of <=
		array.push(i);
		}
	}
	return array;
}

function sumi(array) {
	sum = 0;
	for(let number of array) {
		sum += number;
	}
	return sum;
}

/*----------------- END Range ------------------------*/


/*----------------- Review ------------------------*/
function countChar(string, ch) {
	count = 0;
	for (i = 0; i <= string.length; i++) {
		if (string[i] == ch) {
			count++;
		}
	}
	return count;
};




function range(start, end){
array = [];
for (i = start; i <= end; i++){
	array.push(i);
}
return array;
}

function sum(array){
	sum = 0;
	for (let number of array){
		sum += number;
	}
	return sum;
}

function range(start, end, step = start < end ? 1 : -1){
array = [];
if (step > 0){
for (i = start; i <= end; i+= step){
	array.push(i);
}
} else {
	for (i = start; i >= end; i+= step){
	array.push(i);
}
return array;
}

function reverseArray(array){
	newArray = [];
	for (let letter of array){
		newArray.unshift(letter);
	}
	return newArray;
}

function reverseArrayInPlace(array){
	for (i = 0; i < Math.floor(array.length / 2); i++){
		temp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = temp;
	}
	return array;
}

function isEven(number){
	function find(current){
		if (current == 0){
			return true;
		} else if (current == 1){
			return false;
		} else {
			return find(current - 2)
		}
	}
	return find(number);
}












