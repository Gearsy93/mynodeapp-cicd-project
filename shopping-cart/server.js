let express = require('express');
let app = express();  // deploy test

app.get('/', function (req, res) {
    res.json({ 
        shoppingCart: [{
            product: "laptop", 
            number: 1,
            price: 500
        }, {
            product: "monitor",
            number: 2,
            price: 100
        }]
    });
    res.end();
});

app.listen(3102, function () {
  console.log("app listening on port 3102!");
});

