import Footer from './src/Footer';
import Content from './src/Content';
import Header from './src/Header';
import Navigation from './src/Navigation';
import greetUser from './src/Greeting';
import Navigo from 'navigo';
import { capitalize } from 'lodash';

var router = new Navigo(window.location.origin);
// console.log(router);

var State = {
    'active': 'Home',
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

var root = document.querySelector('#root');

function handleNavigation(params){
    State.active = capitalize(params.page); // sets active state to "blog" or whatever page
    // console.log(params.page); // returns "blog" or whatever page
    // we removed event and replaced it with params
    // event.preventDefault();
    // State.active = event.target.textContent;
    render(State); // eslint-disable-line
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

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();

// .resolve is required at the end of router