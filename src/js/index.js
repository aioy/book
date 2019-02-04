
import { cube } from './test2';
import '../styles/style.scss';


const c = document.createElement('div');

c.innerHTML='jfsdfsd123123123123123123f';

c.classList.add('jew');

document.body.appendChild(c);

//read
fetch('http://menu.com/menu/api/post/read.php')
.then(res => {
    if(res.ok){
        return res.json();
    } else {
        throw Error(`Request rejected with status ${res.status}`);
    }
})
.then((data) => {
    console.log(data);
    console.log('sdfsdf');
})
.catch(console.error);

//post
// fetch("http://menu.com/menu/api/post/create.php", {
//   method: "OPTIONS",
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },

//   body: JSON.stringify({
//     'title' : 'tesdfsdfsd',
//     'body' : 'sample sdfsdfsdfsnew new',
//     'author' : 'new nsdfsdfsdfsdew author',
//     'category_id' : '2'
//   })
// })
// .then( (response) => { 
//    console.log(response);
// });