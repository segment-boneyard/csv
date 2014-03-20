
var csv = require('..');

describe('csv.parse(string)', function(){
  it('should delimit with a comma by default', function(){
    var arr = csv.parse('"foo","bar","baz"\n"one","two","three"');
    arr.should.eql([
      ['foo', 'bar', 'baz'],
      ['one', 'two', 'three']
    ]);
  })

  it('should unquote quotes', function(){
    var arr = csv.parse('"hey","""hey""","""""hey"""""');
    arr.should.eql([['hey', '"hey"', '""hey""']]);
  })
})

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

  describe('.null option', function(){
    it('should set the null string', function(){
      var str = csv.stringify([[null, undefined, 0]], { null: 'NULL' });
      str.should.eql('NULL,NULL,"0"');
    })
  })
})