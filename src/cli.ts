import { name, version } from '../package.json';

import { ProjectClass } from '@reuters-graphics/project-slug';
import sade from 'sade';
import updateNotifier from 'update-notifier';

updateNotifier({ pkg: { name, version } }).notify();

const prog = sade('project-slug');

prog.version(version);

prog
  .command('greet <name>')
  .option('-h, --happy', 'Happy to see them?')
  .action((name, opts) => {
    const projectInstance = new ProjectClass();
    projectInstance.greet(name, opts.happy);
  });

prog.parse(process.argv);
