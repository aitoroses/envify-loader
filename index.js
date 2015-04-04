var envify = require('envify');

module.exports = function (source, inputSourceMap) {
  var done = this.async();
  var stream = envify();
  var result = '';

  this.cacheable();

  stream.on('data', function (chunk) {
    result += chunk;
  })
  .on('end', function () {
    done(null, result, inputSourceMap)
  })

  stream.write(source)
  stream.end();
};
