<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="shaidan_style.css">
  </head>
  <body>
  <!-- 页面顶部 -->
  <header id = "top">
    <div id = "top_box">
      <img class = "lf" src = "Images/star.jpg">
      <a class = "lf" href = "#">收藏京东</a><!--添加左浮动效果-->
      <ul class = "rt"><!--添加右浮动效果 -->
        <li>
          您好！欢迎来到京东
          <a href = "#">[登录]</a>
          <a href = "#">[免费注册]</a>
        </li>
        <li>
          <b></b><!--边框 -->
          <a href="#">我的订单</a>
        </li>
        <li class = "vip">
          <b></b><!--边框 -->
          <a href="#">会员俱乐部</a>
        </li>
        <li class="dakehu">
          <b></b><!--边框 -->
          <a href="#">企业频道</a>
        </li>
        <li class = "app_jd">
          <b></b><!--边框 -->
          <a href="#">手机京东</a>
        </li>
        <li class = "service">
          <b></b><!--边框 -->
          <a href="#">客户服务</a>
          <!-- 弹出菜单 -->
          <ul>
            <li>
              <a href = "#">帮助中心</a>
            </li>
            <li>
              <a href = "#">售后服务</a>
            </li>
            <li>
              <a href = "#">在线客服</a>
            </li>
            <li>
              <a href = "#">投诉中心</a>
            </li>
            <li>
              <a href = "#">客服邮箱</a>
            </li>
          </ul>
        </li>
        <li>
          <b></b><!--边框 -->
          <a href="#">网站导航</a>
        </li>
      </ul>

    </div>
  </header>
  <!-- 广告 -->
  <div id="ad">
    <img src="Images_2/head.jpg" alt="广告">
  </div>
  <!-- logo和搜索框 -->
  <div id="search">
    <div class="logo lf">
      <img src="Images/logo.png" alt="logo">
    </div>
    <!-- 食品饮料 -->
    <p class="food_drink lf">
            <span>
                热门评论
            </span>
    </p>
    <!-- 全部分类 -->
    <div class="fenlei lf">
      <a href="#">全部分类</a>
      <ul>
        <li><a href="#">品牌鞋</a> </li>
        <li><a href="#">手机</a> </li>
        <li><a href="#">运营商</a> </li>
        <li><a href="#">数码</a> </li>
        <li><a href="#">电脑</a> </li>
        <li><a href="#">办公</a> </li>
      </ul>
    </div>
    <!--搜索框 -->
    <div id="search_box">
      <!--2.2.1 搜索框和按钮-->
      <div class="search">
        <input type="text" class="txtSearch"  placeholder="男鞋" onclick="clear()">
        <button>搜索</button>
      </div>
      <!--2.2.2 热门搜索-->
      <div class="hot_words">

        <a href="#">休闲鞋男</a>
        <a href="#">爱步男鞋</a>
        <a href="#">帆布鞋</a>
        <a href="#">休闲老爹鞋</a>
      </div>
    </div>
    <!-- 购物车 -->
    <div id="shoppingCar">
      <a href="#">我的购物车</a>
      <span class="sanjiao"></span>
    </div>
  </div>
  <!--section-->
  <section id="comments">
    <!-- 侧边 -->
    <aside class="goods">
      <!-- 侧边顶部 -->
      <div class="goods_top">
                <span>
                    宝贝排行榜
                </span>
      </div>
      <!-- 侧边图片 -->
      <ul>
        <li>
          <img src="Images_2/baoluo2657977138.jpg_120x120.jpg" alt="">
          <span>保罗康电热式蜡疗</span>
          <n>￥208.00</n>
          <m>已售出<n>64</n>件</m>
        </li>
        <li>
          <img src="Images_2/huxi22657977138.jpg_120x120.jpg" alt="">
          <span>保罗康电热式蜡疗</span>
          <n>￥208.00</n>
          <m>已售出<n>64</n>件</m>
        </li>
        <li>
          <img src="Images_2/yiyong2657977138.jpg_120x120.jpg" alt="">
          <span>保罗康电热式蜡疗</span>
          <n>￥208.00</n>
          <m>已售出<n>64</n>件</m>
        </li>
        <li>
          <img src="Images_2/yiyong22657977138.jpg_120x120.jpg" alt="">
          <span>保罗康电热式蜡疗</span>
          <n>￥208.00</n>
          <m>已售出<n>64</n>件</m>
        </li>
        <li>
          <img src="Images_2/huxi2657977138.jpg_120x120.jpg" alt="">
          <span>保罗康电热式蜡疗</span>
          <n>￥208.00</n>
          <m>已售出<n>64</n>件</m>
        </li>
        <li>
          <img src="Images_2/huxi2657977138.jpg_120x120.jpg" alt="">
          <span>保罗康电热式蜡疗</span>
          <n>￥208.00</n>
          <m>已售出<n>64</n>件</m>
        </li>

      </ul>
      <!-- 查看更多宝贝 -->
      <div class="ser_goods">
        <a href="#">查看更多宝贝</a>
      </div>
    </aside>
    <!-- 评论界面 -->
    <div class="comment">
      <!-- 评论展示 -->
      <header>
        <!-- 评论展示按钮 -->
        <div class="pingjia">
          评价展示
        </div>
        <!-- 评论分类 -->
        <div class="com_fenlei">
          <input type="radio" name="x" checked>全部
          <input type="radio" name="x">图片(2)
          <input type="radio" name="x">追评(1)
          <input type="radio" name="x">好评(40)
          <input type="radio" name="x">中评(0)
          <input type="radio" name="x">差评(0)
        </div>
      </header>
      <!-- 评论主体-->
      <div class="com_body">
        <!-- 头像 -->
        <div>
          <img src="Images_2/rouxiang_1.png" alt="">
        </div>
        <!-- 星星 -->
        <img  class="xingxing" src="Images_2/wuxing.png" alt="">
        <!-- 评论 -->
        <span>不错哦，还很漂亮，空调里穿着正合适.</span>
        <!-- 图片 -->
        <img src="Images_2/xiejpg.jpg" alt="" >
        <!-- 日期 -->
        <l>黑色 | BLK41 2020-04-30 18:52</l>
      </div>
      <div class="com_body">
        <!-- 头像 -->
        <div class="_1">
          <img src="Images_2/touxiang_2.png" alt="">
        </div>
        <!-- 星星 -->
        <img  class="xingxing" src="Images_2/wuxing.png" alt="">
        <!-- 评论 -->
        <span>之前媳妇在实体店看到，当时媳妇没舍得买，然后我在网上偷偷给她买了，给她一个小惊喜。??，媳妇说很喜欢这种软软的小毛毛，踩着很舒服.</span>
        <!-- 图片 -->
        <img src="Images_2/xie2jpg.jpg" alt="" >
        <!-- 日期 -->
        <l>黑色 | BLK42 2020-06-18 09:18</l>
      </div>
      <div class="com_body">
        <!-- 头像 -->
        <div class="_2">
          <img src="Images_2/touxiang_3.png" alt="">
        </div>
        <!-- 星星 -->
        <img  class="xingxing" src="Images_2/wuxing.png" alt="">
        <!-- 评论 -->
        <span>相当不错满意了，618活动买的，不到1000块，实体店都不打折.</span>
        <!-- 图片 -->
        <img src="Images_2/xie3jpg.jpg" alt="" >
        <!-- 日期 -->
        <l>黑色 | BLK42 2020-06-04 10:00</l>
      </div>
      <div class="com_body">
        <!-- 头像 -->
        <div class="_3">
          <img src="Images_2/touxiang_4.png" alt="">
        </div>
        <!-- 星星 -->
        <img  class="xingxing" src="Images_2/wuxing.png" alt="">
        <!-- 评论 -->
        <span>颜色选了比较好搭配的紫色，大小选了36，平时也是穿36的，因为毛毛的关系所以还是会显得边缘有点大的，喜欢宽松可以选大一码。</span>
        <!-- 图片 -->
        <img src="Images_2/xie4jpg.jpg" alt="" >
        <!-- 日期 -->
        <l>蔚蓝色 | AZUL 40 2020-07-07 10:54</l>
      </div>
      <div class="com_body">
        <!-- 头像 -->
        <div class="_4">
          <img src="Images_2/touxiang5.png" alt="">
        </div>
        <!-- 星星 -->
        <img  class="xingxing" src="Images_2/wuxing.png" alt="">
        <!-- 评论 -->
        <span>是正品，穿了很舒服，其实喜欢粉色但是没有货，所以选择灰色了</span>
        <!-- 图片 -->
        <img src="Images_2/xie5.jpg" alt="" >
        <!-- 日期 -->
        <l>咖啡色 | STT42 2020-06-08 14:29</l>
      </div>
    </div>
  </section>
  <!--6.页面底部-配送信息-->
  <footer id = "foot_box">
    <div>
      <div>
        <img src="Images/gw01.jpg" alt="">
      </div>
      <p><b>购物指南</b></p>
      <ul>
        <li><a href="#">购物流程</a> </li>
        <li><a href="#">会员介绍</a> </li>
        <li><a href="#">团购/机票</a> </li>
        <li><a href="#">常见问题</a> </li>
        <li><a href="#">大家电</a> </li>
        <li><a href="#">联系客服</a> </li>
      </ul>
    </div>
    <div>
      <div>
        <img src="Images/ps02.jpg" alt="">
      </div>
      <p><b>配送方式</b></p>
      <ul>
        <li><a href="#">上门自提</a> </li>
        <li><a href="#">211限定达</a> </li>
        <li><a href="#">配送服务查询</a> </li>
        <li><a href="#">配送费收取标准</a> </li>
        <li><a href="#">海外配送</a> </li>
      </ul>
    </div>f
    <div>
      <div>
        <img src="Images/zf03.jpg" alt="">
      </div>
      <p><b>支付方式</b></p>
      <ul>
        <li><a href="#">货到付款</a> </li>
        <li><a href="#">在线支付</a> </li>
        <li><a href="#">分期付款</a> </li>
        <li><a href="#">邮局汇款</a> </li>
        <li><a href="#">公司转账</a> </li>
      </ul>
    </div>
    <div>
      <div>
        <img src="Images/sh04.jpg" alt="">
      </div>
      <p><b>售后服务</b></p>
      <ul>
        <li><a href="#">售后政策</a> </li>
        <li><a href="#">价格保护</a> </li>
        <li><a href="#">退款说明</a> </li>
        <li><a href="#">返修/退换货</a> </li>
        <li><a href="#">取消订单</a> </li>
      </ul>
    </div>
    <div>
      <div>
        <img src="Images/ts05.jpg" alt="">
      </div>
      <p><b>特色服务</b></p>
      <ul>
        <li><a href="#">夺宝岛</a> </li>
        <li><a href="#">DIY装机</a> </li>
        <li><a href="#">延保服务</a> </li>
        <li><a href="#">京东E卡</a> </li>
        <li><a href="#">节能补贴</a> </li>
        <li><a href="#">京东通信</a> </li>
      </ul>
    </div>
  </footer>
  <!--7.页面底部-备案号信息-->
  <footer id = "footer">
    <div>
			<pre>
				关于我们 | 联系我们 | 人才招聘 | 商家入驻 | 广告服务 | 手机京东 | 友情链接 | 销售联盟 | 京东社区 | 京东公益

					北京市公安局朝阳分局备案编号110105014669 | 京ICP证070359号 | 互联网药品信息服务资格证编号(京)-非经营性-2011-0034
				音像制品经营许可证苏宿批005号 | 出版物经营许可证编号新出发(苏)批字第N-012号 | 互联网出版许可证编号新出网证(京)字150号
							网络文化经营许可证京网文[2011]0168-061号 Copyright © 2004-2014 京东JD.com 版权所有
									京东旗下网站： English Site 拍拍网 网银在线
			</pre>
      <ul>
        <li>
          <img src="Images/jy.jpg" alt="">
        </li>
        <li>
          <img src="Images/kx.jpg" alt="">
        </li>
        <li>
          <img src="Images/cy.jpg" alt="">
        </li>
        <li>
          <img src="Images/cx.jpg" alt="">
        </li>
      </ul>
    </div>
  </footer>
  </body>
  </html>
</template>

<script>
export default {
name: "index.vue"
}
</script>

<style scoped>

</style>