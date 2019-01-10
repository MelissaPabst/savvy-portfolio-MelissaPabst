import { lowerCase } from 'lodash';
import { html } from 'lit-html';

function buildLink(link){
    var href = '';

    if(link !=='home'){
        href = link;
    }

// declare template literal that is it now html
    return html`
        <li>
            <a href="/${lowerCase(href)}" data-navigo>
                ${link}
            </a>
        </li>   
    `;
}
   
// declare template literal that is it now html
// remove join, lit-html will figure it out for us
export default function Navigation(state){
    return html`
    <div id="navigation">
        <ul class="container">
            ${state[state.active].links.map(buildLink)}
        </ul>
    </div>
    `;
}
