// TODO: write your code here

export default function orderByProps(obj, keys) {
  const propsArray = [];
  for (const prop in obj) {
    if (prop) propsArray.push({ key: prop, value: obj[prop] });
  }

  const sortedArray = propsArray.sort((a, b) => {
    if (a.key === keys[1] || b.key === keys[1] || b.key === keys[0]) return 1;
    if (a.key < b.key) return -1;
    return 0;
  });
  return sortedArray;
}
