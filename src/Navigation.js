import { lowerCase } from 'lodash';


function buildLinks(links){
    var list = '';
    var link = '';
    
    for(let i = 0; i < links.length; i++){
        if(links[i] !== 'Home'){
            link = links[i];
        }
        list += `
            <li>
                <a href="/${lowerCase(link)}" data-navigo>
                    ${links[i]}
                </a>
            </li>
        `;

        // console.log(link); for funsies!
    }

    // console.log(list);
    return list;

}  
    
export default function Navigation(state){
    return `
    <div id="navigation">
        <ul class="container">
            ${buildLinks(state[state.active].links)}
        </ul>
    </div>
    `;
}
