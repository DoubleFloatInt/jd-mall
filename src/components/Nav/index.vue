<template>
	<nav id="nav">
		<p>
			<a>全部商品分类</a>
			<b></b>
		</p>
		<ul class="lf">
			<li>
				<router-link to="/" tag="a">首页</router-link>
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

	#nav {
		height: 40px;
		background-color: #e1251b;
	}

	#nav > p {
		width: 210px;
		height: 40px;
		line-height: 40px;
		float: left;
		background-color: #e1251b;
	}

	#nav > p a {
		float: left;
		padding-left: 10px;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		font-weight: bold;
		text-decoration: none;
		color: #fff;
	}

	#nav > p b {
		float: right;
		width: 20px;
		height: 20px;
		background: url(../../assets/images/iconlist_2.png) no-repeat -65px 0;
		margin: 10px 10px 0 0;
	}

	#nav ul li {
		float: left;
	}

	#nav ul li a {

		float: left;
		width: 100px;
		height: 40px;
		text-align: center;
		color: #fff;
		font-size: 14px;
		font-weight: bold;
		line-height: 40px;
		text-decoration: none;
	}

	#nav ul li a:hover {
		background-color: #e1251b;
	}

</style>