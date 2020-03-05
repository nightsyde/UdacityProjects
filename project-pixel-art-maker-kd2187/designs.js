

// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');

function makeGrid(x,y) {
  // Select size input
  var tableWidth = document.getElementById('inputWidth');
  var tableHeight = document.getElementById('inputHeight');

  const gridTable = document.getElementById('pixelCanvas');
  // Select color input
  const colorInput = document.getElementById('colorPicker');

// Your code goes here!
// creating the grid works.
// now to figure out how to pass the variables from the form to the function
  for (var i = 1;i <= y;++i) {
    // create new row
    var rowID = "row" + i;
    const newRow = document.createElement('tr');
    newRow.setAttribute('id',rowID);
    for (var j = 1;j <= x;++j) {
      // create new cell
      var tdID = "tdx" + i + "y" + j;
      const newCell = document.createElement('td');
      newCell.setAttribute('id',tdID);
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

  // Get the form data from the event object
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value);

  }
  makeGrid(data);
});

// determine which cell was clicked
// const selectedCell = ???;

// change cell background color to colorInput
// selectedCell.style.color = colorInput;
