import axios from 'axios';

function getProducts(url , query) {
    let activeQuery = url;
    activeQuery = query !== undefined && query !== null 
    ? activeQuery +'/'+ query : activeQuery;
    return axios.get(activeQuery);
}

export default { getProducts }