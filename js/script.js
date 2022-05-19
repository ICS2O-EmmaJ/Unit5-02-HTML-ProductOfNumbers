// Copyright (c) 2022 Emma Janani All rights reserved
//
// Created by: Emma Janani
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */

function calculateProduct() {
	// initalize sum as zero
	let sum = 0
	
	// get the positive integers from the user
	let userNum = parseInt(document.getElementById('userNum').value)	
	let secNum = parseInt(document.getElementById('secNum').value)	

	// use a for loop to calculate the product of numbers
	for (let counter = 1; counter <= userNum; counter++) {
		// add the counter each time to the current sum
		sum = sum + secNum
	}
	
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = "The product is " + sum
}
