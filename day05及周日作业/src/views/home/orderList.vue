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
            <el-form-item label="用户名">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="收货地址">
            <span>{{ props.row.category_id }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.description }}</span>
          </el-form-item>
       
          </el-form-item>
          <el-form-item class="right">
            <el-form-item label="店铺名称">
            <span>{{ props.row.restaurant_name}}</span>
          </el-form-item>
          <el-form-item label="店铺ID">
            <span>{{ props.row.restaurant_id }}</span>
          </el-form-item>
        
          </el-form-item>
          
        
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单ID"
      prop="unique_id">
    </el-table-column>
    <el-table-column
      label="总价格"
      prop="total_amount">
    </el-table-column>
    <el-table-column
      label="订单状态"
      prop="status_bar.title">
    </el-table-column>
  </el-table>
  <el-pagination
  background
  @current-change="page"
  layout="prev, pager, next"
  :total="32676">
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
      url:`https://elm.cangdu.org/bos/orders?offset=${this.pagenum*20}&limit=20&restaurant_id=undefined`,
      method:'get',
    }).then(res=>{
      console.log(res);
      this.list = res.data
    })

    }

  },
  created () {
    axios({
      url:'https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined',
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
