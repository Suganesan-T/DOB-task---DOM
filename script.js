var date = document.createElement("input");
date.setAttribute("type","date")
date.id = "dob"

var button = document.createElement("button");
button.setAttribute("type","button")
button.innerHTML = "Display Data"
button.className = "btn btn-primary"
button.addEventListener("click",date_data)

function br(){
var br = document.createElement("br")
return br
}

document.body.append(date,button,br())

function date_data(){

var input = document.getElementById("dob").value;
var input_date = new Date(input);
var currentdate = new Date()
console.log(currentdate);

var millisecdiff = parseInt(currentdate.getTime()-input_date.getTime())
console.log(millisecdiff)

var seconddiff = Math.floor(millisecdiff/1000)
console.log(seconddiff)

var minutediff = Math.floor(seconddiff/60)
console.log(minutediff)

var hoursdiff = Math.floor(minutediff/60)
console.log(hoursdiff)

var daysdiff = Math.floor(hoursdiff/24)
console.log(daysdiff)

var monthsdiff = ((currentdate.getFullYear()-input_date.getFullYear()) *12 + (currentdate.getMonth()-input_date.getMonth()))
console.log(monthsdiff)

var yeardiff = currentdate.getFullYear()-input_date.getFullYear()
console.log(yeardiff)

var span = document.createElement("span")
span.innerHTML = `Given Input Date is ${input_date}`
var br1 = document.createElement("br")

var span1 = document.createElement("span")
span1.innerHTML = `Year ${yeardiff}`
var br2 = document.createElement("br")

var span2 = document.createElement("span")
span2.innerHTML = `Months ${monthsdiff}`
var br3 = document.createElement("br")

var span3 = document.createElement("span")
span3.innerHTML = `Days ${daysdiff}`
var br4 = document.createElement("br")

var span4 = document.createElement("span")
span4.innerHTML = `Hours ${hoursdiff}`
var br5 = document.createElement("br")

var span5 = document.createElement("span")
span5.innerHTML = `Minutes ${minutediff}`
var br6 = document.createElement("br")

var span6 = document.createElement("span")
span6.innerHTML = `Seconds ${seconddiff}`
var br7 = document.createElement("br")

var span7 = document.createElement("span")
span7.innerHTML = `Milliseconds ${millisecdiff}`

document.body.append(span,br1,span1,br2,span2,br3,span3,br4,span4,br5,span5,br6,span6,br7,span7)
}


