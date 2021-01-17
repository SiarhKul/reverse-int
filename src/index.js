module.exports = function reverse(n) {
  const regex = /\d+/;
  return n.toString().match(regex)[0].split('').reverse().join('')
}

