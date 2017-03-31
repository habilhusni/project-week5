'use strict'
var jwt = require('jsonwebtoken');

let authToken = function(req, res, next) {

	jwt.verify(req.headers.token, 'secret', function(err, decoded) {
		console.log(decoded)
		if(decoded) {
			next()
		}else {
			res.send(err);
		}
	})

}

module.exports = {
  authToken
}