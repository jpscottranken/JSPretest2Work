const $ = selector => document.querySelector(selector)

document.addEventListener("DOMContentLoaded", () => {
	const MINGUESS  =   1
	const MAGUESS   = 100
	const NGM       = "No Guess Made!"
	const WTH       = " was too high"
	const WTL       = " was too low"
	const WC        = " was correct"

	let  randNum	= 0
	let  guess      = 0
	let  totGuesses = 0
	let  isValid    = true
	let  theStatus  = ""
	
	$("#makeGuess").addEventListener("click", evt => {
		if (randNum === 0)
		{
			randNum = Math.floor(Math.random() * 100) + 1
		}
		
		guess = $("#guess").value
		if (guess === "")
		{
			$("#guessStatus").value = NGM
			return
		}
		
		++totGuesses
		figureGuessStatus()
	})
	
	function figureGuessStatus()
	{
		$("#guessStatus").value = guess 
		$("#totalGuesses").value = totGuesses 
		
		if (guess < randNum)
		{
			$("#guessStatus").value += WTL
		}
		else if (guess > randNum)
		{
			$("#guessStatus").value += WTH
		}
		else
		{
			$("#guessStatus").value += WC
		}
	}

	function clearTheForm()
	{
		$("#guess").value 		 = ""
		$("#guessStatus").value  = ""
		$("#guess").focus()
	}

	$("#newGame").addEventListener("click", evt => {
		randNum = Math.floor(Math.random() * 100) + 1
		clearTheForm()
		$("#totalGuesses").value = ""
		totGuesses = 0;
	})
	
	$("#clearForm").addEventListener("click", evt => {
		clearTheForm()
	})
	
	$("#guess").focus()
})