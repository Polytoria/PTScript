let poly = require('@polytoria/shop');

const page = poly.latestItem("hat");

page.then((result) => {

    console.log(result);

})
