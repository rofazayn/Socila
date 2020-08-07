function uniq(a) {
  var prims = { boolean: {}, number: {}, string: {} },
    objs = [];

  return a.filter(function (item) {
    var type = typeof item;
    if (type in prims)
      return prims[type].hasOwnProperty(item)
        ? false
        : (prims[type][item] = true);
    else return objs.indexOf(item) >= 0 ? false : objs.push(item);
  });
}

function findHashtags(searchText) {
  var regexp = /(\s|^)\#\w\w+\b/gm;
  let result = searchText.match(regexp);
  if (result) {
    result = result.map(function (s) {
      return s.trim();
    });
    return uniq(result);
  } else {
    return [];
  }
}

export default findHashtags;
