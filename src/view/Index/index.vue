<template>
	<div class="w">
		<!--4.Banner广告部份-->
		<div id="banner">
			<!-- 左：分类信息 -->
			<ul id="cate_box">
				<li><a href="#">家用电器</a></li>
				<li><a href="#">手机 / 运营商 / 数码</a></li>
				<li><a href="#">电脑 / 办公</a></li>
				<li><a href="#">家居 / 家具 / 家装 / 厨具</a></li>
				<li><a href="#">男装 / 女装 / 童装 / 内衣</a></li>
				<li><a href="#">美妆 / 个护清洁 / 宠物</a></li>
				<li><a href="#">女鞋 / 箱包 / 钟表 / 珠宝</a></li>
				<li><a href="#">男鞋 / 运动 / 户外</a></li>
				<li><a href="#">房产 / 汽车 / 汽车用品</a></li>
				<li><a href="#">母婴 / 玩具乐器</a></li>
				<li><router-link tag="a" to="/food">食品 / 酒类 / 生鲜 / 特产</router-link> </li>
				<li><a href="#">艺术 / 礼品鲜花 / 农资绿植</a></li>
				<li><a href="#">医药保健 / 计生情趣</a></li>
				<li><a href="#">图书 / 文娱 / 教育 / 电子书</a></li>
				<li><a href="#">机票 / 酒店 / 旅游 / 生活</a></li>
				<li><a href="#">理财 / 众筹 / 白条 / 保险</a></li>
				<li><a href="#">安装 / 维修 / 清洗 / 二手</a></li>
				<li><a href="#">工业品</a></li>
			</ul>
			<!-- 中：banner广告 -->
			<div id="slider_box">
				<!-- 滑动广告 -->
				<el-carousel indicator-position="none" id="slider" height="244px">
					<el-carousel-item>
						<img alt="" src="../../assets/images/index/banner_01.jpg">
					</el-carousel-item>
					<el-carousel-item>
						<img alt="" src="../../assets/images/index/banner_02.jpg">
					</el-carousel-item>
					<el-carousel-item>
						<img alt="" src="../../assets/images/index/banner_01.jpg">
					</el-carousel-item>
					<el-carousel-item>
						<img alt="" src="../../assets/images/index/banner_02.jpg">
					</el-carousel-item>
				</el-carousel>
				<!--<div id="slider">
					<img alt="" src="../../assets/images/index/banner_02.jpg">
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
					</ul>
				</div>-->
				<!-- 三幅小广告 -->
				<div id="ad">
					<a class="lf" href="#"></a><!-- 左箭头 -->
					<a class="rt" href="#"></a><!-- 右箭头 -->
					<ul class="lf">
						<li>
							<router-link to="/productDetail" tag="a" target="_blank">
								<img alt="" src="../../assets/images/index/ad_01.jpg">
							</router-link>
						</li>
						<li class="mid">
							<router-link to="/productDetail" tag="a" target="_blank">
								<img alt="" src="../../assets/images/index/ad_02.jpg">
							</router-link>
						</li>
						<li>
							<router-link to="/productDetail" tag="a" target="_blank">
								<img alt="" src="../../assets/images/index/ad_03.jpg">
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<!-- 右：右边广告 -->
			<div id="extra_focus">
				<!-- 图片 -->
				<a href="#">
					<img src="../../assets/images/index/ad_focus.jpg" alt="">
				</a>
				<!-- 京东快报 -->
				<div class="news">
					<div class="title">
						<b class="lf">京东快报</b>
						<a href="#">更多快报内容&gt;&gt;</a>
					</div>
					<div class="content">
						<ul class="lf">
							<li>
								<a href="#">松鼠好年货两折开抢</a>
							</li>
							<li>
								<a href="#">名酒春晚茅台888</a>
							</li>
							<li>
								<a href="#">四国鲜花定制款低至五折</a>
							</li>
							<li>
								<a href="#">家具年货大采购低至9.9</a>
							</li>
						</ul>
						<ul class="rt">
							<li>
								<a href="#">松鼠好年货两折开抢</a>
							</li>
							<li>
								<a href="#">名酒春晚茅台888</a>
							</li>
							<li>
								<a href="#">四国鲜花定制款低至五折</a>
							</li>
							<li>
								<a href="#">家具年货大采购低至9.9</a>
							</li>
						</ul>
					</div>
				</div>
				<!-- 虚拟内容 -->
				<div id="virtuals">
					<ul>
						<li class="花费">
							<a href="#">
								<s></s>
								话费
								<i></i>
							</a>
						</li>
						<li class="jipiao">
							<a href="#">
								<s></s>
								<router-link to="/jipiao" tag="a">
                  机票
                </router-link>
								<i></i>
							</a>
						</li>
						<li class="caipiao">
							<a href="#">
								<s></s>
								彩票
								<i></i>
							</a>
						</li>
						<li class="youxi">
							<a href="#">
								<s></s>
								游戏
								<i></i>
							</a>
						</li>
						<li class="lvxing">
							<a href="#">
								<s></s>
								旅行
								<i></i>
							</a>
						</li>
						<li class="dianying">
							<a href="#">
								<s></s>
								电影票
								<i></i>
							</a>
						</li>
						<li class="licai">
							<a href="#">
								<s></s>
								理财
								<i></i>
							</a>
						</li>
						<li class="shuidian">
							<a href="#">
								<s></s>
								水电
								<i></i>
							</a>
						</li>

					</ul>
				</div>
			</div>
		</div>
		<!--5.页面主体-->
		<section id="main">
			<!-- 生活橱窗 -->
			<div id="show_box">
				<!-- 文本 -->
				<p>
					生活的橱窗
					<i>每一天展示精彩！</i>
				</p>
				<!-- 8幅光告 -->
				<ul>
					<li>
						<!-- 遮罩层 -->
						<b></b>
						<!-- 文本 -->
						<div>
							<h3>品牌街</h3>
							<h4>三星note</h4>
							<h5>赠送500京东E卡</h5>
							<ul>
								<li><i></i>更多品牌</li>
								<li><i></i>进入品牌街</li>
							</ul>
						</div>
					</li>
					<li class="two">
						<!-- 遮罩层 -->
						<b></b>
						<!-- 文本 -->
						<div>
							<h3>天天低价</h3>
							<h4>坚果礼盒</h4>
							<span>98.5元秒杀</span>
						</div>
					</li>
					<li class="three">
						<!-- 遮罩层 -->
						<b></b>
						<!-- 文本 -->
						<div>
							<h3>好东西</h3>
							<h4>罗技蓝牙键盘</h4>
							<h5>舒适键入249</h5>
							<ul>
								<li><i></i>键盘送红包</li>
								<li><i></i>逛更多&gt;&gt;</li>
							</ul>
						</div>
					</li>
					<li class="tuangou no_margin">
						<!-- 遮罩层 -->
						<b></b>
						<!-- 文本 -->
						<div>
							<h3>今日团购</h3>
							<h4>100元代金券</h4>
							<div>
								<span>团购价</span>
								<b>￥89</b>
								<p>
									<img src="../../assets/images/index/cantuan.png">
								</p>
							</div>
						</div>
					</li>
					<li class="five">
						<!-- 遮罩层 -->
						<b></b>
						<!-- 文本 -->
						<div>
							<h3>京东首发</h3>
							<h4>MOTO X</h4>
							<span>强势回归现货抢</span>
						</div>
					</li>
					<li class="six">
						<!-- 遮罩层 -->
						<b></b>
						<!-- 文本 -->
						<div>
							<h3>优惠券</h3>
							<h4>意尔康男鞋</h4>
							<h5>百元神券限量送</h5>
						</div>
					</li>
					<li class="seven">
						<!-- 遮罩层 -->
						<b></b>
						<!-- 文本 -->
						<div>
							<h3>京东预售</h3>
							<h4>磁带蓝牙音箱</h4>
							<span>送小米手环</span>
						</div>
					</li>
					<li class="no_margin">
						<!-- 遮罩层 -->
						<b></b>
						<!-- 文本 -->
						<div>
							<h3>金融精选</h3>
							<h4>打白条0元购</h4>
							<h5>iPhone6分期购</h5>
						</div>
					</li>
				</ul>
			</div>
			<!-- 3幅广告 -->
			<div class="sf">
				<ul>
					<li>
						<img src="../../assets/images/index/ad_small_01.jpg">
					</li>
					<li>
						<img src="../../assets/images/index/ad_small_02.jpg">
					</li>
					<li>
						<img src="../../assets/images/index/ad_small_03.jpg">
					</li>
				</ul>
			</div>
			<!-- 一楼 -->
			<div class="floor">
				<!-- 头部 -->
				<header>
					<span>1F</span>
					<p>家电通讯</p>
					<ul class="tab lf">
						<li>
							<a href="#">特价商品</a>
						</li>
						<li>
							<a href="#">大家电</a>
						</li>
						<li>
							<a href="#">小家电</a>
						</li>
						<li>
							<a href="#">手机通讯</a>
						</li>
						<li>
							<a href="#">汽车五金</a>
						</li>
					</ul>
					<ul class="link lf">
						<li>
							<a href="#">合约计划说明</a>
						</li>
						<li>
							<a href="#">大家电配送</a>
						</li>
					</ul>
				</header>
				<!-- 内容区域 -->
				<aside class="lf_list">
					<ul>
						<li>
							<a href="#">手机</a>
						</li>
						<li>
							<a href="#">手机配件</a>
						</li>
						<li>
							<a href="#">生活电器</a>
						</li>
						<li>
							<a href="#">出港电器</a>
						</li>
						<li>
							<a href="#">个户健康</a>
						</li>
						<li>
							<a href="#">五金家装</a>
						</li>
						<li>
							<a href="#">冰柜/冰吧</a>
						</li>
						<li>
							<a href="#">空调</a>
						</li>
						<li>
							<a href="#">平板电视</a>
						</li>
						<li>
							<a href="#">冰箱</a>
						</li>
						<li>
							<a href="#">洗衣机</a>
						</li>
						<li>
							<a href="#">烟机/灶具</a>
						</li>
						<li>
							<a href="#">家庭影院</a>
						</li>
						<li>
							<a href="#">汽车用品</a>
						</li>
						<li>
							<a href="#">话费补助</a>
						</li>
						<li>
							<a href="#">热水器</a>
						</li>
					</ul>
					<p>
						<img src="../../assets/images/index/fl_01.jpg">
					</p>
				</aside>
				<!-- 中间 -->
				<div class="mid_list">
					<dl>
						<dt>
							<img src="../../assets/images/index/fl_dl_01.jpg">
						</dt>
						<dd>
							<a href="#">48英寸智能电视2499，55英寸智能电视3499</a>
						</dd>
						<dd class="text">
							送澳门风云2电影票
						</dd>
					</dl>
					<!-- 大图像 -->
					<div>
						<img src="../../assets/images/index/fl_ad_01.jpg">
					</div>

					<dl>
						<dt>
							<img src="../../assets/images/index/fl_dl_02.jpg">
						</dt>
						<dd>
							<a href="#">moto新品首发</a>
						</dd>
						<br>
						<dd class="text">
							2月5日10:30抢
						</dd>
					</dl>
					<dl>
						<dt>
							<img src="../../assets/images/index/fl_dl_03.jpg">
						</dt>
						<dd>
							<a href="#">小家电--加一元即享买一送一</a>
						</dd>
						<dd class="text">
							另有疯狂加价购
						</dd>
					</dl>
					<dl>
						<dt>
							<img src="../../assets/images/index/fl_dl_04.jpg">
						</dt>
						<dd>
							<a href="#">大神X7现货开抢</a>
						</dd>
						<br>
						<dd class="text">
							￥1699.000
						</dd>
					</dl>
					<dl>
						<dt>
							<img src="../../assets/images/index/fl_dl_05.jpg">
						</dt>
						<dd>
							<a href="#">大家电-年前收货！全场狂降！</a>
						</dd>
						<dd class="text">
							7kg洗衣机998元秒杀
						</dd>
					</dl>
					<dl>
						<dt>
							<img src="../../assets/images/index/fl_dl_06.jpg">
						</dt>
						<dd>
							<a href="#">这就是范儿！有范儿才有未来！</a>
						</dd>
					</dl>
					<dl>
						<dt>
							<img src="../../assets/images/index/fl_dl_07.jpg">
						</dt>
						<dd>
							<a href="#">回家路上，车品护航</a>
						</dd>
						<br>
						<dd class="text">
							年底大放血！
						</dd>
					</dl>
				</div>
				<!-- 右边 -->
				<aside class="rt">
					<ul>
						<li>
							<img src="../../assets/images/index/rBEQWVFQLqgIAAAAAAAFbgvhBqMAAC0MAP_3cIAAAWG414.gif">
						</li>
						<li>
							<img src="../../assets/images/index/537b3138N3205302e.jpg">
						</li>
						<li>
							<img src="../../assets/images/index/53829f6eNa98427dc.jpg">
						</li>
						<li>
							<img src="../../assets/images/index/rBEhUlHmCN0IAAAAAAASpGQ8IDYAABK2AP_yHEAABK8207.jpg">
						</li>
						<li>
							<img src="../../assets/images/index/537b316bN35574fff.jpg">
						</li>
						<li>
							<img src="../../assets/images/index/54caf3a2N56357d7c.jpg">
						</li>
						<li>
							<img src="../../assets/images/index/537b3173Ne74bf3cf.jpg">
						</li>
						<li>
							<img src="../../assets/images/index/537b3152Nf0573a0d.jpg">
						</li>
						<li>
							<img src="../../assets/images/index/537b3130N7591211b.jpg">
						</li>
						<li>
							<img src="../../assets/images/index/rBEbRlN5zCsIAAAAAAALfFfJRv8AACGGgO__3sAAAuU660.jpg">
						</li>
					</ul>
					<!-- 图像 -->
					<img src="../../assets/images/index/fl_ad_02.jpg">
				</aside>
			</div>
			<!-- 热门晒单 -->
			<div id="content_other">
				<!-- 热门晒单1 -->
				<div class="share">
					<!-- 热门晒单的文字 -->
					<p>热门晒单</p>
					<!-- 热门晒单的内容 -->
					<ul>
            <li>
              <!-- 左侧图片 -->
              <p>
                <img src="../../assets/images/index/share_01.jpg">
                <i class="shai"></i>
              </p>
              <!-- 右侧文本 -->
              <div>
                <h3>
                  <router-link to="/shaidan" tag="a">
                    咔悠YOYO4.0蓝牙音箱低音炮立体声音响
                  </router-link>
                </h3>
                <p>
                  <router-link to="/shaidan" tag="a">
                    音质还可以不错很大声很好看
                  </router-link>
                </p>
              </div>
            </li>
						<li class="li_one">
							<!-- 左侧图片 -->
							<p>
								<img src="../../assets/images/index/share_02.jpg">
								<i class="shai"></i>
							</p>
							<!-- 右侧文本 -->
							<div>
								<h3>
                  <router-link to="/shaidan" tag="a">
                    [晒单贴]出乎意料的京东，神气的泰富高焖烧壶
                  </router-link>
								</h3>
								<p>
									<a href="#">昨晚在京东10点下的单，今天中午就送到了，京东的快递小哥实在神速呀！而且态度也好！</a>
								</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="share">
					<!-- 热门晒单的文字 -->
					<p>热门晒单</p>
					<!-- 热门晒单的内容 -->
					<ul>
						<li>
							<!-- 左侧图片 -->
							<p>
								<img src="../../assets/images/index/share_01.jpg">
								<i class="shai"></i>
							</p>
							<!-- 右侧文本 -->
							<div>
								<h3>
									<router-link to="/shaidan" tag="a">
                    咔悠YOYO4.0蓝牙音箱低音炮立体声音响
                  </router-link>
								</h3>
								<p>
                  <router-link to="/shaidan" tag="a">
                    音质还可以不错很大声很好看
                  </router-link>
								</p>
							</div>
						</li>
						<li class="li_one">
							<!-- 左侧图片 -->
							<p>
								<img src="../../assets/images/index/share_02.jpg">
								<i class="shai"></i>
							</p>
							<!-- 右侧文本 -->
							<div>
								<h3>
                  <router-link to="/shaidan" tag="a">
                    [晒单贴]出乎意料的京东，神气的泰富高焖烧壶
                  </router-link>
								</h3>
								<p>
									<a href="#">昨晚在京东10点下的单，今天中午就送到了，京东的快递小哥实在神速呀！而且态度也好！</a>
								</p>
							</div>
						</li>
					</ul>
				</div>
				<!-- 热门晒单2 -->
				<div class="more">
					<!-- 在线读书 -->
					<div class="reading">
						<p>
							<b class="lf">在线读书</b>
							<a class="rt" href="#">更多在线读书&gt;&gt;</a>
						</p>
						<div>
							<img class="lf" src="../../assets/images/index/reading.jpg">
							<ul>
								<li>
									<b></b>
									<a href="#">《来到地球第一天》新书特惠</a>
								</li>
								<li>
									<b></b>
									<a href="#">《袁腾飞讲先秦》（套装两全册）</a>
								</li>
								<li>
									<b></b>
									<a href="#">《只为成功找方法》升职宝典</a>
								</li>
								<li>
									<b></b>
									<a href="#">《如果世界只有我和你》蔡骏荐</a>
								</li>
							</ul>
						</div>
					</div>
					<!-- 订阅信息 -->
					<div class="order">
						<p>订阅促销信息</p>
						<input value="请输入您的Email地址">
						<button>订阅</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>

    export default {
        name: "index"
    }
</script>

<style scoped src="../../assets/style/index.css"></style>