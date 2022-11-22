<template>
  <div class="userList">
    <el-table
    :data="list"
    style="width: 100%"
    border
    >
    <el-table-column
      prop="user_name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="注册日期"
     >
    </el-table-column>
    <el-table-column
      prop="city"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="admin"
      label="权限">
    </el-table-column>
  </el-table>
 
  
  <el-pagination
  background
  @current-change="page"
  layout="prev, pager, next"
  :total="124614">
</el-pagination>
    
 </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
        list:[],
        pagenum:1

    }
  },
  methods: {
    page(val){
      console.log(val);
      this.pagenum = val
      this.getlist()

    }, 
     getlist(){
      axios({
      url:`https://elm.cangdu.org/admin/all?offset=${this.pagenum*20}&limit=20`,
      method:'get',
    }).then(res=>{
      console.log(res);
      this.list = res.data.data
    })

    }

  },
  created () {
    axios({
      url:'https://elm.cangdu.org/admin/all?offset=0&limit=20',
      method:'get',
      
    }).then(res=>{
      console.log(res);
      this.list = res.data.data
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
</style>
