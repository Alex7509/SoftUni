import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById, updateEvent } from "../data/event.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (event, onEdit) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Event</h2>
            <form class="edit-form" @submit=${onEdit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
                value=${event.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image" 
                value=${event.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
                value=${event.category}
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${event.description}</textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
              value=${event.date}
            />

              <button type="submit">Edit</button>
            </form>
          </div>
        </section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const event = await getById(id);

    ctx.render(editTemplate(event, createSubmitHandler(onEdit)));

    async function onEdit({
        name,
        imageUrl,
        category,
        description,
        date
    }) {

        if ([
            name,
            imageUrl,
            category,
            description,
            date
        ].some(x => x == '')) {
            return alert('All fields are required');
        }

        await updateEvent(id, { name, imageUrl, category, description, date });

        ctx.page.redirect(`/catalog/${id}`);
    }
}