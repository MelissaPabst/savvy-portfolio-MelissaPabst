import { lowerCase } from 'lodash';


function buildLinks(links){
    var list = '';
    // var link = '';
    
    links.forEach((link) => {
        var href = '';

        if(link !== 'Home'){
            href = link;
        }
        list += `
            <li>
                <a href="/${href}" data-navigo>
                    ${link}
                </a>
            </li>
        `;
    });



    


    // for(let i = 0; i < links.length; i++){
    //     if(links[i] !== 'Home'){
    //         link = links[i];
    //     }
    //     list += `
    //         <li>
    //             <a href="/${lowerCase(link)}" data-navigo>
    //                 ${links[i]}
    //             </a>
    //         </li>
    //     `;

    //     // console.log(link); for funsies!
    // }

    // // console.log(list);
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
