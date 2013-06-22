#!/usr/bin/env node

// Max number
var MAXNUMBER=100;

var fs = require('fs');
var outfile = "primes.txt";

function isPrime(p) {
	var maxPrime = Math.sqrt(p);
	for (var i=0; i<primeList.length; i++) {
		if (primeList[i] > maxPrime) {
			return true;
		} else if (p%primeList[i] == 0) {
			return false;
		}
	}

	return true;
}

// Store prime numbers
var primeList = new Array();

// Loop until max number
var i=2;
while (primeList.length < MAXNUMBER) {	
	if (isPrime(i)) {
		primeList.push(i);
	}
	i++;
}

// Write array to file
fs.writeFileSync(outfile, primeList);
