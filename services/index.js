//Llamamos a la API
fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO')
    .then(res => {
    return res.json();
    })
    .then(data => {
    console.log(data);
    
    })
    .catch(error => {
    console.error(error);
    });



//Primero creo una función para cargar las listas por categoría
//const chargeBooks = async() => {
//    try {
//        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO');
//        console.log(response);
//si la respuesta es correcta
        //if (response.status === 200){
        //    const data = await response.json();
        //    let books = '';
        //    data.results.forEach(book => {
        //        books += `
        //        <div class = "book">
        //            <img class = "poster" src="https://storage.googleapis.com/du-prd/books/images/${books.list_image}">
        //        </div>
        //        <h1>${data.results.display_name}</h1>`;
        //    });
        //    document.getElementById('container').innerHTML = books;
//si la respuesta nos devuelve algún error
        //} else if(response.status === 401){
        //    console.log('bad key');
        //}  else if(response.status === 404){
        //    console.log('does not exist');
        //}
        //else {
        //    console.log('there was an error and we dont know what happened')
        //}
    //} catch(error){
    //    console.log(error);
    //}
//}

//Segundo creo una función para cargar los más vendidos de cada categoría

//chargeBooks();


