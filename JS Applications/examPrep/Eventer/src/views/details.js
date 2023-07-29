import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteEvent, getById } from "../data/event.js";
import { getUserData } from "../util.js";

const detailsTemplate = (event, onDelete) => html`
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src="${event.imageUrl}" alt="example1" />
  <p id="details-title">${event.name}</p>
  <p id="details-category">
    Category: <span id="categories">${event.category}</span>
  </p>
  <p id="details-date">
    Date:<span id="date">${event.date}</span></p>
  <div id="info-wrapper">
    <div id="details-description">
      <span>${event.description}</span>
    </div>
  </div>

  <h3>Going: <span id="go">0</span> times.</h3>

  ${event.canEdit ? html`<div id="action-buttons">
  <a href="/edit/${event._id}" id="edit-btn">Edit</a>
  <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}
  </div>
 </div>
</section>`

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const event = await getById(id);

    const userData = getUserData();
    if (userData && userData._id === event._ownerId) {
        event.canEdit = true;
    }

    ctx.render(detailsTemplate(event, onDelete))

    async function onDelete() {
        const choice = confirm('Are you sure');

        if (choice) {
            await deleteEvent(id);
            ctx.page.redirect('/catalog');
        }
    }
}