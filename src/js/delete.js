//Delete

const remove = async (id) => {
    
    const location = "http://menu.com/menu/api/post/delete.php";
    
    const settings = {
        method: 'DELETE',
        headers: new Headers({
        }),
        body: JSON.stringify({
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

export { remove }
