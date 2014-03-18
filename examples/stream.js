
var csv = require('..');

var stream = csv.stream();

stream.pipe(process.stdout);

setInterval(function(){
  stream.write(['foo', 'bar', 'baz']);
}, 100);