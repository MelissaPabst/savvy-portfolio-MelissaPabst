import { html } from 'lit-html';

export default function Header(state){
    return html `
        <div id="header">
            <div class="container">
                <!--access the title property of state with dot notation-->
                <h1>${state[state.active].title}</h1>
                <h2>Mi nombre es Melissa Pabst</h2>
                <img src="https://avatars2.githubusercontent.com/u/29720087?s=400&u=462b05241a936aa8c97bdaec504b6a937c576805&v=4"
                    alt="My face!">
            </div>
        </div>
    `;
}