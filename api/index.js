import axios from 'axios';

function getProducts(url , query) {
    let activeQuery = url;
    activeQuery = query !== undefined && query !== null 
    ? activeQuery +'/'+ query : activeQuery;
    return axios.get(activeQuery);
}

function getQuery(url, queryParams) {
    const target = {
        params : queryParams
    };
    return axios.get(url, target);
}

export default { getProducts, getQuery }