//UPDATE
fetch("http://menu.com/menu/api/post/update.php", {
  method: "PUT",
  headers: {
    'Content-Type': 'application/json'
  },

  body: JSON.stringify({
    'title' : 'blu ewwe blue blue new new new new',
    'body' : 'red red red red red red red',
    'author' : 'new new new blue blwer w322323e2',
    'category_id' : '2',
    'id' : '1'
  })
})
.then( (response) => { 
   console.log(response);
});

//post

const update = async (title, message, author, category_id, id) => {
    
    const location = "http://menu.com/menu/api/post/update.php";
    
    const settings = {
        method: 'PUT',
        headers: new Headers({
        }),
        body: JSON.stringify({
            'title' : title,
            'body' : message,
            'author' : author,
            'category_id' : category_id,
            'id' : id
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

export { update };