

// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
var dataSet = new FormData();
var firstRun = 0;

const workSpace = document.getElementById('pixelCanvas');
// Select color input
const colorInput = document.getElementById('colorPicker');

document.addEventListener('click', function() {
  console.log("mouse click");

});
function colorChanger(cell) {
  var chosenCell = document.getElementById(cell);
  var chosenColor = colorInput.value;
  chosenCell.setAttribute('style', 'background-color:' + chosenColor );
  console.log(chosenColor + "clicked for " + tdID);
}
function makeGrid() {
// Your code goes here!


// Select size input

  console.log("makeGrid entered");
  var tableWidth = dataSet.get("0")
  var tableHeight = dataSet.get("1");
  const gridTable = document.createElement('table');


  workSpace.appendChild(gridTable);


// creating the grid works.
// table height and width works.
// need to clear old table to build new one
// need to select cell for colorChanger

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
      newCell.addEventListener('click', function() {
        console.log(tdID + " clicked");
        var chosenColor = colorInput.value;
        var chosenCell = document.getElementById(tdID);
        colorChanger(chosenCell);

      });
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
