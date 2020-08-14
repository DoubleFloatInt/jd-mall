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
            <div class="sanzhi">
              <a href="#">
                三只松鼠坚果大礼包9袋 网红零食每日坚果干果中秋礼盒碧根果节日送礼团购火红A版1720g（新老包装混发）
              </a>
            </div>
            <div class="yiyijiu">￥119.00</div>
          </div>
        </li>
        <li>
          <img src="../../assets/images/images/goods_02.webp" alt="">
          <div>
            <div class="sanzhi"><a href="#">佰薇集红豆薏米茶 薏仁茶花草茶养生茶花茶组合袋泡茶冬瓜荷叶茶蒲公英茶芡实茶包5g*30小包</a></div>
            <div class="yiyijiu">￥39.90</div>
          </div>
        </li>
        <li>
          <img src="../../assets/images/images/goods_03.webp" alt="">
          <div>
            <div class="sanzhi"><a href="#">蒙牛 特仑苏 有机纯牛奶3.8g蛋白质含量升级 250ml*24 梦幻盖礼盒装（新老包装随机发货）</a></div>
            <div class="yiyijiu">￥187.20</div>
          </div>
        </li>
        <li>
          <img src="../../assets/images/images/goods_04.webp" alt="">
          <div>
            <div class="sanzhi"><a href="#">乐品乐茶2020新茶信阳毛尖茶叶绿茶雨前嫩芽春茶散装浓香型250g(125g*2罐)</a></div>
            <div class="yiyijiu">￥99.00</div>
          </div>
        </li>
        <li>
          <img src="../../assets/images/images/goods_05.webp" alt="">
          <div>
            <div class="sanzhi"><a href="#">鲁花 食用油 5S物理压榨 压榨一级 花生油 6.18L（京东定制）</a></div>
            <div class="yiyijiu">￥179.90</div>
          </div>
        </li>

        <li>
          <img src="../../assets/images/images/goods_06.webp" alt="">
          <div>
            <div class="sanzhi"><a href="#">金龙鱼 东北大米 乳玉皇妃稻香贡米 5kg</a></div>
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
        <ul>
          <li
            v-for="item in xiuxian"
            :key="item.productId"
          >
            <router-link tag="a" :to="'/productDetail?productId=' + item.productId">
              <img :src="item.image" alt="">
              <!-- 描述文字-->
              <div class="wenzi">
                <a href="#">
                  {{item.productName}}
                </a>
              </div>
              <!-- 金钱-->
              <div class="money">
                ￥{{item.price}}
              </div>
            </router-link>
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
          <li
              v-for="item in binggan"
              :key="item.productId"
          >
          <router-link tag="a" :to="'/productDetail?productId=' + item.productId">

              <img :src="item.image" alt="">
              <!-- 描述文字-->
              <div class="wenzi">
                {{item.productName}}
              </div>
              <!-- 金钱-->
              <div class="money">
                ￥{{item.price}}
              </div>
          </router-link>
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
          <li
              v-for="item in jianguo"
              :key="item.productId"
          >
            <router-link tag="a" :to="'/productDetail?productId=' + item.productId">

              <img :src="item.image" alt="">
              <!-- 描述文字-->
              <div class="wenzi">
                {{item.productName}}
              </div>
              <!-- 金钱-->
              <div class="money">
                ￥{{item.price}}
              </div>
            </router-link>
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
          <li
              v-for="item in niunai"
              :key="item.productId"
          >
            <router-link tag="a" :to="'/productDetail?productId=' + item.productId">

              <img :src="item.image" alt="">
              <!-- 描述文字-->
              <div class="wenzi">
                {{item.productName}}
              </div>
              <!-- 金钱-->
              <div class="money">
                ￥{{item.price}}
              </div>
            </router-link>
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
          <li
              v-for="item in chongyin"
              :key="item.productId"
          >
            <router-link tag="a" :to="'/productDetail?productId=' + item.productId">

              <img :src="item.image" alt="">
              <!-- 描述文字-->
              <div class="wenzi">
                {{item.productName}}
              </div>
              <!-- 金钱-->
              <div class="money">
                ￥{{item.price}}
              </div>
            </router-link>
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
          <li
              v-for="item in binfen"
              :key="item.productId"
          >
            <router-link tag="a" :to="'/productDetail?productId=' + item.productId">

              <img :src="item.image" alt="">
              <!-- 描述文字-->
              <div class="wenzi">
                {{item.productName}}
              </div>
              <!-- 金钱-->
              <div class="money">
                ￥{{item.price}}
              </div>
            </router-link>
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
          <li
              v-for="item in mimian"
              :key="item.productId"
          >
            <router-link tag="a" :to="'/productDetail?productId=' + item.productId">

              <img :src="item.image" alt="">
              <!-- 描述文字-->
              <div class="wenzi">
                {{item.productName}}
              </div>
              <!-- 金钱-->
              <div class="money">
                ￥{{item.price}}
              </div>
            </router-link>
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
          <li
              v-for="item in shiyongyou"
              :key="item.productId"
          >
            <router-link tag="a" :to="'/productDetail?productId=' + item.productId">

              <img :src="item.image" alt="">
              <!-- 描述文字-->
              <div class="wenzi">
                {{item.productName}}
              </div>
              <!-- 金钱-->
              <div class="money">
                ￥{{item.price}}
              </div>
            </router-link>
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
          <li
              v-for="item in chufang"
              :key="item.productId"
          >
            <router-link tag="a" :to="'/productDetail?productId=' + item.productId">

              <img :src="item.image" alt="">
              <!-- 描述文字-->
              <div class="wenzi">
                {{item.productName}}
              </div>
              <!-- 金钱-->
              <div class="money">
                ￥{{item.price}}
              </div>
            </router-link>
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
          <li
              v-for="item in mingcha"
              :key="item.productId"
          >
            <router-link tag="a" :to="'/productDetail?productId=' + item.productId">

              <img :src="item.image" alt="">
              <!-- 描述文字-->
              <div class="wenzi">
                {{item.productName}}
              </div>
              <!-- 金钱-->
              <div class="money">
                ￥{{item.price}}
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>


  </div>
