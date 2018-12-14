import * as Screens from './Screens';
import { capitalize } from 'lodash';


export default function Content(state){
    return `
        <div id="content">
            <div class="container">
                ${Screens[capitalize(state.active)](state)}
            </div>
        </div>
    `;
}

// returns a string instead of just being a string, Content is now a function in index.js