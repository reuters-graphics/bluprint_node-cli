export class ProjectClass {
  greet(name: string, happy = false) {
    return `Hello, ${name}${happy ? '!' : '.'}`;
  }
}
