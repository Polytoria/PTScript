let Shop = require("../Shop/index");
console.log();
const catalog = Shop.fetchCatalog(1);

catalog.then((Stinky)=>{  Stinky.forEach(asset => {
        console.log('Asset name: '+asset.AssetName);
    });
})