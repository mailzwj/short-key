
/*
 * GET users listing.
 */
 
var crypto = require("crypto");
exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.gravatar = function(req, res){
    var email = req.query.email || "seejs@seejs.com";
    var size = req.query.s || 80;
    email = email.trim();
    var md5 = crypto.createHash("md5");
    md5.update(email);
    email = md5.digest("hex");
    var api = "http://www.gravatar.com/avatar/";
    var icon = api + email + "?s=" + size;
    res.send("<img src='" + icon + "' alt='www.gravatar.com'>");
}