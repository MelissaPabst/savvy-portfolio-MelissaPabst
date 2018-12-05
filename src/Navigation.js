function buildLinks(links){
    var list = '';
    
    for(let i = 0; i < links.length; i++){
        // console.log(links[i]); for funsies!
        list += `
            <li>
                <a href="#">${links[i]}</a>
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
