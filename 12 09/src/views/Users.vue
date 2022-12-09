<template>
	<div class="users">
		<el-form :inline="true">
			<el-form-item>
				<el-input style="width: 200px;" placeholder="请输入内容" v-model="params.query" class="input-with-select">
					<el-button slot="append" icon="el-icon-search" @click="search"></el-button>
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="dialogTableVisible = true">添加用户</el-button>
			</el-form-item>
		</el-form>

		<el-table :data="list" border style="width: 90%">
			<el-table-column type="index" label="#">
			</el-table-column>
			<el-table-column prop="username" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="email" label="邮箱" width="180">
			</el-table-column>
			<el-table-column prop="mobile" label="电话">
			</el-table-column>
			<el-table-column prop="role_name" label="角色">
			</el-table-column>
			<el-table-column prop="mg_state" label="状态">
				<template slot-scope="scope">
					<el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ccc">
					</el-switch>
				</template>

			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">

					<el-button type="primary" size="mini" icon="el-icon-edit"
						@click="handleEdit(scope.row)"></el-button>
					<el-button type="danger" size="mini" icon="el-icon-delete"
						@click="handleDelete(scope.row.id)"></el-button>
					<el-button type="warning" size="mini" icon="el-icon-s-tools"></el-button>
				</template>

			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[2, 3, 5, 10]"
			:page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>

		<!-- 对话框 -->
		<el-dialog :title="id == -1 ? '添加用户' : '编辑'" :visible.sync="dialogTableVisible">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="username">
					<el-input v-model="ruleForm.username" :disabled="id != -1"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="paw" v-if="id == -1">
					<el-input v-model="ruleForm.paw"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="ruleForm.email"></el-input>
				</el-form-item>
				<el-form-item label="电话" prop="mobile">
					<el-input v-model="ruleForm.mobile"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="dialogTableVisible = false">取消</el-button>
					<el-button type="primary" @click="add('ruleForm')">确定</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			params: {
				query: "",
				pagenum: 1,
				pagesize: 2
			},
			list: [],
			lists: [],
			total: 0,
			dialogTableVisible: false,
			ruleForm: {},
			rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' },

				],
				paw: [
					{ required: true, message: '请输入密码', trigger: 'blur' },

				],
				email: [
					{ required: true, message: '请输入邮箱', trigger: 'blur' },

				],
				mobile: [
					{ required: true, message: '请输入电话', trigger: 'blur' },

				],
			},
			id: -1

		}
	},
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
		// 搜索
		search() {
			this.list = this.lists.filter(item => item.username.includes(this.params.query))
		},
		getlist() {
			this.$http.send("/users", this.params).then(res => {
				console.log(res);
				this.list = res.data.data.users
				this.lists = res.data.data.users
				this.total = res.data.data.total
			})
		},
		add(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {

					if (this.id == -1) {
						console.log(1);
						this.lists.push({ ...this.ruleForm, id: new Date().getTime() })

					} else {
						this.lists.forEach(item => {
							if (item.id == this.id) {

								item.mobile = this.ruleForm.mobile
								item.email = this.ruleForm.email
							}
						})
					}
					this.dialogTableVisible = false
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		handleEdit(obj) {
			this.id = obj.id
			this.dialogTableVisible = true
			this.ruleForm = { ...obj }

		},
		handleDelete(id){
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
					this.lists = this.lists.filter(item=>item.id!=id)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
		
		}

	},
	created() {
		this.getlist()

	},
	mounted() {

	},
	components: {

	},
	computed: {

	},
	watch: {
		dialogTableVisible(newValue) {
			if (!newValue) {
				this.ruleForm = {}
				this.id = -1
			}
		},
		lists: {
			deep: true,
			handler(newValue) {
				this.list = newValue
			}
		}

	},
}
</script>

<style lang='scss' scoped>
.users {
	width: 100%;
	// height: 100%;
	background: #fff;
	margin: 20px;
	padding: 20px;
}
</style>
