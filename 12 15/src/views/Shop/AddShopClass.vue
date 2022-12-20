<template>
	<div>
		<el-dialog :title="!addCatesParams.cat_id ? '添加分类' : '修改分类'" :visible.sync="showCates" width="40%">
			<el-form :model="addCatesParams" :rules="rules">
				<el-form-item label="分类名称" prop="cat_name">
					<el-input v-model="addCatesParams.cat_name"></el-input>
				</el-form-item>
				<el-form-item v-if="!addCatesParams.cat_id" label="父级分类">
					<el-cascader :props="{ label: 'cat_name', value: 'cat_id' }" v-model="addCatesParams.cat_level"
						:options="tableData"></el-cascader>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="showCates = false">取 消</el-button>
				<el-button type="primary" @click="addCates">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			/**弹框开关 */
			showCates: false,
			addCatesParams: {
				cat_pid: '',
				cat_name: '',
				cat_level: ''
			},
			tableData: [],
			rules: {
				cat_name: [
					{ required: true, message: '分类名称不能为空', trigger: 'blur' }
				]
			}

		}
	},
	methods: {
		/**打开弹框 */
		open(arr) {
			this.showCates = true
			if (arr instanceof Array) {
				this.tableData = arr
			} else {
				this.addCatesParams = arr
			}
		},
		/**添加按钮 */
		addCates() {
			if (!this.addCatesParams.cat_id) {
				/**根据条件设置id */
				let num = this.addCatesParams.cat_level.length
				if (num < 1) {
					this.addCatesParams.cat_pid = 0
				} else {
					this.addCatesParams.cat_pid = this.addCatesParams.cat_level[num - 1]
				}
				this.addCatesParams.cat_level = num
				this.$emit("add", this.addCatesParams)
			}else{
				let obj = {
					cat_name:this.addCatesParams.cat_name,
					id : this.addCatesParams.cat_id
				}
				this.$emit("addEdit",obj)
			}

			/**关闭 */
			this.showCates = false
		}
	},
	created() {

	},
	mounted() {

	},
	components: {

	},
	computed: {

	},
	watch: {
		showCates(newValue) {
			if (!newValue) {
				this.addCatesParams = {}
			}
		}

	},
}
</script>

<style lang='scss' scoped>

</style>
