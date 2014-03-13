
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
  var delim = opts.delimiter || ',';
  var csv = '';

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];

    for (var j = 0; j < row.length; j++) {
      csv += quote(row[j]);
      if (j < row.length - 1) csv += delim;
    }

    if (i < rows.length - 1) csv += '\n';
  }

  return csv;
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
