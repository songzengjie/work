<template>
	<div>
		<!-- <h1>商品列表</h1> -->
		<el-card class="box-card">
			<el-input style="width:500px" placeholder="请输入内容" v-model="params.query" class="input-with-select">
				<el-button slot="append" icon="el-icon-search" @click="search"></el-button>
			</el-input>
			<el-button type="primary" style="margin-left: 15px;" @click="$router.push('/shopadd')">添加用户</el-button>
			<el-table :data="shoplist" style="width: 100%">
				<el-table-column label="#" width="60" type="index">
				</el-table-column>
				<el-table-column label="商品名称" prop="goods_name" width="500">
				</el-table-column>
				<el-table-column label="商品价格" prop="goods_price">
				</el-table-column>
				<el-table-column label="商品重量" prop="goods_weight">
				</el-table-column>
				<el-table-column label="创建时间" prop="add_time">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
						<el-button type="danger" @click="del(scope.row)" size="mini" icon="el-icon-delete"></el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
				:page-sizes="[2, 3, 5, 10]" :page-size="2" layout="total, sizes, prev, pager, next, jumper"
				:total="total">
			</el-pagination>
		</el-card>
	</div>
</template>

<script>
import { GetShoplist, DelShop } from '@/API/httpApi'
export default {
	data() {
		return {
			shoplist: [],
			/**搜素加分页数据 */
			params: {
				query: "",
				pagenum: 1,
				pagesize: 10
			},
			total: 0,
		}
	},
	methods: {
		/**获取列表数据 */
		getlist() {
			GetShoplist(this.params).then(res => {
				console.log(res);
				let { goods, total } = res.data.data
				this.shoplist = goods
				this.total = total
			})
		},
		search() {
			this.getlist()
		},
		/**每页几条数据 */
		handleSizeChange(val) {

			this.params.pagesize = val
			this.getlist()
		},
		/**当前第几页 */
		handleCurrentChange(val) {

			this.params.pagenum = val
			this.getlist()
		},
		/**删除商品 */
		del(row) {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
				DelShop({ id: row.id }.then(() => {
					this.getlist()
				}))
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

	},
}
</script>

<style lang='scss' scoped>

</style>
