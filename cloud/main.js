var data = [
    {comment: 'Have you seen my weasel?', email: 'jane@blogs.com', name: 'Jane Blogs'},
    {comment: 'I bent my wookee', email: 'ralph@wiggum.com', name: 'Ralph Wiggum'},
    {comment: 'The new Celine Dion Album is rocking', email: 'noone@ever.com', name: 'Noone, Ever'}
];

exports.submitCommentForm = function(params, callback) {
  return callback(null, params);
};

exports.getCommentData = function(params, callback) {
    return callback(null, data);
};