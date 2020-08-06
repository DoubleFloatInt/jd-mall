<template>
	<div>
		<header id="top">
			<div id="top_box">
				<img class="lf" src="../../assets/images/star.jpg">
				<a class="lf" href="#">收藏京东</a>    <!-- lf左浮动 -->
				<ul class="rt">        <!-- rt右浮动 -->
          <li>
            李广帅，你好！欢迎来到京东
            <router-link tag="a" to="/login">你好，请登录</router-link>
            <router-link tag="a" to="/register">[免费注册]</router-link>
          </li>
          <li>
            <b></b><!--边框-->
            <a href="#">我的订单</a>
          </li>
          <li class="vip">
            <b></b>
            <a href="#">会员俱乐部</a>
          </li>
          <li class="qiye">
            <b></b>
            <a href="#">企业频道</a>
          </li>
          <li class="app_jd">
            <b></b>
            <a href="#">手机京东</a>
          </li>
					<li class="service">
						<b></b>
						<a href="#">客户服务</a>
						<!-- 弹出菜单 -->
						<ul>
							<li>
								<a href="#">帮助中心</a>
							</li>
							<li>
								<a href="#">售后服务</a>
							</li>
							<li>
								<a href="#">在线客服</a>
							</li>
							<li>
								<a href="#">投诉中心</a>
							</li>
							<li>
								<a href="#">客服邮箱</a>
							</li>
						</ul>
					</li>
					<li class="">
						<b></b>
						<a href="#">网站导航</a>
					</li>
				</ul>
			</div>
		</header>
		<!--2.logo和搜索框-->
		<div id="top_main">
			<!-- 2.1logo图片 -->
			<a class="lf" href="#">
				<img alt="JD" src="../../assets/images/logo-201305.png"/>
			</a>
			<!-- 2.2搜索框和热门搜索 -->
			<div id="search_box">
				<!-- 2.2.1搜索框和按钮 -->
				<div class="search">
					<input class="txtsearch">
					<button>搜索</button>
				</div>
				<!-- 2.2.2热门搜索 -->
				<div class="hot_words">
					<span>热门搜索:</span>
					<a href="#">家纺11月大促</a>
					<a href="#">彩虹电热毯</a>
					<a href="#">阿迪达斯</a>
					<a href="#">中国李宁</a>
					<a href="#">VLONE</a>
				</div>
			</div>
			<!-- 2.3我的京东 -->
			<div id="my_jd">
				我的京东
				<b></b>
				<!-- <a href="#" class="lf">
					<img src="images/jd.jpg">
				</a>
				<ul>
					<li>
						<a href ="#">待发货</a>
					</li>
					<li>
						<a href ="#">待收货</a>
					</li>
					<li>
						<a href ="#">待评价</a>
					</li>
					<li>
						<a href ="#">退换货</a>
					</li>
				</ul> -->
			</div>
			<!-- 2.4去购物车结算 -->
			<div id="shopcar">
				<b></b>
				购物车结算
			</div>
			<!--3.页面主导航栏-->
		</div>
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
			</ul>
		</nav>
	</div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>