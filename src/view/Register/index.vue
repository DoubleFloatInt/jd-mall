<template>
	<div>
		<header id= "top">
			<div class="reg_top">
				<img src ="../../assets/images/jddog.jpg">
				<h3 class="wel">欢迎注册</h3>
				<p class="p_log">
					已有帐号？
					<a href="#" class="log_on">请登录&gt;&gt;</a>
				</p>
			</div>
		</header>

		<div class="main">
			<ul class="message">
				<li>
					<b>手机号：</b>
					<input name="txtphonenum">
				</li>
				<li>
					<b>短信验证码：</b>
					<input name="txtsms">
				</li>
				<li>
					<b>登陆密码：</b>
					<input name="txtpwd">
				</li>
				<li>
					<b>确认登陆密码：</b>
					<input name="txtenterpwd">
				</li>
				<li class="other">
					<form>
						<input type="checkbox">同意协议并注册
						<a href="#">《京东用户协议》</a>
						<br>
						<input type="submit" value="完成注册" class="button_sub">
					</form>
				</li>
			</ul>
		</div>

		<footer id="footer">
			<div class="foot_one">
				<a href="#">关于我们</a>&nbsp;|&nbsp;<a href="#">联系我们</a>&nbsp;|&nbsp;<a href="#">人才招聘</a>&nbsp;|&nbsp;<a href="#">商家入驻</a>&nbsp;|&nbsp;<a href="#">广告服务</a>&nbsp;|&nbsp;<a href="#">手机京东</a>&nbsp;|&nbsp;<a href="#">友情链接</a>&nbsp;|&nbsp;<a href="#">销售联盟</a>&nbsp;|&nbsp;<a href="#">京东社区</a>&nbsp;|&nbsp;<a href="#">京东公益</a>
			</div>
			<div class="foot_two">
				Copyright © 2004-2014 京东JD.com 版权所有
			</div>
		</footer>
	</div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped src="../../assets/style/registered.css">
</style>