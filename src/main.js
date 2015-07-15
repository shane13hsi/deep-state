export default {
  setPath(obj, path, value) {
    var leaf = this.resolvePath(obj, path);
    leaf.obj[leaf.name] = value;
  },

  resolvePath(obj, names) {
    if (typeof names === 'string') {
      names = names.split('.');
    }
    var lastIndex = names.length - 1;
    var current = obj;
    for (var i = 0; i < lastIndex; i++) {
      var name = names[i];
      current = current[name];
    }
    return {
      obj: current,
      name: names[lastIndex]
    };
  }
};