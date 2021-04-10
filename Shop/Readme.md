Require the shop wrapper.

```js
const shop = require("polytoria/shop");
```

Fetch catalog pages:

```js
const AllItems = shop.fetchCatalog(1); // First page.
```

We use promises to handle data.

```js
Allitems.then((data) => {
  console.log(data);
});
```

This will return an array like this:

```json
[
  {
    "AssetID": 8124,
    "AssetName": "Bamboo Spear",
    "AssetType": "hat",
    "Price": 120,
    "Currency": "Studs",
    "Limited": false,
    "CreatorID": 0,
    "Version": 1,
    "CreatorURL": "/user/1",
    "CreatorName": "Polytoria",
    "BestPrice": 0
  },
  {
    "AssetID": 8118,
    "AssetName": "Blue Gem Chains",
    "AssetType": "hat",
    "Price": 35,
    "Currency": "Studs",
    "Limited": true,
    "CreatorID": 1,
    "Version": 1,
    "CreatorURL": "/user/1",
    "CreatorName": "Polytoria",
    "BestPrice": 150
  }
]
```

But much more bigger. Just handle the data like this:

```js
Allitems.then((data) => {
  data.forEach((asset) => {
    console.log("Asset name:" + asset.name);
  });
});
```

This will display all the item names on page 1.

#### API Wrapper docs.

We have different functions on the api wrapper.

```js
fetchItem((itemID: number));
```

Returns JSON with item information.

```js
getSales((ItemID: number));
```

Returns JSON of the item sales, including time, purchaser and some other good information.

```ts
getOwners(itemID : number, limit : number, page : number );
```

Fetches all owners of an item and returns JSON.

By default **getOwners** has the limit set to 20, and page 1.

### Promises.

All the functions are promised based, thus:

```js
const shop = require("...");
console.log(shop.getOwners(9123)); // WONT WORK!

/**
 * This will work!
 */
const Owners = shop.getOwners(9123);
Owners.then((ownerData) => {
  console.log(ownerData); // Returns the JSON!
});
```
