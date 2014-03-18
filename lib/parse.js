
/**
 * Parse `string`.
 *
 * @param {String} string
 * @param {Object} [opts]
 * @return {Array}
 * @api public
 */

module.exports = function(string, opts){
  opts = opts || {};
  var d = opts.delimiter || ',';

  return string.split('\n').map(function(row){
    return row.split(d).map(unquote);
  });
};

/**
 * Unescape and unquote `val`.
 *
 * @param {String} val
 * @return {String}
 * @api private
 */

function unquote(val) {
  return val
    .replace(/"{2}/g, '"')
    .replace(/^"/, '')
    .replace(/"$/, '');
}
