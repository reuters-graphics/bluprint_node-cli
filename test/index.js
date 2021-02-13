require('dotenv').config();
const ProjectClass = require('../dist');
const expect = require('expect.js');

const projectInstance = new ProjectClass();

describe('test ProjectClass', function() {
  this.timeout(10000);

  it('Should greet', function() {
    expect(projectInstance.greet('Sue', true)).to.be('Hello, Sue!');
  });
});
