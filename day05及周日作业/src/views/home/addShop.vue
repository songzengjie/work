<template>
  <div>
    <el-form  :model="form" label-width="150px">
        <el-form-item label="店铺名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="详细地址">
            <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
            <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="店铺简介">
            <el-input v-model="form.delsecription"></el-input>
        </el-form-item>
        <el-form-item label="店铺标语">
            <el-input v-model="form.promotion_info"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类">
    <el-select v-model="form.category" placeholder="请选择活动区域">
      <el-option label="快餐便当/简餐" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="店铺特点">
    <el-checkbox-group v-model="form.delivery_mode">
      <el-checkbox label="品牌保证" name="type"></el-checkbox>
      <el-checkbox label="蜂鸟专送" name="type"></el-checkbox>
      <el-checkbox label="新开店铺" name="type"></el-checkbox>
      <el-checkbox label="外卖保" name="type"></el-checkbox>
      <el-checkbox label="准时达" name="type"></el-checkbox>
      <el-checkbox label="开发票" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="配送费">
    <el-input-number v-model="form.float_delivery_fee" :min="1" :max="10" label="描述文字"></el-input-number>
  </el-form-item>
  <el-form-item label="起送价">
    <el-input-number v-model="form.float_minimum_order_amount" :min="1" :max="10" label="描述文字"></el-input-number>
  </el-form-item>
  <el-form-item label="营业时间">
    <el-time-select
    placeholder="起始时间"
    v-model="form.opening_hours"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="结束时间"
    v-model="form.opening_hours"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: form.opening_hours
    }">
  </el-time-select>
  </el-form-item>
  <el-form-item label="上传店铺头像">
    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="form.image_path" :src="form.image_path" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-form-item>
  <el-form-item label="上传营业执照">
    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  >
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-form-item>
  <el-form-item label="上传餐饮服务许可证">
    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
 >
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-form-item>
  <el-form-item label="优惠活动">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="满减优惠" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-table :data="form.activities"
              style="width: 100%">
   
      <el-table-column prop="icon_name"
                       label="活动标题"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="活动名称"
                       width="180">
      </el-table-column>
      <el-table-column prop="description"
                       label="活动详情"
                       width="180">
      </el-table-column>
      <el-table-column 
                       label="操作"
                       width="180">
                       <template slot-scope="scope">
                        <el-button type="danger">删除</el-button>
                       </template>
      </el-table-column>

     
    </el-table>
  </el-form-item>
  <el-form-item>
        <el-button type="primary" @click="created()">立即创建</el-button>
      </el-form-item>
        
    </el-form>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      form:{
        name:'',
        address:'',
        phone:'',
        delsecription:'',
        promotion_info:'',
        category:'',
        delivery_mode:[],
        float_delivery_fee:'',
        float_minimum_order_amount:'',
        opening_hours:'',
        image_path:'',
        latitude: 35.70658,
        longitude:114.298981,
        zhun:true,
        piao:true
      },
      imageUrl:''

    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
        this.form.image_path = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
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
      created(){
        axios({
          url:'https://elm.cangdu.org/admin/info',
          method:"get",
          data:this.form
        }).then(res=>{
          console.log(res);
        })
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
