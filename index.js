import Footer from './src/Footer';
import Content from './src/Content';
import Header from './src/Header';
import Navigation from './src/Navigation';
// import greetUser from './src/Greeting';
import Store from './src/Store';
import Navigo from 'navigo';
import { capitalize } from 'lodash';
import { html, render } from 'lit-html';


var router = new Navigo(window.location.origin);
var root = document.querySelector('#root');

// Global state object
// 'Posts' pulled down from AJAX, axios
// 'Active' property of state: string that represents what page we're on
// 'Home, Blog, Contact, Projects': pages that could be active
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

// build store from store.js, pass in State
var store = new Store(State);

function handleNavigation(params){
    // anon function takes in state and returns result of state.active assigned to params.page
    store.dispatch((state) => {
        state.active = capitalize(params.page); // sets active state to "blog" or whatever page
        
        return state; // eslint-disable-line
    });   

    // render(store.state)
}

// component that contains the majority of our markup
function App(state) {
    return html`
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
    `;
}

// renders our app with that state
function start(state) {
    render(App(state), root);
}



// renders the way our app looks depending on state
// as written the page is rewritten with every render
// needs to be faster, and we're doing too much
// there's no way to persist event listeners between renders
// innerHTML doesn't work in some browsers (compatibility issue)
// function render(state){
//     root.innerHTML = `
        // ${Navigation(state)}
        // ${Header(state)}
        // ${Content(state)}
        // ${Footer(state)}
//     `;

//     greetUser();

//     router.updatePageLinks();
// }

// store.addListener(render);
store.addListener(start);
store.addListener(() => router.updatePageLinks());


router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();

// .resolve is required at the end of router

router.updatePageLinks();

// add posts to state
fetch('http://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        store.dispatch((state) => {
            state.posts = posts;

            return state;
    })
    
});
