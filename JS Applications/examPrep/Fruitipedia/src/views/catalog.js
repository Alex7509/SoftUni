import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFruits } from "../data/fruits.js";

const catalogtemplate = (fruits) => html`
<h2>Fruits</h2>
        <section id="dashboard">
    ${fruits.length > 0 ? fruits.map(fruitCard) : html`<h2>No fruit info yet.</h2>`}
    </section>`

    const fruitCard = ({imageUrl, name, description, _id}) => html`
    <div class="fruit">
            <img src="${imageUrl}" />
            <h3 class="title">${name}</h3>
            <p class="description">${description}</p>
            <a class="details-btn" href="/catalog/${_id}">More Info</a>
          </div>`;

export async function catalogPage(ctx) {
    const fruits = await getAllFruits();
    ctx.render(catalogtemplate(fruits))
}