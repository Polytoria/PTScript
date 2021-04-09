import fetch from "node-fetch";
/**
 * https://polytoria.com/api/fetch/catalog/items?page=[page]&type=[type]&sort=[sortType]&q=[searchQuery]
 */

class Shop {
  id: number;

  constructor(id) {
    this.id = id;
  }
  private static die(err) {
    console.log("There was an error on the Polytoria API!");
    console.log();
    console.log("--- ERROR ---");
    console.log(err);
    process.exit(1);
  }
  public itemInfo() {
    console.log(this.id);
  }
  public static otherItem(id: number) {
    console.log(id);
  }
  public static async fetchItems(
    page: number = 1,
    type: string = "hat",
    sort: number = 0,
    query: string = ""
  ) {
    try {
      // &type=[type]&sort=[sortType]&q=[searchQuery]
      const apiResponse = await fetch(
        `https://polytoria.com/api/fetch/catalog/items?page=${page}&type=${type}&sort=${sort}&q=${query}`
      );
      return apiResponse.json();
    } catch (error) {
      this.die(error);
    }
  }
}

let PolyShop = new Shop(3);
Shop.fetchItems();
