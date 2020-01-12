```js
const hashFunc = (s, size) => {
  let hash = 31;
  for (let i of s) {
    hash = (19 * (hash * s.charCodeAt(i))) % size;
  }
  return hash;
};

class HashTable {
  tbl = new Array(97);

  setter = (key, value) => {
    const i = hashFunc(key, this.tbl.length);
    this.tbl[i] = value;
  };

  getter = key => {
    const i = hashFunc(key, this.tbl.length);
    return this.tbl[i];
  };
}

let req = { INGREDIENTS: "HAHAHAJKL", STEPS: "DO THE THINGJK" };
const table = new HashTable();

table.setter("recipe", JSON.stringify(req));

console.log(table.getter("recipe"));
console.log(table);```