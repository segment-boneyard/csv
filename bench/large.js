
var csv = require('..');

var rows = [];
var n = 1000000;

while (n--) {
  rows.push(['foo', 'bar', 'baz']);
}

console.time('stringify');
var str = csv.stringify(rows);
console.timeEnd('stringify');
console.log('rows: 1,000,000');
console.log('size: %smb', str.length / 1024 / 1024 | 0);
