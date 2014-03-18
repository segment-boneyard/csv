
/**
 * Module dependencies.
 */

var Transform = require('stream').Transform;
var stringify = require('./stringify');

/**
 * Expose `Stream`.
 */

module.exports = Stream;

/**
 * Initialize a new CSV stream with
 * options passed to Transform and
 * the CSV stringify() calls.
 *
 * @param {Object} [opts]
 * @api public
 */

function Stream(opts) {
  if (!(this instanceof Stream)) return new Stream(opts);
  opts = opts || {};
  opts.objectMode = true;
  this.opts = opts;
  Transform.call(this, opts);
}

/**
 * Inherit from `Transform.prototype`.
 */

Stream.prototype.__proto__ = Transform.prototype;

/**
 * Transform to CSV.
 *
 * @param {Array} row
 * @param {String} encoding
 * @param {Function} fn
 * @api private
 */

Stream.prototype._transform = function(row, encoding, fn){
  try {
    var csv = stringify([row], this.opts);
  } catch (err) {
    return fn(err);
  }

  fn(null, csv + '\n');
};