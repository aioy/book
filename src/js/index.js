import { post } from './create.js';
import { remove } from './delete.js'; 
import { update } from './update.js';
import { read } from './read.js';
import '../styles/style.scss';
import 'turn.js';
import $ from 'jquery';

read();
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



$("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: true
  });
  
