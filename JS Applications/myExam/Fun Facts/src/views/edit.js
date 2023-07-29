import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById, updateFact } from "../data/facts.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (fact, onEdit) => html`
<section id="edit">
    <div class="form">
         <h2>Edit Fact</h2>
        <form class="edit-form" @submit=${onEdit}>
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Category" 
              value=${fact.category}
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL" 
              value=${fact.imageUrl}
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
          >${fact.description}</textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="10"
            cols="50"
          >${fact.moreInfo}</textarea>
              <button type="submit">Post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const fact = await getById(id);

    ctx.render(editTemplate(fact, createSubmitHandler(onEdit)));

    async function onEdit({
        category,
        imageUrl,
        description,
        moreInfo
    }) {

        if ([category,
            imageUrl,
            description,
            moreInfo].some(x => x == '')) {
            return alert('All fields are required');
        }

        await updateFact(id, { category, imageUrl, description, moreInfo });

        ctx.page.redirect(`/catalog/${id}`);
    }
}