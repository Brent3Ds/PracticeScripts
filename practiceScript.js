// this is a string
let string = "long string"; 
// making the string dispaly backwards
function backString(name) {
	return name.split("").reverse().join("");
}

	console.log(backString(string))

// for loops
for(let i = 0; i <= 100; i+=10){
	console.log(i)
}

// functions

function scramble(one,two) {
	//alernate each letter of each word
	var scrambledWord;
		let oneArr = one.split("")
		let twoArr = two.split("")
		let scrambledArr = []
		//console.log(oneArr,twoArr)
		for (let i = 0; i < one.split('').length; i++) {
			//console.log(i)
			if (i < oneArr.length){
			//console.log(oneArr[i])
			scrambledArr.push(oneArr[i])
			}
			if (i < twoArr.length){
				//console.log(twoArr[i])
				scrambledArr.push(twoArr[i])
			}
		}
		//console.log(scrambledArr)
		let scrambledString = scrambledArr.join("")
		//console.log(scrambledString)
	return scrambledString
} 

let output = scramble("blue","red")
console.log("Output",output)


