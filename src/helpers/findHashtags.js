function findHashtags(searchText) {
  var regexp = /(\s|^)\#\w\w+\b/gm;
  let result = searchText.match(regexp);
  if (result) {
    result = result.map(function (s) {
      return s.trim();
    });
    return result;
  } else {
    return [];
  }
}

export default findHashtags;
