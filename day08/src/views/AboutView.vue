<template>
  <div>
    <h1>
      {{msg}}
    </h1>
    <span v-bind:title="mssage">
      鼠标悬停几秒有惊喜哦
    </span>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
      <button @click="xg()">修改</button>
    </ul>
    <input type="text" v-model="value" @input="chang">
    <p>{{value}}</p>
 </div>
</template>

<script>
export default {
  data () {
    return {
      msg:"666",
      mssage:'嘿嘿上当了吧，大傻逼',
      list:[1,2,3],
      value:''
    }
  },
  methods: {
    xg(){
      console.log(this.list[0]);
      this.list[0] = 2
    },
    chang(e){
      console.log(e);
    }

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
</style>
