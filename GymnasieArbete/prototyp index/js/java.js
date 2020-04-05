

// choiceBox

var situation = ["Div1", "Div2", "Div3", "Div4", "Div5"];
function Visibility(divId)
{
  console.log(divId);
  for (var i = 0; i < situation.length; i++) {
    if (situation[i] === divId)  { console.log(divId); document.getElementById(divId).style.display = "block"; }
    else { document.getElementById(divId).style.display = "none"; }
  }
}


var tbl1 = document.getElementById("tbl1");

function changeTable1(){
  const rowId = document.getElementById("row").value;
  const colId = document.getElementById("col").value;

  var row = document.getElementById("tbl").rows;
  var col = row[rowId - 1].cells;
  col[colId - 1].innerHTML = document.getElementById("tblText").value;
}

var tbl2 = document.getElementById("tbl2");

function changeTable2(){
  const rowId = document.getElementById("row").value;
  const colId = document.getElementById("col").value;

  var row = document.getElementById("tbl").rows;
  var col = row[rowId - 1].cells;
  col[colId - 1].innerHTML = document.getElementById("tblText").value;
}



/*
var divs = ["Div1", "Div2", "Div3", "Div4"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  }
  else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}


function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
*/
