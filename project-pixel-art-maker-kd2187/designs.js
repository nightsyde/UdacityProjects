// Pixel Art Maker v1.0
// Kirk Donaldson


// declaring global varables
const form = document.getElementById('sizePicker'); // form used to get gride size input
var dataSet = new FormData(); // used to transfer form data
var tdID = ""; // identifies individual cells
const colorInput = document.getElementById('colorPicker'); // used to transfer color data
const workSpace = document.getElementById('pixelCanvas'); // work space within page
const gridSpace = document.createElement('table'); // table within workSpace
gridSpace.setAttribute('id','gridSpace');
workSpace.appendChild(gridSpace);
var firstRun = 0; // check for first time page has run since refresh

// document.addEventListener('click', (e) => {
//   console.log("mouse click");
//
// });

function cellClicked(evt) { // function to listen for when a cell is clicked and changes the color
  //console.log(evt.target.id + " clicked");
  const chosenCell = evt.target.id;
  var chosenColor = colorInput.value;
  evt.target.setAttribute('style','background-color : ' + chosenColor);
  //console.log(chosenColor + " clicked for " + chosenCell);
}

function makeGrid() {
// Select size input
//  console.log("makeGrid entered");
  var tableWidth = dataSet.get("0")
  var tableHeight = dataSet.get("1");
  const gridTable = document.createElement('table');

// creating the grid works.
// need to clear old table to build new one

  for (var i = 1;i <= tableHeight;++i) {
    // create new row
    var rowID = "row" + i;
    const newRow = document.createElement('tr');
    newRow.setAttribute('id',rowID);
    for (var j = 1;j <= tableWidth;++j) {
      // create new cell
      tdID = "tdx" + i + "y" + j;
      const newCell = document.createElement('td');
      newCell.setAttribute('id',tdID);
      // append to existing row
      newRow.appendChild(newCell);
      }
    // add row to existing table
    gridTable.appendChild(newRow);
  }

  if(firstRun == 0) {
    gridSpace.appendChild(gridTable);
    firstRun = 1;
  } else {
    gridSpace.firstChild.replaceWith(gridTable);
  }
}
// on submit, create grid and add to table
form.addEventListener('submit',(e) => {
  // on form submission, prevent default
  e.preventDefault();
  new FormData(form);
});

workSpace.addEventListener('click', cellClicked);

form.addEventListener('formdata', (e) => {
  // console.log('formdata fired');
  dataSet.delete('value'); // deletes old values from dataSet
  // Get the form data from the event object
  let data = e.formData;
  var i = 0;
  for (var value of data.values()) {
    //console.log(value);
    dataSet.set(i,value);
    ++i;
  }
  makeGrid();
});
