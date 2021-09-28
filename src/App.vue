<template>
  <div id="app-wrapper">
    <div id="app-nav">
      <router-link to="/single-spa-child1">single-spa-child1</router-link> |
      <router-link to="/single-spa-child2">single-spa-child2</router-link>
    </div>
    <router-view />
    <!-- 子应用容器 -->
    <div id="microApp"></div>
  </div>
</template>

<style lang="less">
#app-wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app-nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
