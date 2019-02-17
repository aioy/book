
//post


// function thisWorks(title, message, author, id) {


// fetch("http://menu.com/menu/api/post/create.php", {
//   method: "POST",
//   headers: new Headers(),

//   body: JSON.stringify({
//     'title' : title,
//     'body' : message,
//     'author' : author,
//     'category_id' : id
//   })
// })
// .then( (response) => { 
//    console.log(response);
// });
// }


const post = async (title, message, author, id) => {
    
    const location = "http://menu.com/menu/api/post/create.php";
    
    const settings = {
        method: 'POST',
        headers: new Headers()
    };
    
    const body = JSON.stringify({
        'title' : title.toString(),
        'body' : message.toString(),
        'author' : author.toString(),
        'category_id' : id.toString()
    });

    const data = await fetch(location, settings, body)
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(error => {
            return error
            console.log('error');
        });

    return data;
    console.log(data);

}

export { post, b };