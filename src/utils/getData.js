
// Docs: https://docs.thecatapi.com/api-reference/images/images-search

const BASE_URL = `https://api.thecatapi.com/v1/images/search`

export const getCatList = async () => await fetch(BASE_URL, {method: "GET"})