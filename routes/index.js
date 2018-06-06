var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var scp = require('scp');

var options = {
  file: '~/AirInDevice/images/img.jpg',
  user: 'pi',
  host: '192.168.25.12',
  port: '22',
  path: '~/Documents/AirInCar/public/images/'
}

function get_image(){
  scp.get(options, function (err) {
    if (err) console.log(err);
    else console.log('File transferred.');
  });
}

setInterval(get_image,3000);

module.exports = router;
