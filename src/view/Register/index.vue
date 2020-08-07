<template>
	<div>
		<header id="top">
			<div class="reg_top">
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
				<a href="#">关于我们</a>&nbsp;|&nbsp;<a href="#">联系我们</a>&nbsp;|&nbsp;<a href="#">人才招聘</a>&nbsp;|&nbsp;<a
					href="#">商家入驻</a>&nbsp;|&nbsp;<a href="#">广告服务</a>&nbsp;|&nbsp;<a href="#">手机京东</a>&nbsp;|&nbsp;<a
					href="#">友情链接</a>&nbsp;|&nbsp;<a href="#">销售联盟</a>&nbsp;|&nbsp;<a href="#">京东社区</a>&nbsp;|&nbsp;<a
					href="#">京东公益</a>
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

<style scoped>
	/* 欢迎注册头标签 */
	a{
		color:black;
		text-decoration:none;
	}

	#top{
		width:1200px;
		height:50px;
		line-height:10px;
		margin:10px auto;
		background:#f7f7f7;
		border-bottom:2px solid red;
	}
	h3.wel{
		float:left;
		margin-top:20px;
		margin-left:40px;
	}
	p.p_log{
		float:right;
		margin-top:20px;
		margin-right:40px;
	}

	/* 主体部分 */
	ul,li{
		margin:0px;
		padding:0px;
		list-style:none;
	}
	ul.message{
		width:1200px;
		height:400px;
		margin:10px auto;
		/*border:1px solid black;*/
	}
	ul.message li{
		text-align:center;
		line-height:50px;
		font-size:25px;
		color:#555555;
		margin:20px;
	}
	ul.message li b{
		display:block;
		line-height:75px;
		width:180px;
		height:10px;
		margin-left:330px;
	}
	ul.message li.other{
		font-size:15px;
		color:#999999;
	}
	ul.message li.other input.button_sub{
		width:200px;
		height:50px;
		background-color:red;
		border:0px;
		font-size:20px;
		color:white;
	}
	/* 页脚部分 */
	#footer{
		margin-top:50px;
		height:100px;
		border: 1px solid transparent;
		border-top-color: black;
	}
	#footer div.foot_one{
		margin-top:50px;
		text-align:center;
		font-size:14px;
	}
	#footer div.foot_one a{
		color:red;
	}
	#footer div.foot_two{
		margin-top:50px;
		text-align:center;
		font-size:14px;
	}
</style>