var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
let button = document.getElementById('button-style')
let BoxField = document.getElementById('FactBox')

let myCheck = document.getElementById("testCheck")
let colorTxt = document.getElementById('txtColor')

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var changednum = 140
let urlTest = `https://catfact.ninja/fact?max_length=${changednum}`





  function test(){
    BoxField.style.color = colorTxt.value
      console.log('it works')
       // console.log(changednum)
    
     fetch(urlTest, requestOptions)
  .then(response => response.text())
//    .then(result => console.log(result))
     .then(result => BoxField.setAttribute('value',result))
  
  .catch(error => console.log('error', error));
//   console.log(BoxField.nodeValue)

}
button.addEventListener('click',test)

// Last test of skill make a changable value in the api
// template string it andd send you ew