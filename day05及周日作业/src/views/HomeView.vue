<template>
  <div class="home">
  <el-container>
  <el-aside width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#324157"
      text-color="#fff"
      active-text-color="#1f7dd5"
      router>
      <el-menu-item index="manage">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="item.index" v-for="item in list" :key="item.type">{{item.type}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-plus"></i>
          <span>添加数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="item.index" v-for="item in listTwo" :key="item.type">{{item.type}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-plus"></i>
          <span>图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="visitor">用户分布</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-plus"></i>
          <span>编辑</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="vueEdit">文本编辑</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-plus"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="adminSet">管理员设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-plus"></i>
          <span>说明</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="explain">说明</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-main>
   
  <el-breadcrumb separator="/" class="heade">
  <el-breadcrumb-item :to="{ path: '/' }">{{$route.meta.one}}</el-breadcrumb-item>
  <el-breadcrumb-item v-show="$route.meta.two"><a href="/"></a>{{$route.meta.two}}</el-breadcrumb-item>
  <el-breadcrumb-item v-show="$route.meta.two">{{$route.meta.three}}</el-breadcrumb-item>
</el-breadcrumb>
<router-view class="con"></router-view>
  </el-main>
</el-container>
  
 </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list:[{
        type:'用户列表',
        index:'userList'
      },{
        type:'商家列表',
        index:'shopList'
      },{
        type:'食品列表',
        index:'foodList'
      },{
        type:'订单列表',
        index:'orderList'
      },{
        type:'管理员列表',
        index:'adminList'
      },],
      listTwo:[
        {
          type:'添加数据',
          index:'addShop'
        },{
          type:'添加商品',
          index:'addGoods'
        }
      ]

    }
  },
  methods: {

  },
  created(){
 
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

.heade{
  width: 100%;
  line-height: 60px;
  padding-left: 20px;
  background: #eff2f7;
  // margin-bottom: 20px;
}
.con{
  padding: 20px;
}
</style>
