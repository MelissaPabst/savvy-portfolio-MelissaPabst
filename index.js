import Footer from "./src/Footer";
import Content from "./src/Content";
import Header from "./src/Header";
import Navigation from "./src/Navigation";
import greetUser from "./src/Greeting";

var State = {
    // homework... 'links': ['blog', 'contact', 'project']
    'active': 'Home',
    'Home': {
        'title': 'Bienvenidos a mi proyecto de Savvy Coders Portfolio'
    },
    'Blog': {
        'title': 'Please Read My Blog'
    },
    'Contact': {
        'title': 'How to reach me'
    },
    'Projects': {
        'title': 'My stuffs'
    }
};

var root = document.querySelector('#root');

function handleNavigation(event) {
    event.preventDefault();
    State.active = event.target.textContent;
    render(State); // eslint-disable-line
}

function render(state) {
    var i = 0;      // used in our while loop
    var links;

    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
    `; 

    greetUser();

    links = document.querySelectorAll('#navigation a');

    for(var i = 0; i < links.length; i++){
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
