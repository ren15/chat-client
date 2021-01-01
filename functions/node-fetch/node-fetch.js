const fetch = require('node-fetch')

const handler = () =>
  fetch('/.netlify/functions/node-fetch', {
    headers: {accept: 'Accept: application/json'}
  })
    .then((x) => x.json())
    .then(({msg}) => setMsg(msg))

module.exports = {handler}
