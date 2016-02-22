var OAuth = require('@mecs/oauth').OAuth,
  qs = require('querystring');

var OXYGEN = '';
var KEY = '';
var SECRET = '';

var email = 'leopardtest@autodesk.com'

var oauth = new OAuth(
  null,
  null,
  KEY,
  SECRET,
  '1.0',
  null,
  'HMAC-SHA1'
);

oauth.post(
  OXYGEN + '/api/verifyemail/v1/user?' + qs.stringify({
    format: 'json'
  }),
  null,
  null,
  qs.stringify({
    emailId: email
  }),
  'application/x-www-form-urlencoded',
  function (err, data, response) {
    console.log(data);
  }
);
