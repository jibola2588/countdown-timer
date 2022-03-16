// JavaScript Document


var mySeconds;
var intervalHandle;


function tick(){
	var timeDisplay=document.getElementById("time");
	
	// var min=Math.floor(mySeconds/60);
	// var sec=mySeconds-(min*60);

	
	let hours   = Math.floor(mySeconds / 3600); // get hours
    let min = Math.floor((mySeconds - (hours * 3600)) / 60); // get minutes
    let sec = mySeconds - (hours * 3600) - (min * 60); 
	
	console.log(hours)
	console.log(min)
	console.log(sec)
	if (sec < 10) {
		sec="0"+sec;
	}
	if (min < 10) {
		min="0"+min;
	}
	
	var message= hours.toString()+":" + min.toString()+":"+sec.toString();
	
	timeDisplay.innerHTML=message;
	
	if(mySeconds===0){
		alert("Done");
		// clearInterval(intervalHandle);
		// resetPage();
	}
	mySeconds--;
	
	
}
function pause(){
	clearInterval(intervalHandle);
}

function resetPage(){
	var timeDisplay=document.getElementById("time");

	hours = 00
	min = 00
	sec = 00
	if (sec < 10) {
		sec="0"+sec;
	}
	// if (min < 10) {
	// 	min="0"+min;
	// }
	if (hours < 10) {
		min="0"+min;
	}
	var message= hours.toString()+":" + min.toString()+":"+sec.toString();
	
	timeDisplay.innerHTML=message;	
	document.getElementById("inputArea").style.display="block";
	
}

function startCounter(){
	var myInput=document.getElementById("minutes").value;
	if (isNaN(myInput)){
		alert("Type a valid number please");
		return;
	}
	mySeconds=myInput*3600;
	
	intervalHandle=setInterval(tick, 1000);
	
	document.getElementById("inputArea").style.display="none";
	
	myInput.value = " ";
	
}


window.onload=function(){
	var myInput=document.createElement("input");
	myInput.setAttribute("type","text");
	myInput.setAttribute("id","minutes");
	
	var myButton=document.createElement("input");
	myButton.setAttribute("type","button");
	myButton.setAttribute("value","Start Timer");
	myButton.setAttribute("id","startBtn");
	
	myButton.onclick=function(){
		startCounter();	
		
	}
	document.getElementById("inputArea").appendChild(myInput);
	document.getElementById("inputArea").appendChild(myButton);
	
	
}
