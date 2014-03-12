
/**
 * Parse `string`.
 *
 * @param {String} string
 * @param {Object} [opts]
 * @return {Array}
 * @api public
 */

exports.parse = function(string, opts){
  opts = opts || {};
  var d = opts.delimiter || ',';

  return string.split('\n').map(function(row){
    return row.split(d).map(unquote);
  });
};

/**
 * Stringify `rows`.
 *
 * @param {Array} rows
 * @param {Object} [opts]
 * @return {String}
 * @api public
 */

exports.stringify = function(rows, opts){
  opts = opts || {};
  var d = opts.delimiter || ',';

  return rows.map(function(row){
    return row.map(quote).join(d);
  }).join('\n');
};

/**
 * Quote and escape `val`.
 *
 * @param {String} val
 * @return {String}
 * @api private
 */

function quote(val) {
  val = String(val).replace(/"/g, '""');
  return '"' + val + '"';
}

/**
 * Unquote `val`.
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