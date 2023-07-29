import { get, post, put, del } from "./api.js";

const endpoints = {
    catalog: '/data/albums?sortBy=_createdOn%20desc',
    byId: '/data/albums/'
};

export async function getAllAlbums() {
    return get(endpoints.catalog);
}

export async function getById(id) {
    return get(`${endpoints.byId}${id}`);
}

export async function createAlbum(data) {
    return post(endpoints.catalog, data);
}

export async function updateAlbum(id, data){
    return put(`${endpoints.byId}${id}`, data);
}

export async function deleteAlbum(id){
    return del(`${endpoints.byId}${id}`);
}


