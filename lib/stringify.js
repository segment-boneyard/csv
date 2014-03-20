
/**
 * Stringify `rows`.
 *
 * @param {Array} rows
 * @param {Object} [opts]
 * @return {String}
 * @api public
 */

module.exports = function(rows, opts){
  opts = opts || {};
  var delim = opts.delimiter || ',';
  var nul = opts.null;
  var csv = '';

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];

    for (var j = 0; j < row.length; j++) {
      var val = row[j];

      if (null == val && nul) csv += nul
      else csv += quote(val);

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

