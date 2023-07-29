import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllEvents } from "../data/event.js";


const catalogTemplate = (event) => html`
<h2>Current Events</h2>
        <section id="dashboard">
     ${event.length > 0 ? event.map(eventCard) : html`<h4>No Events yet.</h4>`}  
      </section>`;

const eventCard = ({ name, imageUrl, date, _id }) => html`
<div class="event">
            <img src="${imageUrl}" alt="example1" />
            <p class="title">
              ${name}
            </p>
            <p class="date">${date}</p>
            <a class="details-btn" href="/catalog/${_id}">Details</a>
</div>`

export async function catalogPage(ctx) {
    const event = await getAllEvents();
    ctx.render(catalogTemplate(event));

}