<template>
	<div>
		<div>
			<Banner />
		</div>
		<div>
			<div>
				<div>
					<!-- 原始html中我们使用a标签实现页面跳转 -->
					<!-- <a  href="./about.html">About</a>
					<a  href="./home.html">Home</a> -->

					<!-- Vue中借助router-link标签实现路由的切换 -->
					<router-link class="list-group-item" active-class="active" to="/abouts">About</router-link> <br />
					<router-link class="list-group-item" active-class="active" to="/homes"> Home </router-link>
				</div>
			</div>
			<div>
				<div>
					<div>

						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Banner from '../components/Banner.vue'
export default {
	name: 'App',
	components: { Banner }
}
</script>
