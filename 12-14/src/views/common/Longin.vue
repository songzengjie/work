<template>
	<div class="longin">
		<el-form class="form">
			<el-form-item>
				<el-input v-model="form.username" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="dl">登录</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import { setToken } from '@/untils/auth'
export default {
	data() {
		return {
			form: {
				username: "",
				password: ""
			}
		}
	},
	methods: {
		dl() {
			if (this.form.username == "" && this.form.password == "") return

			if (this.form.username == "admin" && this.form.password == "123456") {
				this.$http.send("/login", this.form, "post").then(res => {
					console.log(res);
					let { msg } = res.data.meta
					if (res.data.meta.status == 200) {
						this.$notify({
							title: msg,
							message: '这是一条成功的提示消息',
							type: 'success'
						});
						setToken(res.data.data.token)
						this.$router.replace("/home")
					}
				})
			} else {
				this.$message.error('密码或用户名错误');
			}

		}
	},
	created() { },
	mounted() { },
	components: {},
	computed: {},
	watch: {}
}
</script>

<style lang="scss" scoped>
.longin {
	width: 100%;
	height: 100vh;
	background: url(../../assets/8575527.jpg);
	display: flex;
	justify-content: center;
	align-items: center;
	background-repeat: no-repeat;

	.form {
		width: 400px;
		height: 300px;
		border-radius: 8px;
		background: orange;
		padding: 80px 40px;

	}
}
</style>
