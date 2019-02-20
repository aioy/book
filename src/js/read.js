const read = async () => {
    
    const location = "http://menu.com/menu/api/post/read.php";
    
    const settings = {
        method: 'GET',
        headers: new Headers({
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

export { read };