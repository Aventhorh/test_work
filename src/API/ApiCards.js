import axios from "axios";

export default class ApiCards {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://api.punkapi.com/v2/beers', {
            params: {
                per_page: limit,
                page: page
            }
        })
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://api.punkapi.com/v2/beers/' + id)
        return response;
    }
}

