<template>
	<div class="cont">
		<Category title="美食">
			<h1>美食</h1>
		</Category>

		<Category title="游戏">
			<ul>
				<li v-for="(item, index) in games" :key="index">{{ item.title }}</li>
			</ul>
		</Category>

		<Category title="电影">
			<h1>电影</h1>
		</Category>
	</div>
</template>

<script>
import mock from "../../mock/data.json"
import Category from '../components/Category'
export default {
	components: { Category },
	data() {
		return {
			games: mock.games
		}
	},
}
</script>

<style lang="scss" scoped>
.cont {
	display: flex;
	justify-content: space-around;
}
</style>
