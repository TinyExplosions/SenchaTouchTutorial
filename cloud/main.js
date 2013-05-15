var request = require('request');

var data = [
    {comment: 'Have you seen my weasel?', email: 'jane@blogs.com', name: 'Jane Blogs'},
    {comment: 'I bent my wookee', email: 'ralph@wiggum.com', name: 'Ralph Wiggum'},
    {comment: 'The new Celine Dion Album is rocking', email: 'noone@ever.com', name: 'Noone, Ever'}
];

exports.submitCommentForm = function(params, callback) {
  console.log(params.comment);
  if (!params.comment) {
    return callback("An Error Has Occurred. Please Try Again Later");
  }
  data.push(params.comment);
  return callback(null, data);
};

exports.getCommentData = function(params, callback) {
    return callback(null, data);
};

exports.getPortfolio = function(params, callback) {
    request({uri: 'http://em.emaginemedia.org/?ACT=71&key=jWPy6HXD8eMDLbgKEg4r64JFqLtTy6i8&method=get_channel_entries&channel_id=1&format=json', method: 'GET'},
    function (err, response, body) {
        // just apply the results object to the data we send back.
        var search = JSON.parse(body);
        callback(null, body);
    });
};