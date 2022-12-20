<template>
	<div class="categroies">
		<el-button type="primary" @click="OpenshowCates">添加分类</el-button>
		<el-table border :data="tableData" row-key="cat_id"
			:tree-props="{ children: 'children', hasChildren: 'hasChildren' }">>
			<el-table-column label="#" type="index"></el-table-column>
			<el-table-column label="分类名称" prop="cat_name"></el-table-column>
			<el-table-column label="是否有效" prop="cat_deleted">
				<template>
					<i class="el-icon-success"></i>
				</template>
			</el-table-column>
			<el-table-column label="排序" prop="cat_level">
				<template slot-scope="scope">
					<el-tag :type="scope.row.cat_level === '1' ? 'success' : (scope.row.cat_level === 2 ? 'warning' : '')">{{
							scope.row.cat_level
							| cat_levelFilter
					}}</el-tag>
				</template>
			</el-table-column>
			<el-table-column label="操做">
				<template slot-scope="scope">
					<el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
					<el-button type="danger" icon="el-icon-delete" @click="del(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[1, 2, 5, 10]"
			:page-size="params.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>

		<AddShopClass ref="AddShopClass" @add="add" @addEdit="addEdit" />
	</div>
</template>
<script>
import AddShopClass from './AddShopClass.vue'
import { GetShopType, AddShopType, EditShopType ,DelShopType} from '@/API/httpApi'
export default {
	components: {
		AddShopClass
	},

	data() {
		return {
			params: {
				type: [1, 2, 3],
				pagesize: 2,
				pagenum: 1
			},
			tableData: [],
			total: 0,


		}
	},
	filters: {
		cat_levelFilter(val) {
			let text = ''
			switch (Number(val)) {
				case 0:
					text = '一级'
					break;
				case 1:
					text = '二级'
					break;
				case 2:
					text = '三级'
					break
			}
			return text
		}
	},
	created() {
		this.getCates()
	},
	methods: {
		/**获取列表数据 */
		getCates() {
			GetShopType(this.params).then((res) => {
				console.log(res);
				this.tableData = res.data.data.result;
				this.total = res.data.data.total
			});
		},
		OpenshowCates() {
			this.$refs.AddShopClass.open(this.tableData)
		},
		/**添加接口 */
		add(obj) {
			AddShopType(obj).then(() => { })
			this.getCates()
		},
		/**没也多少条 */
		handleSizeChange(val) {
			this.params.pagesize = val
			this.getCates()
		},
		/**当前第几页 */
		handleCurrentChange(val) {
			this.params.pagenum = val
			this.getCates()
		},
		/**编辑 */
		edit(row) {
			this.$refs.AddShopClass.open(row)
		},
		/**编辑接口 */
		addEdit(obj) {
			EditShopType(obj).then(() => { })
		},
		/**删除 */
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
				DelShopType({id:row.cat_id})
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});
		}


	},
}
</script>
<style lang="scss" scoped>
.categroies {
	margin: 20px;
	padding: 20px;
	background: #fff;
}

.el-icon-success {
	color: green;
}
</style>

