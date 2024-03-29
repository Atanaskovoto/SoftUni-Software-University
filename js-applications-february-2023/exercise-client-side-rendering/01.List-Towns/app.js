import { html, render } from "../../../node_modules/lit-html/lit-html.js";

const form = document.querySelector('form');
const root = document.getElementById('root');
form.addEventListener('submit', addTowns);

const townsTemplate = (data) => html`
    <ul>
        ${data.map(el => html`<li>${el}</li>`)}
    </ul>
     `;

function addTowns(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const towns = formData.get('towns').split(', ');
    form.reset();
    
    render(townsTemplate(towns), root);
}