<template>
  <div class='app'>
    <div class="box">
      <h1 style="color:rgba(255, 255, 255, 0.837);font-weight: 300;">iHRM后台管理系统</h1><br>
      <el-input v-model="form.username"  style="width:300px;" class="aa"></el-input><br><br>
      <el-input v-model="form.password"  :type="flag == true ? 'password' : 'text'"
        style="width:300px" /><br><br>
      <el-button type="primary" style="width:300px;height:40px;background:#407ffe;"
        @click="gotologin">登录</el-button><br><br>
      <a href="###" style="#fff" class="zc">还没有账号？ 立即注册</a>
      <Avatar class="usericon" />
      <Unlock class="passicon" />
      <View v-show="flag == false" @click="flag = !flag" class="passicon2" />
      <Hide v-show="flag == true" @click="flag = !flag" class="passicon3" />
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { Avatar, Unlock, View, Hide } from "@element-plus/icons-vue"; 

const store = useStore();
const router = useRouter();
const route = useRoute();
const form = reactive<{
  username: string;
  password: string;
}>({
  username: "",
  password: "",
});
const flag = ref(true);
const gotologin = () => {
  console.log(111);
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}

.aa {
  text-indent: 5em;
}

.app {
  width: 100vw;
  height: 100vh;
  background: url("../assets/login.jpg");
}

.box {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.zc {
  color: rgba(255, 255, 255, 0.837);
  text-decoration: none;
}

.usericon {
  position: absolute;
  top: 70px;
  left: 50px;
  width: 1em;
  height: 1em;
  color: #889aa4;
  margin: 0 5px;
}

.passicon {
  position: absolute;
  top: 125px;
  left: 50px;
  width: 1em;
  height: 1em;
  color: #889aa4;
  margin: 0 5px;
}

.passicon2 {
  position: absolute;
  top: 125px;
  left: 328px;
  width: 1em;
  height: 1em;
  color: #889aa4;
}

.passicon3 {
  position: absolute;
  top: 125px;
  left: 328px;
  width: 1em;
  height: 1em;
  color: #889aa4;
}
</style>
