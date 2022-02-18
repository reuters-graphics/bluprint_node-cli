require('dotenv').config();
const ProjectClass = require('../dist');
const expect = require('expect.js');
const mock = require('mock-fs');

const projectInstance = new ProjectClass();

describe('test ProjectClass', function() {
  this.timeout(10000);

  before(function() {
    mock({});
  });
  
  after(function() {
    mock.restore();
  });

  it('Should greet', function() {
    expect(projectInstance.greet('Sue', true)).to.be('Hello, Sue!');
  });
});
