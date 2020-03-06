

// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
var dataSet = new FormData();
var firstRun = 0;
const gridTable = document.createElement('table');

const workSpace = document.getElementById('pixelCanvas');
// Select color input
const colorInput = document.getElementById('colorPicker');

document.addEventListener('click', function() {
  console.log("mouse click");

});

function makeGrid() {
  // Select size input

  console.log("makeGrid entered");
  var tableWidth = dataSet.get("0")
  var tableHeight = dataSet.get("1");

  if (firstRun === 0) {
    workSpace.appendChild(gridTable);
    firstRun = 1;
  } else {
    workSpace.removeChild(gridTable);
    workSpace.appendChild(gridTable);
  }



// Your code goes here!
// creating the grid works.
// now to figure out how to pass the variables from the form to the function
  for (var i = 1;i <= tableHeight;++i) {
    // create new row
    var rowID = "row" + i;
    const newRow = document.createElement('tr');
    newRow.setAttribute('id',rowID);
    for (var j = 1;j <= tableWidth;++j) {
      // create new cell
      var tdID = "tdx" + i + "y" + j;
      const newCell = document.createElement('td');
      newCell.setAttribute('id',tdID);
/*      newCell.addEventListener('click', function() {
        console.log(tdID + " clicked");
      });*/
      // append to existing row
      newRow.appendChild(newCell);
      }
    // add row to existing table
    gridTable.appendChild(newRow);
  }

}
// on submit, create grid and add to table
form.addEventListener('submit',(e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(form);
});

form.addEventListener('formdata', (e) => {
  console.log('formdata fired');
  dataSet.delete('value');


  // Get the form data from the event object
  let data = e.formData;
  var i = 0;
  for (var value of data.values()) {
    console.log(value);
    dataSet.append(i,value);
    ++i;


  }
  makeGrid();
});

// determine which cell was clicked
// const selectedCell = ???;

// change cell background color to colorInput
// selectedCell.style.color = colorInput;
