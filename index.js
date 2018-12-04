import Footer from "./src/Footer";
import Content from "./src/Content";
import Header from "./src/Header";
import Navigation from "./src/Navigation";
import greetUser from "./src/Greeting";

var State = {
    'active': 'Home',
    'Home': {
        'title': 'Bienvenidos a mi proyecto de Savvy Coders Portfolio',
        'links': ['Blog', 'Contact', 'Projects']
    },
    'Blog': {
        'title': 'Please Read My Blog',
        'links': ['Home', 'Contact', 'Projects']
    },
    'Contact': {
        'title': 'How to reach me',
        'links': ['Home', 'Blog', 'Projects']
    },
    'Projects': {
        'title': 'My stuffs',
        'links': ['Home', 'Blog', 'Contact']
    }
};

var root = document.querySelector('#root');

function handleNavigation(event) {
    event.preventDefault();
    State.active = event.target.textContent;
    render(State); // eslint-disable-line
}

function render(state) {
    var links;

    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
    `; 

    greetUser();

    links = document.querySelectorAll('#navigation a');

    for(let i = 0; i < links.length; i++){
        links[i].addEventListener(
            'click', 
            handleNavigation
        );

    }

    // links[0].addEventListener(
    //     'click',
    //     handleNavigation
    // );
    // links[1].addEventListener(
    //     'click',
    //     handleNavigation
    // );
    // links[2].addEventListener(
    //     'click',
    //     handleNavigation
    // );
}

render(State);  
