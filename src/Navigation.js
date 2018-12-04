export default function Navigation(state){
    var links = state[state.active].links;  // links is an array of strings!
    var list = ''


    // Homework: single responsibility principle. 
    for(let i = 0; i < links.length; i++){
        // console.log(links[i]); for funsies!
        list += `
            <li>
                <a href="#">${links[i]}</a>
            </li>
        `;

        // console.log(link); for funsies!
    }

    // console.log(list)

    return `
        <div id="navigation">
            <ul class="container">
                ${list}
            </ul>
        </div>
    `;
}