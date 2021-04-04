/** Sorts an array by a certain key. Ideal for categorizing objects based on a value
 * @example categorizeByValue({ obj: [ { type: "planets", name: "earth" }, { type: "moons", name: "europa" } ], key: "type", fallback: "UFO", transformer: function () { return this.name } })
 * // returns  { planets: [ 'earth' ], moon:s [ 'europa' ] }
 */
 const categorizeByValue = ({ obj, key, fallback, transformer }) => {
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
  