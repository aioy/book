
import { cube } from './test2';
import { post, b } from './create.js'
import '../styles/style.scss';
import 'turn.js'
import $ from 'jquery';

post('bbbbbbbb','aaasdsadg','s','2');

// //read
// fetch('http://menu.com/menu/api/post/read.php')
// .then(res => {
//     if(res.ok){
//         return res.json();
//     } else {
//         throw Error(`Request rejected with status ${res.status}`);
//     }
// })
// .then((data) => {
//     console.log(data);
// })
// .catch(console.error);

// post
// fetch("http://menu.com/menu/api/post/create.php", {
//   method: "POST",
//   headers: new Headers(),
//   body: JSON.stringify({
//     'title' : 'tesdfsdfsd',
//     'body' : 'sample sdfsdfsdfsnew new',
//     'author' : 'new nsdfsdfsdfsdew author',
//     'category_id' : '1'
//   })
// })
// .then( (response) => { 
//    console.log(response);
// });

// //UPDATE
// fetch("http://menu.com/menu/api/post/update.php", {
//   method: "PUT",
//   headers: {
//     'Content-Type': 'application/json'
//   },

//   body: JSON.stringify({
//     'title' : 'blu ewwe blue blue new new new new',
//     'body' : 'red red red red red red red',
//     'author' : 'new new new blue blwer w322323e2',
//     'category_id' : '2',
//     'id' : '1'
//   })
// })
// .then( (response) => { 
//    console.log(response);
// });

//Delete
function jj(id){


    fetch("http://menu.com/menu/api/post/delete.php", {
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        'id' : id
    })
    })
    .then( (response) => { 
    console.log(response);
    });
}
$("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: true
  });
  
  let x = 'e';
  console.log(x);