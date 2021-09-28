function camelCase(name) {
  return name.replace(/([\:\-\_]+(.))/g, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(/^moz([A-Z])/, 'Moz$1')
}

module.exports = function(isDLL) {
  const externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios'
  }
  if (isDLL) {
    return Object.keys(externals).reduce((t, v) => {
      return { ...t, [camelCase(v)]: [v] }
    }, {})
  }
  return externals
}
