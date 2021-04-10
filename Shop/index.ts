import axios from "axios";
module.exports = class Shop {
  public static async latestItem(type: number) {
    const promise = axios.get(
      `https://api.polytoria.com/asset/catalog?type=${type}`
    );
    const promiseData = promise.then((data) => data.data[0]);
    return promiseData;
  }
  public static async getSales(itemID: number) {
    const promise = axios.get(
      `https://api.polytoria.com/asset/sales?id=${itemID}`
    );
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
  }
  public static async getOwners(
    itemID: number,
    limit: number = 20,
    page: number = 1
  ) {
    const promise = axios.get(
      `https://api.polytoria.com/asset/owners?id=${itemID}&limit=${limit}&page=${page}`
    );
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
  }
  public static async fetchItem(id: number) {
    if (!id) throw new Error("Error you didnt add an ID.");
    const promise = axios.get(`https://api.polytoria.com/asset/info?id=` + id);

    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
  }
  public static async fetchCatalog(page) {
    // Make a request for a user with a given ID
    const promise = axios.get(
      "https://polytoria.com/api/fetch/catalog/items?page=" + page
    );
    const dataPromise = promise.then((response) => response.data);

    // return it
    return dataPromise;
  }
};
