<template>
  <div class="userList">
    <el-table
    border
    :data="list"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" class="demo-table-expand">
          <el-form-item class="left">
            <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺介绍">
            <span>{{ props.row.description }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="销售量">
            <span>{{ props.row.recent_order_num }}</span>
          </el-form-item>
          </el-form-item>
          <el-form-item class="right">
            <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="店铺ID">
            <span>{{ props.row.status }}</span>
          </el-form-item>
          <el-form-item label="评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="address">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      prop="description">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row)">编辑</el-button>
        <el-button>添加食品</el-button>
        <el-button type="danger">删除</el-button>

      </template>
    </el-table-column>
  </el-table>
 



<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="店铺名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="详细地址" :label-width="formLabelWidth">
     <el-input    v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="店铺介绍" :label-width="formLabelWidth">
     <el-input    v-model="form.description"></el-input>
    </el-form-item>
    <el-form-item label="联系电话" :label-width="formLabelWidth">
     <el-input    v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item>
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
   
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog> 

<el-pagination
  background
  @current-change="page"
  layout="prev, pager, next"
  :total="3214">
</el-pagination>
    
 </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
        list:[],
        dialogFormVisible:false,
        form:{
          name:'',
          address:'',
          description:'',
          phone:'',
          category:'',
          image_path:''
        },
        
        formLabelWidth: '120px',
        pagenum:1

    }
  },
  methods: {
    edit(row){
      console.log(row);
      this.dialogFormVisible = true
      this.form={
        ...row
      }
      console.log(this.f);
    },
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
      page(val){
      console.log(val);
      this.pagenum = val
      this.getlist()

    }, 
     getlist(){
      axios({
      url:`https://elm.cangdu.org/shopping/restaurants?latitude=35.747002&longitude=114.297447&offset=${this.pagenum*20}&limit=20`,
      method:'get',
    }).then(res=>{
      console.log(res);
      this.list = res.data
    })

    }
    

  },
  created () {
    axios({
      url:'https://elm.cangdu.org/shopping/restaurants?latitude=35.747002&longitude=114.297447&offset=0&limit=20',
      method:'get',
      
    }).then(res=>{
      console.log(res);
      this.list = res.data
    })

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

.demo-table-expand{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  .left{
    width: 50%;

  }
  .right{
    width: 50%;
  }
}
</style>
