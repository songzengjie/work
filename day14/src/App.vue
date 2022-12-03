<template>
  <div id="app">

    <router-view />
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;

}
.current {
  box-sizing: border-box;
  padding: 8px !important;
  min-height: 85px !important;
  overflow: hidden;
}


.el-calendar-table .el-calendar-day{
  box-sizing: border-box;
  padding: 8px !important;
  min-height: 85px !important;
  overflow: hidden;
}
</style>
