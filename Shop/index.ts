import axios from "axios";
interface Owners {
    itemID: number;
    limit?: number;
    page?: number;
}
interface Item {
    itemID: number;
    itemName?: string;
    
}
class Shop {
  public static async latestItem(type: number) {
    const promise = axios.get(
      `https://api.polytoria.com/v1/asset/catalog?type=${type}`
    );
    const promiseData = promise.then((data) => data.data[0]);
    return promiseData;
  }
  public static async getSales(item: Item) {
    const promise = axios.get(
      `https://api.polytoria.com/v1/asset/sales?id=${item.itemID}`
    );
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
  }
  public static async getOwners(data: Owners)  {
    const promise = axios.get(
      `https://api.polytoria.com/v1/asset/owners?id=${data.itemID}&limit=${data.limit}&page=${data.page}`
    );
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
  }
  public static async fetchItem(id: number) {
    if (!id) throw new Error("Error you didnt add an ID.");
    const promise = axios.get(`https://api.polytoria.com/v1/asset/info?id=` + id);

    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
  }
  public static async fetchCatalog(page: number) {
    // Make a request for a user with a given ID
    const promise = axios.get(
      `https://polytoria.com/api/fetch/catalog/items?page=${page}`
    );
    const dataPromise = promise.then((response) => response.data);

    // return it
    return dataPromise;
  }
};
