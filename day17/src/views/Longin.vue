<template>
  <div class="longin">
    <el-form class="form">
      <el-form-item>
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.pwd" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="dl">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pwd: ""
      }
    }
  },
  methods: {
    dl() {
      // console.log(this)
      this.$http({ method: "post", data: this.form, url: "/api/longin" }).then((res) => {
        console.log(res)
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.longin {
  width: 100%;
  height: 100%;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    width: 400px;
    height: 300px;
    border-radius: 8px;
    background: orange;
    padding: 80px 40px;
  }
}
</style>
