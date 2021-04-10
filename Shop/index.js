const axios = require("axios");
module.exports = class Shop {
  static async fetchItem(id) {
    const promise = axios.get(`https://api.polytoria.com/asset/info?id=` + id);

    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
  }
  static async fetchCatalog(page) {
    // Make a request for a user with a given ID
    const promise = axios.get(
      "https://polytoria.com/api/fetch/catalog/items?page=" + page
    );
    const dataPromise = promise.then((response) => response.data);

    // return it
    return dataPromise;
  }
};
