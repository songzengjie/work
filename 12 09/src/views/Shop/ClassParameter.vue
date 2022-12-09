<template>
  <div class="params">
	<!-- <h1>商品添加页面</h1> -->
	<el-card class="shopadd">
		<!-- 头部 -->
			<header><i class="el-icon-info"></i> 添加商品信息</header>
			<!-- 步骤条 -->
			<el-steps :space="200" :active="1" finish-status="success" class="step">
  <el-step title="基本信息"></el-step>
  <el-step title="商品参数"></el-step>
  <el-step title="商品属性"></el-step>
  <el-step title="商品图片"></el-step>
  <el-step title="商品内容"></el-step>
  <el-step title="完成"></el-step>
   </el-steps>
<!-- tabs栏 -->
<el-tabs tab-position="left">
    <el-tab-pane label="基本信息">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
		   <el-form-item label="商品名称" prop="goods_name"><br>
        <el-input v-model="ruleForm.goods_name"></el-input>
       </el-form-item>
		   <el-form-item label="商品价格" prop="goods_price"><br>
        <el-input v-model="ruleForm.goods_price"></el-input>
       </el-form-item>
		   <el-form-item label="商品重量" prop="goods_price"><br>
        <el-input v-model="ruleForm.goods_weight"></el-input>
       </el-form-item>
		   <el-form-item label="商品数量" prop="goods_number"><br>
        <el-input v-model="ruleForm.goods_number"></el-input>
       </el-form-item>
		   <el-form-item label="商品分类" prop="goods_number"><br>
       <el-cascader
    v-model="value"
    :options="shopaddlist"
	 :props="cascaderProps"
    ></el-cascader>
       </el-form-item>
		</el-form>
	</el-tab-pane>
    <el-tab-pane label="商品参数">配置管理</el-tab-pane>
    <el-tab-pane label="商品属性">角色管理</el-tab-pane>
    <el-tab-pane label="商品图片">定时任务补偿</el-tab-pane>
    <el-tab-pane label="商品内容">定时任务补偿</el-tab-pane>
  </el-tabs>

	</el-card>
 </div>
</template>

<script>
export default {
  data () {
         let validatePass = (rule, value, callback) => {
        if (value*10 < 10) {
          callback(new Error('商品价格必须是大于0的整数或小数'));
        } else {
          callback();
        }
		 }
         let numbers = (rule, value, callback) => {
        if (!/^100$|^(\d|[1-9]\d)$/.test(value)) {
          callback(new Error('商品数量必须是大于0的整数'));
        } else {
          callback();
        }

		 }
	return {
		shopaddlist:[],
		cascaderProps: {
        children: 'children',  //匹配响应数据中的children
        label: 'cat_name',        //匹配响应数据中的name
        value: 'cat_id'          //匹配响应数据中的id
  },
		value:'',
			ruleForm: {
				goods_name:"",
				goods_price:"",
				goods_weight:"",
				goods_number:""
			},

			
			rules: {
         goods_name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
          ],
         goods_price: [
            { validator: validatePass, trigger: 'blur' ,required: true}
          ],
         goods_number: [
            { validator: numbers, trigger: 'blur' ,required: true}
          ],
			},
	}
  },
  methods: {
  },
  created () {
				this.$http.send('/categories').then(res=>{
						console.log(res);
						this.shopaddlist=res.data.data.result

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
.params{
	padding: 20px;
	margin: 20px;
	background: #fff;
}
.shopadd {
  box-sizing: border-box;
  padding: 5px;
  margin-top: 10px;
  header {
    width: 100%;
    height: 40px;
    color: rgba(0, 0, 0, 0.44);
    background: rgba(204, 204, 204, 0.287);
    text-align: center;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .step {
    margin-left: 60px;
    margin-bottom: 20px;
  }
}
</style>
