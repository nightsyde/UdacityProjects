var express = require('express');
var app = express();
const data = [];

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
})

app.post('/', addData);

function addData (req, res) {
  console.log(req.body);
  data.push(req.body);
};



const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header
      body: JSON.stringify(data),
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

postData('/add', {answer:42});


const postData2 = async ( url = '', data = {})=>{
    // console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }

  postData2('/addMovie', {movie:' the matrix', score: 5})


// client side code for api
  let baseURL = 'http://api.animalinfo.org/data/?animal='
  let apiKey = '&appid=9f15e45060...';

  document.getElementById('generate').addEventListener('click', performAction);

  function performAction(e){
  const newAnimal =  document.getElementById('animal').value;
  getAnimal(baseURL,newAnimal, apiKey)

  }
  const getAnimal = async (baseURL, animal, key)=>{

    const res = await fetch(baseURL+animal+key)
    try {

      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }

  // GET request
  const getData = async (url = '') => {
    const request = await fetch(url);
    try{
        const dataReq = await request.json();
        console.log(dataReq);
        return dataReq
    }catch(error) {
        console.log('error: ', error);
    }
}

// server side code for addAnimal
app.post('/addAnimal', addAnimal);

function addAnimal(req,res){

  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  console.log(animalData)
}
