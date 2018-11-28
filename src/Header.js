export default function Header(state) {
    return `
        <div id="header">
            <div class="container">
                // access the title property of state with dot notation
                <h1>${state.title}</h1>
                <h2>Me llamo es Melissa Pabst</h2>
                <img src="https://avatars2.githubusercontent.com/u/29720087?s=400&u=462b05241a936aa8c97bdaec504b6a937c576805&v=4"
                    alt="My face!">
            </div>
        </div>
    `;
}