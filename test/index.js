require('dotenv').config();
const ReutersGraphicsx2fprojectSlug = require('../dist');
const expect = require('expect.js');

const reutersGraphicsx2fprojectSlug = new ReutersGraphicsx2fprojectSlug();

describe('test ReutersGraphicsx2fprojectSlug', function() {
  this.timeout(10000);

  it('Should return regions', function() {
    expect(reutersGraphicsx2fprojectSlug.run()).to.be('hello world');
  });
});
