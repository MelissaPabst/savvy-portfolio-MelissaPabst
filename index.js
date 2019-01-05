import Footer from './src/Footer';
import Content from './src/Content';
import Header from './src/Header';
import Navigation from './src/Navigation';
import greetUser from './src/Greeting';
import Store from './src/Store';
import Navigo from 'navigo';
import { capitalize } from 'lodash';


var router = new Navigo(window.location.origin);
var root = document.querySelector('#root');

// console.log(router);

var State = {
    'Posts' : [],
    'Active': 'Home',
    'Home': {
        'title': 'Bienvenidos a mi proyecto de Savvy Coders Portfolio',
        'links': [ 'Blog', 'Contact', 'Projects' ]
    },
    'Blog': {
        'title': 'Please Read My Blog',
        'links': [ 'Home', 'Contact', 'Projects' ]
    },
    'Contact': {
        'title': 'How to reach me',
        'links': [ 'Home', 'Blog', 'Projects' ]
    },
    'Projects': {
        'title': 'My stuffs',
        'links': [ 'Home', 'Blog', 'Contact' ]
    }
};

var store = new Store(State);


function handleNavigation(params){
    store.dispatch((state) => {
        state.active = capitalize(params.page); // sets active state to "blog" or whatever page
        return state; // eslint-disable-line
    });
    
}

function render(state){
    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
    `;

    greetUser();

    // links = document.querySelectorAll('#navigation a');

    // for(let i = 0; i < links.length; i++){
    //     links[i].addEventListener(
    //         'click',
    //         handleNavigation
    //     );
    // }

    // replace links
    router.updatePageLinks();
}

// render(State); WHHHHHYYYYYYYYYY
store.addListener(render);

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();

// .resolve is required at the end of router

// add posts to state
fetch('http://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => store.dispatch((state) => {
        state.posts = posts;

        // render(State);
        return state;
    }));



// //logs posts we got from jsonplaceholder to console
// fetch('http://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((posts) => posts.forEach((post) => console.log(post.title)));

// //logs even (by id) posts we got from jsonplaceholder to console
// fetch('http://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((posts) => posts.forEach((post) => {
//         if(post.id % 2 === 0){
//             console.log(post.title);
//         }
//     }));

// // guard pattern or guard clause (replace above if state)
// // !post.id % 2 && console.log(post.title)