</template>

<script>
import {getfoodProductBycateId} from "@/api/jd_food";

export default {
  name: "jd_food",
  components: {
  },
  created() {
    this.getList();
  },
  data() {
    return {
      total: 10,
      productList: [],
      cateId: {
        pageNum: 1,
        pageSize: 10,
        productName: '',
        productSummary: '',
      },
      xiuxian:[],
      binggan:[],
      jianguo:[],
      niunai:[],
      chongyin:[],
      binfen:[],
      mimian:[],
      shiyongyou:[],
      chufang:[],
      mingcha:[],
    }
  },
  methods: {
    getList() {
      getfoodProductBycateId('xiuxian').then(res => {
        this.xiuxian = res.rows;
      }).then(err => {
        console.log(err)
      })
      getfoodProductBycateId('binggan').then(res => {
        this.binggan = res.rows;
      }).then(err => {
        console.log(err)
      })
      getfoodProductBycateId('jianguo').then(res => {
        this.jianguo = res.rows;
      }).then(err => {
        console.log(err)
      })
      getfoodProductBycateId('niunai').then(res => {
        this.niunai = res.rows;
      }).then(err => {
        console.log(err)
      })
      getfoodProductBycateId('chongyin').then(res => {
        this.chongyin = res.rows;
      }).then(err => {
        console.log(err)
      })
      getfoodProductBycateId('binfen').then(res => {
        this.binfen = res.rows;
      }).then(err => {
        console.log(err)
      })
      getfoodProductBycateId('mimian').then(res => {
        this.mimian = res.rows;
      }).then(err => {
        console.log(err)
      })
      getfoodProductBycateId('shiyongyou').then(res => {
        this.shiyongyou = res.rows;
      }).then(err => {
        console.log(err)
      })
      getfoodProductBycateId('chufang').then(res => {
        this.chufang = res.rows;
      }).then(err => {
        console.log(err)
      })
      getfoodProductBycateId('mingcha').then(res => {
        this.mingcha = res.rows;
      }).then(err => {
        console.log(err)
      })
    }
  },
}
</script>

<style scoped src="../../assets/style/jd-food.css">

</style>
