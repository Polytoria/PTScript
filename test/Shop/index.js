let poly = require('@polytoria/shop');
const page = poly.fetchItem(8118);
page.then((result)=>{
    console.log(result);
})