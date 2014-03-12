
var csv = require('..');

describe('csv.stringify(array)', function(){
  it('should delimit with a comma by default', function(){
    var str = csv.stringify([
      ['foo', 'bar', 'baz'],
      ['one', 'two', 'three']
    ]);

    str.should.equal('"foo","bar","baz"\n"one","two","three"');
  })

  it('should escape quotes', function(){
    var str = csv.stringify([['"hey"']]);
    str.should.equal('"""hey"""');
  })

  it('should coerce values to strings', function(){
    var str = csv.stringify([[1, /test/]]);
    str.should.equal('"1","/test/"');
  })
})