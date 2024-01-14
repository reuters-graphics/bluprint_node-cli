import 'dotenv/config';

import { ProjectClass } from './../dist/index.js';
import expect from 'expect.js';
import mock from 'mock-fs';

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
