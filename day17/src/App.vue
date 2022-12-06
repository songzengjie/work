<template>
  <div id="app">
    <router-view class="page" />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}

body,
html,
#app,
.page {
  width: 100%;
  height: 100%;
}
</style>
