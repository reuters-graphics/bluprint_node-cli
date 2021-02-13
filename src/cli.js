import ProjectClass from '@reuters-graphics/project-slug';
import pkg from '../package.json';
import sade from 'sade';

const prog = sade('project-slug');

prog
  .version(pkg.version);

prog
  .command('greet <name>')
  .option('-h, --happy', 'Happy to see them?')
  .action((name, opts) => {
    const projectInstance = new ProjectClass();
    projectInstance.greet(name, opts.happy);
  });

prog.parse(process.argv);
