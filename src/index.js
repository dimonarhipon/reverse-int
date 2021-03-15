module.exports = function reverse (n) {
    const items = Array.from(Math.abs(n).toString());
    const elements = items.slice();
    if (items.length > 1) {
      items.splice(0, 1, items[items.length - 1]);
      items.splice(items.length - 1, 1, elements[0]);
    }
    const result = parseInt(items.join(''), 10);
    return result;
}
