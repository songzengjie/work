<template>
  <div>
    <!-- 首页 -->
    <header>
        <span>数据统计</span>
    </header>
    <p>
        <span class="one">当日数据：</span>
        <span>3<sub>新增用户</sub></span>
        <span>1<sub>新增订单</sub></span>
        <span>9<sub>新增管理员</sub></span>
    </p><br>
    <p>
        <span class="two">总数据：</span>
        <span>69841<sub>注册用户</sub></span>
        <span>32676<sub>订单</sub></span>
        <span>124614<sub>管理员</sub></span>
    </p>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>

header{
    width: 100%;
    height: 40px;
    text-align:center;
    font-size: 20px;
}

p{
    display: flex;
    span{
        width: 200px;
        height: 40px;
      
        background: #e5e9f2;
        text-align: center;
        margin-right: 10px;
        line-height: 40px;
        border-radius: 8px;
        font-size: 20px;
        sub{
            font-size: 14px;
        }
    }
    .one{
        background: orange;
        color: #fff;
    }
    .two{
        background: #20a0ff;
        color: #fff;
    }
}
</style>
