
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
  val = val.replace(/"/g, '""');
  return '"' + val + '"';
}