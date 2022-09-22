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





  async function test(){
    BoxField.style.color = colorTxt.value
     
      
    
      fetch(urlTest, requestOptions)
   .then( response =>  response.text()
   ).then(result => BoxField.setAttribute('value', result))
  
  

}
button.addEventListener('click',test)

