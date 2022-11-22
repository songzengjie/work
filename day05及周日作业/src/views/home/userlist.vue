<template>
  <div class="userList">
    <el-table
    :data="list"
    style="width: 100%"
    border
    >
    <el-table-column
      type="index"
      label="#"
      >
    </el-table-column>
    <el-table-column
      prop="registe_time"
      label="注册日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="city"
      label="注册地址">
    </el-table-column>
  </el-table>
  <el-pagination
  background
  @current-change="page"
  layout="prev, pager, next"
  :total="69841">
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
      url:`https://elm.cangdu.org/v1/users/list?offset=${this.pagenum*20}&limit=20`,
      method:'get',
    }).then(res=>{
      console.log(res);
      this.list = res.data
    })

    }

  },
  created () {
    axios({
      url:'https://elm.cangdu.org/v1/users/list?offset=0&limit=20',
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

</style>
