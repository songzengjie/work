<template>
	<div>
		<el-dialog title="修改地址" :visible.sync="editShow">
			<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="省市区/县">
					<el-cascader :options="cityOptions" :value="city" @change="changeProvince" change-on-select>
					</el-cascader>
				</el-form-item>
				<el-form-item label="详细地址">
					<el-input v-model="ruleForm.username"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="resetForm('ruleForm')">取消</el-button>
					<el-button type="primary" @click="add('ruleForm')">确定</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
/**省市区数据 */
import cityOptions from '@/js/city_data2017_element.js'
export default {
	data() {
		return {
			cityOptions: cityOptions,
			ruleForm: {},
			editShow: false,
			city: []

		}
	},
	methods: {
		open() {
			this.editShow = true
		},
		/**城市选择 */
		changeProvince(val) {
			console.log(val);
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

	},
}
</script>

<style lang='scss' scoped>

</style>
