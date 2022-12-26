<template>
  <div id="app">
    <h3 style="text-align: center;color: #fff;line-height: 40px;">互联网产业全球布局看板</h3>
    <div class="con">
      <div class="left">
      <Touser/>
      <LeftTwo/>
      </div>
      <div class="right"></div>
    </div>

  </div>
</template>

<script>
import http from "@/units/http"
import Touser from '@/letf/Tousers.vue'
import LeftTwo from '@/letf/LeftTwo.vue'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  created() {


  },
  mounted() {

  },
  components: {
    Touser,
    LeftTwo
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss'>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  background: #333;
}

.con {
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  align-items: center;
  padding:5px;
  color: #fff;
  .left {
    flex: 2;
    height: 100%;
  }

  .right {
    flex: 8;
    height: 100%;
  }
}
</style>
