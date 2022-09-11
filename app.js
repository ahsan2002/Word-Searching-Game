var inputData= document.getElementById("input");
var trueword=false;
var ttime=document.getElementById("totalcount");
var count=0;
ttime.innerHTML = count;

function getvalue(val){
    var value=val;
    display(val);

}

function display(v) {
        inputData.innerText += v;

}

function remove() {

    var rev = inputData.innerText;
    inputData.innerText = rev.substring(0, rev.length - 1);

}


function match() {
    if (Dictonery.includes(inputData.innerText)) {
        alert("word found");
        document.getElementById("foword").innerHTML += "<li>" + inputData.innerText+ "</li>";
        inputData.innerText="";
        count++;
        ttime.innerHTML = count;
    }
    else{
        alert("word not found");
    }
}


// var timeleft = 10;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     alert("Time Up");
//     inputData.innerText="";
//   }
//   document.getElementById("progressBar").value = 10 - timeleft;
//   timeleft -= 1;
// }, 1000);