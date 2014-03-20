
# csv

  Uber simple CSV formatting for node.

## Installation

```
$ npm install segmentio/csv
```

## Example

```js
var csv = require('csv');

csv.stringify([
  ['foo', 'bar', 'baz'],
  ['one', 'two', 'three']
]);
```

## API

### csv.parse(string, [options])

  Parse a string of CSV.

### csv.stringify(rows, [options])

  Stringify an array of rows.

### csv.stringify.row(row, [options])

  Stringify a single row of columns.

### csv.stream([options])

  Create a CSV stream.

# License

  MIT