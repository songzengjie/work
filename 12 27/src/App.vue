<template>
  <div id="app">
    <h3 style="text-align: center;color: #fff;line-height: 40px;">互联网产业全球布局看板</h3>
    <div class="con">
      <div class="left">
        <Touser />
        <LeftTwo />
        <LeftThree />
        <LeftFour />
        <LeftFive />
        <LeftSix />
      </div>
      <div class="right" style="width: ;margin-left: 10px;">
        <RightOneVue />
        <div style="width: 100%;height: 80%;display: flex;">
          <div style="width: 60%;height: 100%;">
            <div style="width: 100%;height: 76%;"></div>

            <ul
              style="width: 100%;height: 40px; width: 98%;display: flex;justify-content: space-around;font-size: 12px;font-weight: 900;height: 25px;line-height: 25px; background-color: #353941;margin-top: 5px;">
              <li>订单量</li>
              <li>销售额</li>
              <li>用户数</li>
              <li>返单量</li>
            </ul>
            <div style="width: 100%;height: 80%;">
              <RightTwo />
            </div>
          </div>
          <div style="width: 40%;height: 100%;"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Touser from '@/letf/Tousers.vue'
import LeftTwo from '@/letf/LeftTwo.vue'
import LeftThree from '@/letf/LeftThree.vue'
import LeftFour from '@/letf/LeftFour.vue'
import LeftFive from '@/letf/LeftFive.vue'
import LeftSix from '@/letf/LeftSix.vue'
import RightOneVue from './right/RightOne.vue'
import RightTwo from './right/RightTwo.vue'
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
    LeftTwo,
    LeftThree,
    LeftFour,
    LeftFive,
    LeftSix,
    RightOneVue,
    RightTwo
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
  padding: 5px;
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
