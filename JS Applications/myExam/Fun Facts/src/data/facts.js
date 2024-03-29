import { get, post, put, del } from "./api.js";

const endpoints ={
    catalog:'/data/facts?sortBy=_createdOn%20desc',
    byId: '/data/facts/'
}

export async function getAllFacts() {
    return get(endpoints.catalog);
}

export async function getById(id) {
    return get(`${endpoints.byId}${id}`);
}

export async function createFact(data) {
    return post(endpoints.catalog, data);
}

export async function updateFact(id, data) {
    return put(`${endpoints.byId}${id}`, data);
}

export async function deleteFact(id) {
    return del(`${endpoints.byId}${id}`);
}