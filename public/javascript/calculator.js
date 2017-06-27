console.log("hey console")
var leftdisplay= document.getElementById("leftdisplay")
var operatordisplay= document.getElementById("operatordisplay")
var rightdisplay= document.getElementById("rightdisplay")

var zero= document.getElementById("zero")
zero.addEventListener("click", function () {
	if (leftdisplay.value != "" && operatordisplay.value != "") {
		rightdisplay.value+=0
	} else { 
		leftdisplay.value +=0
	}
	
})
var one= document.getElementById("one")
one.addEventListener("click", function () {
	if (leftdisplay.value != "" && operatordisplay.value != "") {
		rightdisplay.value+=1
	} else { 
		leftdisplay.value +=1
	}
	
})
var two= document.getElementById("two")
two.addEventListener("click", function () {
	if (leftdisplay.value != "" && operatordisplay.value != "") {
		rightdisplay.value+=2
	} else { 
		leftdisplay.value +=2
	}

})
var three= document.getElementById("three")
three.addEventListener("click", function () {
	if (leftdisplay.value != "" && operatordisplay.value != "") {
		rightdisplay.value+=3
	} else { 
		leftdisplay.value +=3
	}
})
var four= document.getElementById("four")
four.addEventListener("click", function () {
	if (leftdisplay.value != "" && operatordisplay.value != "") {
		rightdisplay.value+=4
	} else { 
		leftdisplay.value +=4
	}
})
var five= document.getElementById("five")
five.addEventListener("click", function () {
	if (leftdisplay.value != "" && operatordisplay.value != "") {
		rightdisplay.value+=5
	} else { 
		leftdisplay.value +=5
	}
})
var six= document.getElementById("six")
six.addEventListener("click", function () {
	if (leftdisplay.value != "" && operatordisplay.value != "") {
		rightdisplay.value+=6
	} else { 
		leftdisplay.value +=6
	}
})
var seven= document.getElementById("seven")
seven.addEventListener("click", function () {
	if (leftdisplay.value != "" && operatordisplay.value != "") {
		rightdisplay.value+=7
	} else { 
		leftdisplay.value +=7
	}
})
var eight= document.getElementById("eight")
eight.addEventListener("click", function () {
	if (leftdisplay.value != "" && operatordisplay.value != "") {
		rightdisplay.value+=8
	} else { 
		leftdisplay.value +=8
	}
})
var nine= document.getElementById("nine")
nine.addEventListener("click", function () {
	if (leftdisplay.value != "" && operatordisplay.value != "") {
		rightdisplay.value+=9
	} else { 
		leftdisplay.value +=9
	}
})
var decimal= document.getElementById("decimal")
decimal.addEventListener("click", function () {
	leftdisplay.value="."
})
var clear= document.getElementById("clear")
clear.addEventListener("click", function () {
	leftdisplay.value="" 
	operatordisplay.value=""
	rightdisplay.value="" 
})

var percentage= document.getElementById("percentage")
percentage.addEventListener("click", function () {
	operatordisplay.value= "%" 
})
var division= document.getElementById("division")
division.addEventListener("click", function () {
	operatordisplay.value="/"
})
var multiplication= document.getElementById("multiplication")
multiplication.addEventListener("click", function () {
	operatordisplay.value= "X" 
})
var subraction= document.getElementById("subraction")
subraction.addEventListener("click", function () {
	operatordisplay.value= "-"
})
var addition= document.getElementById("addition")
addition.addEventListener("click", function () {
	operatordisplay.value= "+" 


})
var equal = document.getElementById("equal")
equal.addEventListener("click", function () {
	if (operatordisplay.value== ""){
	} else {
		operatordisplay.value= "="
		rightdisplay.value= ""
	}
})



