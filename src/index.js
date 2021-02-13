class ProjectClass {
  greet(name, happy = false) {
    return `Hello, ${name}${happy ? '!' : '.'}`;
  }
}

export default ProjectClass;
