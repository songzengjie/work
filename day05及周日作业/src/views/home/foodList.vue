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
            <el-form-item label="食品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="食品ID">
            <span>{{ props.row.category_id }}</span>
          </el-form-item>
          <el-form-item label="食品介绍">
            <span>{{ props.row.description }}</span>
          </el-form-item>
          <el-form-item label="食品评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="月销量">
            <span>{{ props.row.month_sales}}</span>
          </el-form-item>
          </el-form-item>
          <el-form-item class="right">
            <el-form-item label="餐馆名称">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="餐馆ID">
            <span>{{ props.row.restaurant_id }}</span>
          </el-form-item>
          <el-form-item label="餐馆地址">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="食品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          </el-form-item>
          
        
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="食品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="食品介绍"
      prop="description">
    </el-table-column>
    <el-table-column
      label="评分"
      prop="rating">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="">
      <template slot-scope="scope">
        <el-button>编辑</el-button>
     
        <el-button type="danger">删除</el-button>

      </template>
    </el-table-column>
  </el-table>

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
      url:`https://elm.cangdu.org/shopping/v2/foods?offset=${this.pagenum*20}&limit=20&restaurant_id=undefined`,
      method:'get',
    }).then(res=>{
      console.log(res);
      this.list = res.data
    })

    }

  },
  created () {
    axios({
      url:'https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined',
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
