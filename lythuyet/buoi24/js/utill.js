var f8 = {
  createElement: function (name, attributes = {}, children = {}, ...children) {
    var element = document.createElement(name);
    Object.keys(attributes).forEach(function (key) {
      element[key] = attributes[key];
    });
    if (children.length) {
      children.forEach(function (item) {
        element.append(item);
      });
    }
  },
};
