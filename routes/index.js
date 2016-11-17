var express = require('express');
var router = express.Router();

var data = {
    name: "James Kolsby",
    links: [
        {
            title: "Dribbble",
            location: "https://dribbble.com/jrkolsby",
            color: "ea4c89"
        },
        {
            title: "Vimeo",
            location: "https://vimeo.com/jameskolsby",
            color: "1ab7ea"
        },
        {
            title: "Github",
            location: "https://github.com/jrkolsby",
            color: "2d2d2d"
        }
    ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;
