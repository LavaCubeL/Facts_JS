var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
let button = document.getElementById('button-style')
let BoxField = document.getElementById('FactBox')




var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};







  function test(){
    fetch("https://catfact.ninja/fact?max_length=140", requestOptions)
  .then(response => response.text())
//    .then(result => console.log(result))
    .then(result => BoxField.setAttribute('value',result))
  
  .catch(error => console.log('error', error));
//   console.log(BoxField.nodeValue)
}
button.addEventListener('click',test)