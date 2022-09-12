fetch('http://api.fungenerators.com/fact/random?category=Countries&subcategory=USA',{
    method:'GET',
    headers:{
        'accept': 'application/json', 
    'X-Fungenerators-Api-Secret':' api_key='
       

    }
})

.then(res =>{
    if (res.ok){
        console.log('sucess')
    }else{
        console.log('not successful')
    }
    res.json()
})
.then(data => console.log(data))
 .catch(error => console.log('Error'))