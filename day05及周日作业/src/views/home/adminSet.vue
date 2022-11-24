<template>
  <div class="set">
      <h4>管理员信息</h4>
      <div class="cont">
        <p><span>姓名:</span>4444444555</p>
        <p><span>注册时间:</span>2022-11-18 11:07</p>
        <p><span>管理员权限:</span>管理员</p>
        <p><span>管理员ID:</span>124071</p>
        <p><span>更换头像:</span></p>
        <p>
          <el-upload
        class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
     :before-upload="beforeAvatarUpload">
  <img v-if="image" :src="image" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </p>
      </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      image:'8576827.jpg'

    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
        this.image = URL.createObjectURL(file.raw);
        console.log(file);
        
      },
      beforeAvatarUpload(file) {
        console.log(file);
        this.image = file.name
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },

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
.set{
  width: 100%;
  height: 100%;
}
h4{
  width: 100%;
  text-align: center;
}

.cont{
  width: 800px;
  height: 500px;
  margin: 20px auto;
  background: #eee;
  padding: 20px;
  p{
    line-height: 50px;
  }
}
</style>
