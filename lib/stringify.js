
/**
 * Stringify `rows`.
 *
 * @param {Array} rows
 * @param {Object} [opts]
 * @return {String}
 * @api public
 */

exports = module.exports = function(rows, opts){
  var csv = '';

  for (var i = 0; i < rows.length; i++) {
    csv += exports.row(rows[i], opts);
    if (i < rows.length - 1) csv += '\n';
  }

  return csv;
};

/**
 * Stringify `row`.
 *
 * @param {Array} row
 * @return {String}
 * @api public
 */

exports.row = function(row, opts){
  var csv = '';

  opts = opts || {};
  var delim = opts.delimiter || ',';

  for (var i = 0; i < row.length; i++) {
    var val = row[i];

    if (null == val && opts.null) csv += opts.null
    else csv += quote(val);

    if (i < row.length - 1) csv += delim;
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

