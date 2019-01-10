import { html } from 'lit-html';

export default function Footer(){
    return html `
        <div id="footer">
            <div class="container">
                <h3>Find Me!</h3>
                <ul>
                    <li><a href="https://github.com/MelissaPabst"><i class="fab fa-github"></i> melissapabst</a></li>
                    <li><a href="https://www.linkedin.com/in/melissapabst/"><i class="fab fa-linkedin"></i> MelissaPabst</a></li>
                </ul>
            </div>
        </div>
        `;
}