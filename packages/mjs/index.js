/** 
 * Sorts an array by a certain key. Ideal for categorizing objects based on a value.
 * 
 * @param {object} obj fdsfafa
 * @param {string} key fdsfafa
 * @param {*} fallback fqqq
 * @param {}
 */
module.exports = ({ obj, key, fallback, transformer }) => {
  let postObj = {};
  for (let preObj of obj) {
    var category = preObj[key] || fallback;
    if (!(category in postObj)) {
      postObj[category] = [];
    }

    if (transformer) {
      preObj = transformer.apply(preObj);
    }
    postObj[category].push(preObj);
  }
  return postObj;
};