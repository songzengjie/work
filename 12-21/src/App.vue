<template>
  <div id="app">
    <div id="div" style="width:100%;height:100%;border:1px solid red"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
import ret from './assets/data/中华人民共和国.json'
export default {
  data() {
    return {
      ret
    }
  },
  methods: {

  },
  created() {

  },
  mounted() {
    var mEcharts = echarts.init(document.querySelector('#div'))
    echarts.registerMap('chinaMap', this.ret)
    var option = {
      geo: {
        type: 'map',//指定类型为地球
        map: "chinaMap",
        roma: true,
        label: {
          show: true //名称显示
        },
        zoom: 1, //缩放比例
      }
    }
    mEcharts.setOption(option)

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss'>
body,html,#app{
  width: 100%;
  height: 100%;
}

</style>
