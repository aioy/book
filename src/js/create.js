
//post


// function thisWorks(title, message, author, id) {
//     fetch("http://menu.com/menu/api/post/create.php", {
//       method: "POST",
//       headers: new Headers(),

//       body: JSON.stringify({
//         'title' : title,
//         'body' : message,
//         'author' : author,
//         'category_id' : id
//       })
//     })
//     .then( (response) => { 
//        console.log(response);
//     });
// }


const post = async (title, message, author, id) => {
    
    const location = "http://menu.com/menu/api/post/create.php";
    
    const settings = {
        method: 'POST',
        headers: new Headers({
        }),
        body: JSON.stringify({
            'title' : title,
            'body' : message,
            'author' : author,
            'category_id' : id
        })
    };

    try {
        const response = await fetch(location, settings);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export { post };