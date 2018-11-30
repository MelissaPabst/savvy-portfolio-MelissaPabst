import Footer from "./src/Footer";
import Content from "./src/Content";
import Header from "./src/Header";
import Navigation from "./src/Navigation";
import greetUser from "./src/Greeting";


var links;
// pass state through as a part of invoking Header as a function
var state = {
    'home': {
        'title': 'Bienvenidos a mi proyecto de Savvy Coders Portfolio'
    },
    'blog': {
        'title': 'Please Read My Blog'
    },
    'contact': {
        'title': 'How to reach me'
    }    
};


// override the html with the footer
// this line only produces the footer
// document.body.innerHTML = footer;
// this line adds the footer to the whole body
// document.body.innerHTML += footer;
// or use template literal

// document.body.innterHTML 
document.querySelector('#root').innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
`;

// invokes our greetUser from Greeting
greetUser();


links = document.querySelectorAll('#navigation a')
// Refactor the below function
// put var links above
function handleNavigation(event){
    event.preventDefault();
    console.log(event.target.textContent);
}
// var links = document.querySelectorAll('#navigation a')

links[0].addEventListener(
    'click',
    handleNavigation
);
links[1].addEventListener(
    'click',
    handleNavigation
);
links[2].addEventListener(
    'click',
    handleNavigation
);

// NOOP function example
// document
//     .querySelector('h1')
//     .addEventListener(
//         'click', 
//         () => {} 
//     )

// //log textContent of title on click 
// // returns the h1 tag and its contents
// document
//     .querySelector('h1')
//     .addEventListener(
//         'click', 
//         (event) => console.log(event.target) 
//     );
// // returns the text only
// document
//     .querySelector('h1')
//     .addEventListener(
//         'click', 
//         (event) => console.log(event.target.textContent) 
// );

// // Try it for an anchor tag. Should log "blog". Above functions for h1 stop working. 
// // Remember to preserve the log in your console so you see the log before the new page loads. 
// document
//         .querySelector('a')
//         .addEventListener(
//             'click',
//             (event) => console.log(event.target.textContent)
// );

// // this logs the text content of the first anchor tag
// // need to evoke a function on event
// // allows you to log content of anchor tag to screen when clicked but doens't actuall fire
// document
//     .querySelector('a')
//     .addEventListener(
//         'click',
//         (event) => {
//             event.preventDefault();
//             console.log(event.target.textContent);

//         }
// );
// // querySelector('a') is too generic. Let's capture all the anchor tags in our navigation div
// document
//     .querySelector('#navigation a')
//     .addEventListener(
//         'click',
//         (event) => {
//             event.preventDefault();
//             console.log(event.target.textContent);

//         }
// );
// // results in type error, can't attach eventListener to multiple things
// document
//     .querySelectorAll('#navigation a')
//     .addEventListener(
//         'click',
//         (event) => {
//             event.preventDefault();
//             console.log(event.target.textContent);

//         }
// );

// document
//     .querySelectorAll('#navigation a')
//     .addEventListener(
//         'click',
//         (event) => {
//             event.preventDefault();
//             console.log(event.target.textContent);

//         }
// );

// 
