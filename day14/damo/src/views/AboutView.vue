<template>
  <div class="about">
    <div class="cont">
      <Categorys title="美食">
        <h1 slot="center">美食</h1>
        <h1 slot="footer">更多美食</h1>
      </Categorys>

      <Categorys title="游戏">
        <ul slot="center">
          <li v-for="(item, index) in games" :key="index">{{ item.title }}</li>
        </ul>
        <div class="foot" slot="footer">
          <h1>单机</h1>
          <h1>网络</h1>
        </div>
      </Categorys>

      <Categorys title="电影">
        <h1>电影</h1>
        <template v-slot:footer>
          <div class="foot">
            <h1>经典</h1>
            <h1>热门</h1>
            <h1>推荐</h1>
          </div>
          <h4>欢迎前来观影</h4>
        </template>
      </Categorys>
    </div>
  </div>
</template>

<script>
import mock from "../../mock/data.json"
import Categorys from '../components/Categorys'
export default {
  components: { Categorys },
  data() {
    return {
      games: mock.games
    }
  },
}
</script>

<style lang="scss" scoped>
.cont,
.foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>