import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteFact, getById } from "../data/facts.js";
import { getUserData } from "../util.js";

const detailsTemplate = (fact, onDelete) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${fact.imageUrl}" alt="example1" />
            <p id="details-category">${fact.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">
                  ${fact.description}
                  </p>
                   <p id ="more-info">
                    ${fact.moreInfo}
                    </p>
             </div>

            <h3>Likes:<span id="likes">0</span></h3>

          ${fact.canEdit ? html`<div id="action-buttons">
          <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`: null}
        </div>
    </div>
    </div>
</section>`;

export async function  detailsPage (ctx) {
    const id = ctx.params.id;
    const fact = await getById(id);

    const userData = getUserData();

    if(userData && userData._id === fact._ownerId){
        fact.canEdit = true;
    }

    ctx.render(detailsTemplate(fact, onDelete))

    async function onDelete(){
         const choice = confirm('Are you sure');

         if(choice){
            await deleteFact(id);
            ctx.page.redirect('/catalog');
         }
    }
}