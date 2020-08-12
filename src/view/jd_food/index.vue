<template>
  <div>
  <!-- 广告 -->
  <div id="ad">
    <img src="../../assets/images/images/shipinyinliao.jpg" alt="广告">
  </div>
  <!-- logo和搜索框 -->
  <div id="search">
    <div class="logo lf">
      <router-link to="/" tag="a">
        <img src="../../assets/images/images/logo.png" alt="logo">
      </router-link>
    </div>
    <!-- 食品饮料 -->
    <p class="food_drink lf">
                <span>
                    食品饮料
                </span>
    </p>
    <!-- 全部分类 -->
    <div class="fenlei lf">
      <a href="#">全部分类</a>
      <ul>
        <li><a href="#">家用电器</a></li>
        <li><a href="#">手机</a></li>
        <li><a href="#">运营商</a></li>
        <li><a href="#">数码</a></li>
        <li><a href="#">电脑</a></li>
        <li><a href="#">办公</a></li>
      </ul>
    </div>
    <!--搜索框 -->
    <div id="search_box">
      <!--2.2.1 搜索框和按钮-->
      <div class="search">
        <input type="text" class="txtSearch" placeholder="零食" onclick="clear()">
        <button>搜索</button>
      </div>
      <!--2.2.2 热门搜索-->
      <div class="hot_words">
        <a href="#">食用油调味</a>
        <a href="#">牛奶乳品</a>
        <a href="#">饮料冲调</a>
        <a href="#">坚果</a>
        <a href="#">米面杂粮</a>
      </div>
    </div>
    <!-- 购物车 -->
    <div id="shoppingCar">
      <a href="#">我的购物车</a>
      <span class="sanjiao"></span>
    </div>
  </div>
  <div>
    <nav id="nav">
      <p>
        <span>食品饮料</span>
      </p>
      <ul>
        <li>
          <a href="#">休闲食品</a>
          <i></i>
        </li>
        <li>
          <a href="#">饮料冲调</a>
          <i></i>
        </li>
        <li>
          <a href="#">粮油调味</a>
          <i></i>
        </li>
        <li>
          <a href="#">茗茶</a>
        </li>
      </ul>
    </nav>
  </div>
  <section id="aside">
    <!-- 侧边栏 -->
    <ul>
      <li>
        <a href="#">进口食品
          <i class="rt">
            <img src="../../assets/images/images/jiantou.png" alt="">
          </i>
        </a>
        <nav>
          <a href="#">进口牛奶</a>
          <i></i>
          <a href="#">巧克力</a>
          <i></i>
          <a href="#">橄榄油</a>
          <a href="#">饼干蛋糕</a>
          <i></i>
        </nav>
        <!-- 子类盒子 -->
        <div id="sub_cate_box">
          <!--关闭-->
          <div class="close" onclick="document.getElementById('sub_cate_box').style.display='none';">x</div>
          <!---具体分类信息-->
          <div class="sub_cate_content">
            <dl>
              <dt class="title">
                <a href="#">糖巧</a>
              </dt>
              <dd>
                <a href="#">礼盒</a>
                <i></i>
                <a href="#">牛奶巧</a>
                <i></i>
                <a href="#">黑巧克力</a>
                <i></i>
                <a href="#">松露</a>
                <i></i>
                <a href="#">排块</a>
                <i></i>
                <a href="#">奶糖</a>
                <i></i>
                <a href="#">口香糖</a>
                <i></i>
                <a href="#">软糖</a>
                <i></i>
                <a href="#">棒棒糖</a>
                <i></i>
                <a href="#">润喉糖</a>
                <i></i>
                <a href="#">棉花糖</a>
              </dd>
            </dl>
            <dl>
              <dt class="title">
                <a href="#">糖巧</a>
              </dt>
              <dd>
                <a href="#">礼盒</a>
                <i></i>
                <a href="#">牛奶巧</a>
                <i></i>
                <a href="#">黑巧克力</a>
                <i></i>
                <a href="#">松露</a>
                <i></i>
                <a href="#">排块</a>
                <i></i>
                <a href="#">奶糖</a>
                <i></i>
                <a href="#">口香糖</a>
                <i></i>
                <a href="#">软糖</a>
                <i></i>
                <a href="#">棒棒糖</a>
                <i></i>
                <a href="#">润喉糖</a>
                <i></i>
                <a href="#">棉花糖</a>
              </dd>
            </dl>
            <dl>
              <dt class="title">
                <a href="#">糖巧</a>
              </dt>
              <dd>
                <a href="#">礼盒</a>
                <i></i>
                <a href="#">牛奶巧</a>
                <i></i>
                <a href="#">黑巧克力</a>
                <i></i>
                <a href="#">松露</a>
                <i></i>
                <a href="#">排块</a>
                <i></i>
                <a href="#">奶糖</a>
                <i></i>
                <a href="#">口香糖</a>
                <i></i>
                <a href="#">软糖</a>
                <i></i>
                <a href="#">棒棒糖</a>
                <i></i>
                <a href="#">润喉糖</a>
                <i></i>
                <a href="#">棉花糖</a>
              </dd>
            </dl>
            <dl>
              <dt class="title">
                <a href="#">糖巧</a>
              </dt>
              <dd>
                <a href="#">礼盒</a>
                <i></i>
                <a href="#">牛奶巧</a>
                <i></i>
                <a href="#">黑巧克力</a>
                <i></i>
                <a href="#">松露</a>
                <i></i>
                <a href="#">排块</a>
                <i></i>
                <a href="#">奶糖</a>
                <i></i>
                <a href="#">口香糖</a>
                <i></i>
                <a href="#">软糖</a>
                <i></i>
                <a href="#">棒棒糖</a>
                <i></i>
                <a href="#">润喉糖</a>
                <i></i>
                <a href="#">棉花糖</a>
              </dd>
            </dl>
            <dl>
              <dt class="title">
                <a href="#">糖巧</a>
              </dt>
              <dd>
                <a href="#">礼盒</a>
                <i></i>
                <a href="#">牛奶巧</a>
                <i></i>
                <a href="#">黑巧克力</a>
                <i></i>
                <a href="#">松露</a>
                <i></i>
                <a href="#">排块</a>
                <i></i>
                <a href="#">奶糖</a>
                <i></i>
                <a href="#">口香糖</a>
                <i></i>
                <a href="#">软糖</a>
                <i></i>
                <a href="#">棒棒糖</a>
                <i></i>
                <a href="#">润喉糖</a>
                <i></i>
                <a href="#">棉花糖</a>
              </dd>
            </dl>
            <dl>
              <dt class="title">
                <a href="#">糖巧</a>
              </dt>
              <dd>
                <a href="#">礼盒</a>
                <i></i>
                <a href="#">牛奶巧</a>
                <i></i>
                <a href="#">黑巧克力</a>
                <i></i>
                <a href="#">松露</a>
                <i></i>
                <a href="#">排块</a>
                <i></i>
                <a href="#">奶糖</a>
                <i></i>
                <a href="#">口香糖</a>
                <i></i>
                <a href="#">软糖</a>
                <i></i>
                <a href="#">棒棒糖</a>
                <i></i>
                <a href="#">润喉糖</a>
                <i></i>
                <a href="#">棉花糖</a>
              </dd>
            </dl>
            <dl>
              <dt class="title">
                <a href="#">糖巧</a>
              </dt>
              <dd>
                <a href="#">礼盒</a>
                <i></i>
                <a href="#">牛奶巧</a>
                <i></i>
                <a href="#">黑巧克力</a>
                <i></i>
                <a href="#">松露</a>
                <i></i>
                <a href="#">排块</a>
                <i></i>
                <a href="#">奶糖</a>
                <i></i>
                <a href="#">口香糖</a>
                <i></i>
                <a href="#">软糖</a>
                <i></i>
                <a href="#">棒棒糖</a>
                <i></i>
                <a href="#">润喉糖</a>
                <i></i>
                <a href="#">棉花糖</a>
              </dd>
            </dl>
            <dl>
              <dt class="title">
                <a href="#">糖巧</a>
              </dt>
              <dd>
                <a href="#">礼盒</a>
                <i></i>
                <a href="#">牛奶巧</a>
                <i></i>
                <a href="#">黑巧克力</a>
                <i></i>
                <a href="#">松露</a>
                <i></i>
                <a href="#">排块</a>
                <i></i>
                <a href="#">奶糖</a>
                <i></i>
                <a href="#">口香糖</a>
                <i></i>
                <a href="#">软糖</a>
                <i></i>
                <a href="#">棒棒糖</a>
                <i></i>
                <a href="#">润喉糖</a>
                <i></i>
                <a href="#">棉花糖</a>
              </dd>
            </dl>
          </div>
        </div>
      </li>
      <li>
        <a href="#">休闲食品
          <i class="rt">
            <img src="../../assets/images/images/jiantou.png" alt="">
          </i>
        </a>
        <nav>
          <a href="#">月饼</a>
          <i></i>
          <a href="#">老字号</a>
          <i></i>
          <a href="#">营养零食</a>
          <a href="#">休闲零食</a>
          <i></i>
          <a href="#">坚果炒货</a>
          <i></i>
        </nav>
      </li>
      <li>
        <a href="#">饮料冲饮
          <i class="rt">
            <img src="../../assets/images/images/jiantou.png" alt="">
          </i>
        </a>
        <nav>
          <a href="#">饮料</a>
          <i></i>
          <a href="#">牛奶酸奶</a>
          <i></i>
          <a href="#">饮用水</a>
          <a href="#">咖啡奶茶</a>
          <i></i>
        </nav>
      </li>
      <li>
        <a href="#">粮油调味
          <i class="rt">
            <img src="../../assets/images/images/jiantou.png" alt="">
          </i>
        </a>
        <nav>
          <a href="#">大米</a>
          <i></i>
          <a href="#">食用油</a>
          <i></i>
          <a href="#">面</a>
          <i></i>
          <a href="#">杂粮</a>
          <i></i>
        </nav>
      </li>
      <li>
        <a href="#">茗茶
          <i class="rt">
            <img src="../../assets/images/images/jiantou.png" alt="">
          </i>
        </a>
        <nav>
          <a href="#">绿茶</a>
          <i></i>
          <a href="#">铁观音</a>
          <i></i>
          <a href="#">普洱</a>
          <i></i>
          <a href="#">龙井</a>
          <i></i>
        </nav>
      </li>
    </ul>
    <!-- 滚动广告-->
    <div id="slider_box">
      <!--滑动广告-->
      <div id="slider">
        <img src="../../assets/images/images/gundong01.webp" alt="picture">
      </div>
    </div>
    <!-- 5幅图片 -->
    <ul class="little">
      <li>
        <img src="../../assets/images/images/little_01.png" alt="">
      </li>
      <li>
        <img src="../../assets/images/images/little_02.png" alt="">
      </li>
      <li>
        <img src="../../assets/images/images/little_03.png" alt="">
      </li>
      <li>
        <img src="../../assets/images/images/little_04.png" alt="">
      </li>
      <li>
        <img src="../../assets/images/images/little_05.png" alt="">
      </li>
    </ul>
  </section>
  <!-- 热卖商品 -->
  <section id="hot_goods">
    <!-- 图片-->
    <p>
      <img src="../../assets/images/images/hot_goods.jpg.webp" alt="">
    </p>
    <!-- 热卖商品 -->
    <div class="hot_good">
      <ul>
        <li>
          <img src="../../assets/images/images/goods_01.webp" alt="">
          <div>
            <div class="sanzhi">三只松鼠坚果大礼包9袋 网红零食每日坚果干果中秋礼盒碧根果节日送礼团购火红A版1720g（新老包装混发）</div>
            <div class="yiyijiu">￥119.00</div>
          </div>
        </li>
        <li>
          <img src="../../assets/images/images/goods_02.webp" alt="">
          <div>
            <div class="sanzhi">佰薇集红豆薏米茶 薏仁茶花草茶养生茶花茶组合袋泡茶冬瓜荷叶茶蒲公英茶芡实茶包5g*30小包</div>
            <div class="yiyijiu">￥39.90</div>
          </div>
        </li>
        <li>
          <img src="../../assets/images/images/goods_03.webp" alt="">
          <div>
            <div class="sanzhi">蒙牛 特仑苏 有机纯牛奶3.8g蛋白质含量升级 250ml*24 梦幻盖礼盒装（新老包装随机发货）</div>
            <div class="yiyijiu">￥187.20</div>
          </div>
        </li>
        <li>
          <img src="../../assets/images/images/goods_04.webp" alt="">
          <div>
            <div class="sanzhi">乐品乐茶2020新茶信阳毛尖茶叶绿茶雨前嫩芽春茶散装浓香型250g(125g*2罐)</div>
            <div class="yiyijiu">￥99.00</div>
          </div>
        </li>
        <li>
          <img src="../../assets/images/images/goods_05.webp" alt="">
          <div>
            <div class="sanzhi">鲁花 食用油 5S物理压榨 压榨一级 花生油 6.18L（京东定制）</div>
            <div class="yiyijiu">￥179.90</div>
          </div>
        </li>

        <li>
          <img src="../../assets/images/images/goods_06.webp" alt="">
          <div>
            <div class="sanzhi">金龙鱼 东北大米 乳玉皇妃稻香贡米 5kg</div>
            <div class="yiyijiu">￥99.00</div>
          </div>
        </li>

      </ul>
    </div>
    <!-- 休闲食品 -->
    <div>
      <!--标题图片 -->
      <div>
        <img src="../../assets/images/images/xiuxian.jpg.webp" alt="">
      </div>
      <!-- 内容图片-->
      <div class="content_img">
        <!-- 左侧大图 -->
        <div class="binggan">
          <img src="../../assets/images/images/binggan.jpg.webp" alt="">
        </div>
        <!-- 右侧多个图片 -->
        <ul>
          <li>
            <img src="../../assets/images/images/weilong.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              卫龙 辣条 网红办公室怀旧小吃 儿时豆干豆皮辣片休闲零食 经典香辣味大面筋68g/袋（凑单零食商品）
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥2.50
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/yuanshi.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              源氏 网红休闲零食 怀旧老式大辣片 辣条豆干豆皮年货 200g
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥5.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/liangpin.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              良品铺子 鹌鹑蛋卤蛋铁蛋五香味熟食休闲零食小吃小袋独立包装128g
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥24.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/sanzhi.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              三只松鼠小贱麻辣味小米锅巴 休闲零食地方特产膨化食品儿童食品小吃锅巴60g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥8.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/xufu.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              徐福记 小叭叭 米格玛糙米卷 能量棒 粗粮谷物夹心米果卷膨化食品饼干休闲零食品散装混合口味大礼包425g
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥9.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/mimi.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              咪咪 虾条 虾味 怀旧好吃膨化零食大礼包 网红休闲小点心糕点（18g*20包）360g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥13.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/mahua.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              良品铺子 香酥大麻花天津风味零食小吃传统糕点休闲食品小袋装160g
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥6.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/kebike.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              可比克薯片 番茄味105g小包装儿童膨化网红零食办公室休闲食品送女友好吃的小吃
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥9.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/xiuxianlingshi.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              三只松鼠休闲零食膨化小吃薯条原味小贱美式薯条75g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥10.80
            </div>
          </li>

          <li>
            <img src="../../assets/images/images/xiuxianlingshi_02.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              三只松鼠休闲零食天津风味美食小吃小麻花黑糖味悟空麻花108g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥2.50
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 饼干蛋糕-->
    <div>
      <!--标题图片 -->
      <div class="top_img">
        <img src="../../assets/images/images/binggandangao.jpg.webp" alt="">
      </div>
      <!-- 内容图片-->
      <div class="content_img">
        <!-- 左侧大图 -->
        <div class="binggan">
          <img src="../../assets/images/images/left_binggan.jpg.webp" alt="">
        </div>
        <!-- 右侧多个图片 -->
        <ul>
          <li>
            <img src="../../assets/images/images/taiping.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              太平 梳打饼干 奶盐味 400g苏打饼干咸味饼干零食(新老包装随机发货)
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥11.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/gangrong.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              港荣蒸蛋糕 奶香味900g/箱 饼干蛋糕 营养早餐食品 手撕面包口袋吐司 休闲零食小吃
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥42.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/suicui.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              良品铺子酥脆薄饼海苔味早餐饼干薯片儿童零食休闲零食网红食品小吃小零食300g
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥21.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/haoliyou.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              Orion 好丽友 营养早餐点心零食 礼盒 巧克力派 30枚 1020g/盒（新老包装随机发货）
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥30.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/haochidian.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              好吃点 熊字饼115g休闲零食早餐饼干点心
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥2.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/gaoduan.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              良品铺子高端零食 手撕面包棒 糕点面包营养早餐即食小吃750g
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥34.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/manyue.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              三只松鼠蔓越莓曲奇 饼干蛋糕网红儿童零食早餐食品点心薄脆饼干100g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥15.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/rousongbing.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              三只松鼠黄金肉松饼 蛋糕早餐面包办公室特色小吃休闲零食网红点心456g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥38.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/haochidian.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              好吃点 香脆核桃饼108g休闲零食早餐饼干点心
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥5.90
            </div>
          </li>

          <li>
            <img src="../../assets/images/images/daliyuan.jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              达利园 法式软面包香奶味360g休闲零食早餐面包蛋糕点心
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥8.90
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 坚果蜜饯 -->
    <div>
      <!--标题图片 -->
      <div class="top_img">
        <img src="../../assets/images/images/jianguo.jpg.webp" alt="">
      </div>
      <!-- 内容图片-->
      <div class="content_img">
        <!-- 左侧大图 -->
        <div class="binggan">
          <img src="../../assets/images/images/jianguomijian.jpg.webp" alt="">
        </div>
        <!-- 右侧多个图片 -->
        <ul>
          <li>
            <img src="../../assets/images/images/loulan.cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              楼兰蜜语 精选一等五星和田红枣500g*2袋 蜜饯果干 新疆特产 和田大枣可夹核桃 精选新疆大枣 量贩装零食
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥43.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/mangguo.cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              三只松鼠芒果干 蜜饯果干芒果片休闲零食办公室小吃果脯水果干116g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥9.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/banli.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              良品铺子 板栗休闲零食干果炒货栗子袋装孕妇儿童零食小吃即食甘栗仁80g
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥15.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/xinjiangcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              好想你 新疆和田大红枣夹核桃果干休闲零食特产网红食品大枣夹核桃218g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥19.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/qiaqiacc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              洽洽 坚果炒货 休闲零食 五香瓜子500g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥24.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/meiguicc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              三只松鼠玫瑰红葡萄干 蜜饯果干休闲零食新疆特产120g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥10.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/xiaweiyicc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              三只松鼠奶油味夏威夷果 坚果炒货孕妇坚果每日坚果干果零食160g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥37.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/baicaocc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              百草味 蜜饯果干休闲零食特产水果干 口袋鲜果办公室零食 冻干榴莲干25g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥10.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/baicao_2cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              百草味 水果干办公室休闲零食送女友 童年零食蜜饯果干果脯 草莓干100g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥8.80
            </div>
          </li>

          <li>
            <img src="../../assets/images/images/baicao_3cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              百草味 果脯蜜饯水果干零食休闲食品办公室小吃 黄桃干100g/袋
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥26.90
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 牛奶 -->
    <div>
      <!--标题图片 -->
      <div class="top_img">
        <img src="../../assets/images/images/niunai.jpg.webp" alt="">
      </div>
      <!-- 内容图片-->
      <div class="content_img">
        <!-- 左侧大图 -->
        <div class="binggan">
          <img src="../../assets/images/images/niunai1.jpg.webp" alt="">
        </div>
        <!-- 右侧多个图片 -->
        <ul>
          <li>
            <img src="../../assets/images/images/niunai2cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              荷兰进口 乐荷（vecozuivel）全脂有机纯牛奶 200ml*24盒家庭装                            <!-- 金钱-->
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥43.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/niunai3cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              伊利 舒化无乳糖牛奶高钙型220ml*24盒/箱（礼盒装）
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥219.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/niunai4cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              荷兰进口 乐荷（vecozuivel）全脂有机纯牛奶 1L*6盒礼盒装                            <!-- 金钱-->
            </div>
            <div class="money">
              ￥96.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/niunai5cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              德国DMK进口牛奶 欧德堡（Oldenburger）全脂纯牛奶1L*12盒 早餐奶 高钙奶 整箱家庭装                            <!-- 金钱-->
            </div>
            <div class="money">
              ￥169.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/niunai6cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              天润 TERUN 奶啤乳酸菌风味牛奶饮品 300ml*12罐 (新老包装随机发货)                            <!-- 金钱-->
            </div>
            <div class="money">
              ￥119.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/niunai7cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              德国DMK进口牛奶 欧德堡（Oldenburger）全脂纯牛奶200ml*24盒 早餐奶 高钙奶 整箱装                            <!-- 金钱-->
            </div>
            <div class="money">
              ￥65.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/niunai8cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              新希望 香蕉牛奶200ml*12盒 礼盒装（乳制品非饮料）                            <!-- 金钱-->
            </div>
            <div class="money">
              ￥69.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/niunai9cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              旺旺 旺仔牛奶 儿童牛奶早餐奶 原味 125ml*24                            <!-- 金钱-->
            </div>
            <div class="money">
              ￥33.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/niunai10cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              旺旺 旺仔牛奶 6原味+6原味O泡（组合装） 245ml*12                            <!-- 金钱-->
            </div>
            <div class="money">
              ￥55.50
            </div>
          </li>

          <li>
            <img src="../../assets/images/images/niunai11cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              蒙牛 特仑苏 纯牛奶 250ml*16 礼盒装                            <!-- 金钱-->
            </div>
            <div class="money">
              ￥85.90
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 速食冲调 -->
    <div>
      <!--标题图片 -->
      <div class="top_img">
        <img src="../../assets/images/images/sushijpg.webp" alt="">
      </div>
      <!-- 内容图片-->
      <div class="content_img">
        <!-- 左侧大图 -->
        <div class="binggan">
          <img src="../../assets/images/images/sushi11cc_320x320.webp" alt="">
        </div>
        <!-- 右侧多个图片 -->
        <ul>
          <li>
            <img src="../../assets/images/images/sushi2cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              北大荒 东北黑蜂 椴树雪蜜 纯蜂蜜1000g 建三江 冲调水饮 （新老包装交替发货）
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥126.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/sushi3cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              雀巢（Nestle）咖啡 速溶 1+2 原味 微研磨 冲调饮品 100条1500g（新老包装交替发货）
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥103.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/sushi4cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              冠生园 蜂蜜 中华老字号 百花蜜 900g
            </div>
            <div class="money">
              ￥42.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/sushi5cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              麦斯威尔 特浓速溶咖啡优惠超值装90送10条（1.3KG/盒）（新老包装交替发货）
            </div>
            <div class="money">
              ￥89.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/sushi6cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              韩国进口（SAMYANG） 三养辣鸡肉味拌面 700g（140g*5包入）超辣火鸡面方便面袋面速食零食品
            </div>
            <div class="money">
              ￥28.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/sushi7cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              吉意欧GEO醇品系列蓝山风味咖啡豆500g 精选阿拉比卡 中度烘培 纯黑咖啡
            </div>
            <div class="money">
              ￥59.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/sushi8cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              网红美食 氏族人 嗨吃家 酸辣粉 冲泡型家庭分享装 122g*6桶整箱
            </div>
            <div class="money">
              ￥35.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/sushi9cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              桂格 麦果脆 多种莓果 代餐谷物烘焙麦片420g 加酸奶更美味 即食早餐水果麦片 不含反式脂肪酸
            </div>
            <div class="money">
              ￥25.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/sushi10cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              双汇王中王 火腿肠 60g*10支/600g装 香肠火腿
            </div>
            <div class="money">
              ￥20.90
            </div>
          </li>

          <li>
            <img src="../../assets/images/images/sushi11cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              山萃 中粮 冲饮谷物 即食 水果坚果 混合麦片 681g/袋
            </div>
            <div class="money">
              ￥49.80
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 缤纷水饮 -->
    <div>
      <!--标题图片 -->
      <div class="top_img">
        <img src="../../assets/images/images/binfen.jpg.webp" alt="">
      </div>
      <!-- 内容图片-->
      <div class="content_img">
        <!-- 左侧大图 -->
        <div class="binggan">
          <img src="../../assets/images/images/binfen1.jpg.webp" alt="">
        </div>
        <!-- 右侧多个图片 -->
        <ul>
          <li>
            <img src="../../assets/images/images/binfen2cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              农夫山泉 饮用水 饮用天然水(适合婴幼儿) 1L*12瓶 整箱装
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥89.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/binfen3cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              农夫山泉 饮用水 饮用天然水550ml普通装1*24瓶 整箱装
            </div>    <!-- 金钱-->
            <div class="money">
              ￥32.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/binfen4cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              屈臣氏（Watsons）香草味苏打汽水 苏打水汽水饮料 调酒净饮推荐 330ml*24听 整箱装
            </div>
            <div class="money">
              ￥86.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/binfen5cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              百岁山 饮用天然矿泉水 348ml*24瓶 整箱装
            </div>
            <div class="money">
              ￥39.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/binfen6jpgcc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              名仁 苏打水饮料 无糖无汽弱碱性水 375ml*24瓶 整箱装
            </div>
            <div class="money">
              ￥61.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/binfen7cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              农夫山泉 饮用水 饮用天然水380ml 1*24瓶 整箱装
            </div>
            <div class="money">
              ￥31.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/binfen8cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              农夫山泉 东方树叶茉莉花茶500ml*15瓶 茶饮料 整箱装（新老保质期随机发货）
            </div>
            <div class="money">
              ￥63.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/binfen9cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              维他奶 维他低糖柠檬茶饮料250ml*24盒 低糖无脂肪 柠檬果汁味红茶 低糖宅家饮料 家庭整箱装
            </div>
            <div class="money">
              ￥58.50
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/binfen10cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              百岁山 饮用天然矿泉水 570ml*24瓶 整箱装
            </div>
            <div class="money">
              ￥49.90
            </div>
          </li>

          <li>
            <img src="../../assets/images/images/binfen11cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              屈臣氏（Watsons）苏打汽水 苏打水汽水饮料 0糖0卡路里气泡水 调酒净饮推荐 330ml*24罐 整箱装
            </div>
            <div class="money">
              ￥88.00
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 米面杂粮 -->
    <div>
      <!--标题图片 -->
      <div>
        <img src="../../assets/images/images/mimianjpg.webp" alt="">
      </div>
      <!-- 内容图片-->
      <div class="content_img">
        <!-- 左侧大图 -->
        <div class="binggan">
          <img src="../../assets/images/images/mimian1.jpg.webp" alt="">
        </div>
        <!-- 右侧多个图片 -->
        <ul>
          <li>
            <img src="../../assets/images/images/mimian2cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 绿豆 （可发豆芽 打豆浆 东北 五谷 杂粮 粗粮 真空装 大米伴侣）1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥19.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/mimian3cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 五常稻花香 东北大米5kg（绿豆伴侣）
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥69.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/mimian4cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 山西黄小米 五谷杂粮 山西特产 小米粥小米黄小米月子米粗粮真空包装家庭袋装2.5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥58.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/mimian5cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 柴火长粒香米 东北大米5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥52.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/mimian6cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 薏仁米（薏米仁 小粒薏米 无添加 五谷杂粮 粗粮 真空装 大米 粥米伴侣 红豆薏米） 1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥25.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/mimian7cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月���田 稻花香大米 东北大米 东北香米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥55.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/mimian8cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 内蒙古绿豆（配黄小米，可发豆芽 打豆浆 五谷杂粮 粗粮 真空装 大米伴侣） 1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥28.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/mimian9cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              福临门 本来长粒香米 东北大米 长粒香 中粮出品 大米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥39.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/mimian10cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 寒地之最 长粒王香米 东北大米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥58.00
            </div>
          </li>

          <li>
            <img src="../../assets/images/images/mimian11cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 五常大米 五常稻花香米 东北大米5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥75.50
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 食用油 -->
    <div>
      <!--标题图片 -->
      <div>
        <img src="../../assets/images/images/you.jpg.webp" alt="">
      </div>
      <!-- 内容图片-->
      <div class="content_img">
        <!-- 左侧大图 -->
        <div class="binggan">
          <img src="../../assets/images/images/you1.jpg.webp" alt="">
        </div>
        <!-- 右侧多个图片 -->
        <ul>
          <li>
            <img src="../../assets/images/images/you2cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 绿豆 （可发豆芽 打豆浆 东北 五谷 杂粮 粗粮 真空装 大米伴侣）1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥19.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/you3cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 五常稻花香 东北大米5kg（绿豆伴侣）
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥69.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/you4cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 山西黄小米 五谷杂粮 山西特产 小米粥小米黄小米月子米粗粮真空包装家庭袋装2.5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥58.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/you5cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 柴火长粒香米 东北大米5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥52.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/you6cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 薏仁米（薏米仁 小粒薏米 无添加 五谷杂粮 粗粮 真空装 大米 粥米伴侣 红豆薏米） 1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥25.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/you7cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 稻花香大米 东北大米 东北香米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥55.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/you8cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 内蒙古绿豆（配黄小米，可发豆芽 打豆浆 五谷杂粮 粗粮 真空装 大米伴侣） 1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥28.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/you9cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              福临门 本来长粒香米 东北大米 长粒香 中粮出品 大米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥39.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/you10cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 寒地之最 长粒王香米 东北大米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥58.00
            </div>
          </li>

          <li>
            <img src="../../assets/images/images/you11cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 五常大米 五常稻花香米 东北大米5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥75.50
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 厨房调料 -->
    <div>
      <!--标题图片 -->
      <div>
        <img src="../../assets/images/images/chufangjpg.webp" alt="">
      </div>
      <!-- 内容图片-->
      <div class="content_img">
        <!-- 左侧大图 -->
        <div class="binggan">
          <img src="../../assets/images/images/chufang1.jpg.webp" alt="">
        </div>
        <!-- 右侧多个图片 -->
        <ul>
          <li>
            <img src="../../assets/images/images/chufang2cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 绿豆 （可发豆芽 打豆浆 东北 五谷 杂粮 粗粮 真空装 大米伴侣）1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥19.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/chufang3cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 五常稻花香 东北大米5kg（绿豆伴侣）
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥69.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/chufang4cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 山西黄小米 五谷杂粮 山西特产 小米粥小米黄小米月子米粗粮真空包装家庭袋装2.5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥58.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/chufang5cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 柴火长粒香米 东北大米5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥52.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/chufang6cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 薏仁米（薏米仁 小粒薏米 无添加 五谷杂粮 粗粮 真空装 大米 粥米伴侣 红豆薏米） 1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥25.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/chufang7cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 稻花香大米 东北大米 东北香米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥55.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/chufang8cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 内蒙古绿豆（配黄小米，可发豆芽 打豆浆 五谷杂粮 粗粮 真空装 大米伴侣） 1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥28.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/chufang9cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              福临门 本来长粒香米 东北大米 长粒香 中粮出品 大米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥39.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/chufang10cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 寒地之最 长粒王香米 东北大米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥58.00
            </div>
          </li>

          <li>
            <img src="../../assets/images/images/chufang11cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 五常大米 五常稻花香米 东北大米5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥75.50
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 茗茶 -->
    <div>
      <!--标题图片 -->
      <div>
        <img src="../../assets/images/images/cha.jpg.webp" alt="">
      </div>
      <!-- 内容图片-->
      <div class="content_img">
        <!-- 左侧大图 -->
        <div class="binggan">
          <img src="../../assets/images/images/cha1.jpg.webp" alt="">
        </div>
        <!-- 右侧多个图片 -->
        <ul>
          <li>
            <img src="../../assets/images/images/cha2cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 绿豆 （可发豆芽 打豆浆 东北 五谷 杂粮 粗粮 真空装 大米伴侣）1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥19.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/cha3cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 五常稻花香 东北大米5kg（绿豆伴侣）
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥69.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/cha4cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 山西黄小米 五谷杂粮 山西特产 小米粥小米黄小米月子米粗粮真空包装家庭袋装2.5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥58.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/cha5cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 柴火长粒香米 东北大米5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥52.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/cha6cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 薏仁米（薏米仁 小粒薏米 无添加 五谷杂粮 粗粮 真空装 大米 粥米伴侣 红豆薏米） 1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥25.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/cha7cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 稻花香大米 东北大米 东北香米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥55.00
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/cha8cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 内蒙古绿豆（配黄小米，可发豆芽 打豆浆 五谷杂粮 粗粮 真空装 大米伴侣） 1kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥28.80
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/cha9cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              福临门 本来长粒香米 东北大米 长粒香 中粮出品 大米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥39.90
            </div>
          </li>
          <li>
            <img src="../../assets/images/images/cha10cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              十月稻田 寒地之最 长粒王香米 东北大米 5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥58.00
            </div>
          </li>

          <li>
            <img src="../../assets/images/images/cha11cc_320x320.webp" alt="">
            <!-- 描述文字-->
            <div class="wenzi">
              柴火大院 五常大米 五常稻花香米 东北大米5kg
            </div>
            <!-- 金钱-->
            <div class="money">
              ￥75.50
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>


  </div>
</template>
<script>
export default {
  name: "jd_food"
}
</script>

<style scoped src="../../assets/style/jd-food.css">

</style>
