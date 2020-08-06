<template>
	<nav id="nav">
		<p>
			<a>全部商品分类</a>
			<b></b>
		</p>
		<ul class="lf">
			<li>
				<a href="#">首页</a>
			</li>
			<li>
				<a href="#">服装城</a>
			</li>
			<li>
				<a href="#">食品</a>
			</li>
			<li>
				<a href="#">团购</a>
			</li>
			<li>
				<a href="#">电子商品</a>
			</li>
			<li>
				<router-link to="/miaosha" tag="a">秒杀</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>