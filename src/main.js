const resolvePath = (obj, names) => {
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
};

export default {
  getPath(obj, path) {
    let leaf = resolvePath(obj, path);
    return leaf.obj[leaf.name];
  },

  setPath(obj, path, value) {
    let leaf = resolvePath(obj, path);
    leaf.obj[leaf.name] = value;
  }
};