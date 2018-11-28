import Footer from "./src/Footer";
import Content from "./src/Content";
import Header from "./src/Header";
import Navigation from "./src/Navigation";
import greetUser from "./src/Greeting";


// override the html with the footer
// this line only produces the footer
// document.body.innerHTML = footer;
// this line adds the footer to the whole body
// document.body.innerHTML += footer;
// or use template literal

// document.body.innterHTML 
document.querySelector('#root').innerHTML = `
    ${Navigation()}
    ${Header()}
    ${Content()}
    ${Footer()}
`;

greetUser();