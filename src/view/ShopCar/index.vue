<template>
  <div>
    <!--描述：搜索框开始-->
    <div class="search clearfix">
      <div class="wrap">
        <img src="../../assets/images/jdgwc.jpg" />

        <div class="search_div">

          <input type="text" class="search_text"/>
          <input type="button" value="搜索" class="search_button"/>

        </div>
      </div>
    </div>
    <!--描述：搜索框结束-->

    <!--描述：标题开始-->
    <div class="title wrap clearfix">
      <h3>全部商品</h3>
      <div class="">
        <span>配送至：</span>
        <select>
          <option value="">昌平区</option>
          <option value="">大兴区</option>
          <option value="">朝阳区</option>
        </select>
      </div>
    </div>
    <!--描述：标题结束-->


    <!--描述：显示菜单开始-->
    <div class="tips wrap">
      <ul>
        <li>
          <input type="checkbox" name="" id="" value=""/>
          全选
        </li>
        <li>商品</li>
        <li>单价</li>
        <li>数量</li>
        <li>小计</li>
        <li>操作</li>
      </ul>
    </div>
    <!--描述：显示菜单结束-->

    <!--描述：商品详情展示开始-->
    <ShopCarItem
      v-for="i in 10"
      :key="i"
    ></ShopCarItem>
    <!--描述：商品详情展示结束-->

    <!--描述：商品结算开始-->
    <div class="balance wrap">
      <ul class="balance_ul1">
        <li><input type="checkbox"/>
          全选
        </li>
        <li><a href=""><span>删除选中商品</span></a></li>
        <li><a href=""><span>移到关注</span></a></li>
        <li class="info_10"><a href=""><span>清理购物车</span></a></li>
      </ul>

      <ul class="balance_ul2">
        <li>已经选择<span>1</span>件商品</li>
        <li>总价<span>￥12</span></li>
        <li>
          <button class="butt">去结算</button>
        </li>
      </ul>
    </div>
    <!--描述：商品结算结束-->


    <div id="show_box">
      <!-- 文本 -->
      <p>
        <img src="../../assets/images/gwb.jpg">
        <i>购物车帮你选</i>
      </p>
      <p>
        <i>看看加购过该商品的人还喜欢哪些</i>
      </p>
    </div>


    <!-- 从这里开始 -->

    <div class="adv_1">
      <div class="adv_1_top">
        <dd>
          <a href="#">益达(Extra)木糖醇无糖口香糖冰凉薄荷约40粒56g单瓶装(新旧包装随机发)</a>
        </dd>
        <br/>
        <dd><i>
          <e>冰凉薄荷味</e>
        </i></dd>
        <br/>
        <dd><i>
          <f>￥8.80</f>
        </i></dd>

      </div>


      <div class="adv_1_nr">
        <dl>
          <dt>
            <img src="../../assets/images/bnx1.jpg">
          </dt>
          <dd>
            <a href="#">绿箭(DOUBLEMINT)口香糖原味薄荷味约40粒64g单瓶装(新旧包装随机发)</a>
          </dd>
          <dd><i><b>￥7.90</b></i></dd>
          <br/>
          <dd><i>
            <c>24240人已购买</c>
          </i></dd>
        </dl>
      </div>

      <div class="adv_1_nr">
        <dl>
          <dt>
            <img src="../../assets/images/bnx2.jpg">
          </dt>
          <dd>
            <a href="#">益达(Extra)木糖醇无糖口香糖冰凉薄荷约40粒56g单瓶装(新旧包装随机发)</a>
          </dd>
          <dd><i><b>￥7.90</b></i></dd>
          <br/>
          <dd><i>
            <c>24240人已购买</c>
          </i></dd>
        </dl>
      </div>

      <div class="adv_1_nr">
        <dl>
          <dt>
            <img src="../../assets/images/bnx3.jpg">
          </dt>
          <dd>
            <a href="#">益达(Extra)尊享护齿56g*3瓶京东定制装(草本精华+冰柠+清新西柚)</a>
          </dd>
          <dd><i><b>￥7.90</b></i></dd>
          <br/>
          <dd><i>
            <c>24240人已购买</c>
          </i></dd>
        </dl>
      </div>

      <div class="adv_1_nr">
        <dl>
          <dt>
            <img src="../../assets/images/bnx4.jpg">
          </dt>
          <dd>
            <a href="#">士力架 花生夹心巧克力(全家桶)礼物送女友 休闲零食员工福利 糖果460g</a>
          </dd>
          <dd><i><b>￥7.90</b></i></dd>
          <br/>
          <dd><i>
            <c>24240人已购买</c>
          </i></dd>
        </dl>
      </div>
    </div>

    <div class="adv_2">
      <p><span><h3>猜你喜欢</h3></span><span></span></p>
      <div class="mokuai_1">
        <dl>
          <dt>
            <img src="../../assets/images/cnxh1.jpg">
          </dt>
          <dd>
            <a href="#">【京东超市】益达(Extra)木糖醇无糖口香糖蜜桃芒果混合味70粒98g单瓶</a>
          </dd>
          <dd><i>￥14.50</i></dd>
        </dl>
      </div>

      <div>
        <dl>
          <dt>
            <img src="../../assets/images/cnxh2.jpg">
          </dt>
          <dd>
            <a href="#">【京东超市】曼妥思清劲速无糖口香糖清新薄荷味56g(新老包装随机发售)</a>
          </dd>
          <dd><i>￥9.90</i></dd>
        </dl>
      </div>

      <div>
        <dl>
          <dt>
            <img src="../../assets/images/cnxh3.jpg">
          </dt>
          <dd>
            <a href="#">【京东超市】绿箭(DOUBLEMINT)无糖薄荷糖原味薄荷味35粒23.8g单盒金</a>
          </dd>
          <dd><i>￥8.25</i></dd>
        </dl>
      </div>

      <div class="spec">
        <dl>
          <dt>
            <img src="../../assets/images/cnxh4.jpg">
          </dt>
          <dd>
            <a href="#">【京东超市】好时之吻Kisses牛奶巧克力82g(加量装与正常装随机发售)</a>
          </dd>
          <dd><i>￥21.90</i></dd>
        </dl>
      </div>
    </div>

    <!-- 到这里结束 -->
  </div>
</template>

<script>
import ShopCarItem from "@/components/ShopCarItem/index";
export default {
  name: "index",
  components: {ShopCarItem}
}
</script>

<style scoped src="../../assets/style/shopcar.css"></style>

<style scoped>
  div {
    text-align: center;
  }
</style>