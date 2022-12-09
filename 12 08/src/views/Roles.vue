<template>
  <div class="roles">
    <el-button type="primary" @click="dialogVisible = true">添加角色</el-button>
    <el-table :data="roles" border>
      <el-table-column width="55"></el-table-column>
      <el-table-column label="#" type="index"></el-table-column>
      <el-table-column label="角色名称" prop="roleName"></el-table-column>
      <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
      <el-table-column label="操作" width="400">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="xg(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="del(scope.row.id, scope.$index)"
            >删除</el-button
          >
          <el-button type="warning" icon="el-icon-setting">分配权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加角色" :visible.sync="dialogVisible" width="40%">
      <el-form class="adduser" :model="form" label-width="80" :rules="rules">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="form.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="form.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      roles: [],
      dialogVisible: false,
      isExit: false,
      userId: '',
      form: {
        roleName: "",
        roleDesc: "",
      },
      rules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
        ],
        roleDesc: [
          { required: true, message: "请输入角色描述", trigger: "blur" },
        ],
      },
    };
  },
  created() {
	this.getlist()
  
  },
  methods: {
		getlist() {
			this.$http.send("/roles", this.params).then(res => {
				console.log(res);
				this.roles = res.data.data
			
			})
		},
		addUser(){

		},
		xg(){

		},
		del(){

		},
	}
}
</script>
<style>

.roles{
	padding: 20px;
	margin: 20px;
	background: #fff;
}
</style>


