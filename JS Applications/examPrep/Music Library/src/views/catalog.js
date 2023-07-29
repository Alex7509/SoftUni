import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllAlbums } from "../data/albums.js";

const catalogTemplate = (albums) => html`
<section id="dashboard">
        <h2>Albums</h2>
    ${albums.length  > 0 ? html`
    <ul class="card-wrapper">
       ${albums.map(albumCard)}
    </ul>` : html`
    <h2> There are no albums added yet.</h2 >`}
</section>`;

const albumCard = ({ imageUrl, singer, album, sales, _id }) => html`
  <li class="card">
        <img src="${imageUrl}" alt="travis" />
        <p>
            <strong>Singer/Band: </strong><span class="singer">${singer}</span>
        </p>
        <p>
            <strong>Album name: </strong><span class="album">${album}</span>
        </p>
        <p><strong>Sales:</strong><span class="sales">${sales}</span></p>
        <a class="details-btn" href="/catalog/${_id}">Details</a>
  </li>`;

export async function catalogPage(ctx) {
    const albums = await getAllAlbums();
    ctx.render(catalogTemplate(albums));
}