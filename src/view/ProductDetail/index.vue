<template>
  <div class="container">
    <!-- 商品大概信息 -->
    <div class="goods-summary clearfix">
      <!-- 商品图片 -->
      <div class="goods-image-container">
        <div class="big-image clearfix">
          <ul>
            <li class="big-image-item"><img alt="iPhone手机" :src="productInfo.image"></li>
            <li class="big-image-item"><img alt="iPhone手机" :src="productInfo.image"></li>
            <li class="big-image-item"><img alt="iPhone手机" :src="productInfo.image"></li>
            <li class="big-image-item"><img alt="iPhone手机" :src="productInfo.image"></li>
            <li class="big-image-item"><img alt="iPhone手机" :src="productInfo.image"></li>
          </ul>
        </div>
        <div class="small-image clearfix">
          <ul>
            <li class="small-image-item"><img alt="iPhone手机" :src="productInfo.image"></li>
            <li class="small-image-item"><img alt="iPhone手机" :src="productInfo.image"></li>
            <li class="small-image-item"><img alt="iPhone手机" :src="productInfo.image"></li>
            <li class="small-image-item"><img alt="iPhone手机" :src="productInfo.image"></li>
            <li class="small-image-item"><img alt="iPhone手机" :src="productInfo.image"></li>
          </ul>
          <span class="arrow left-arrow">&lt;</span>
          <span class="arrow right-arrow">&gt;</span>
        </div>
        <div class="others">
          <span>商品编号:{{ productInfo.productId }}</span>
        </div>
      </div>

      <!-- 商品参数 -->
      <div class="goods-info">
        <h1 class="goods-title">{{ productInfo.productName }}</h1>
        <div class="goods-info-item price-box clearfix">
          <dl>价格</dl>
          <dt>¥<span class="price-num">{{ productInfo.price }}</span></dt>
        </div>
        <div class="goods-info-item promotion clearfix">
          <dl>促销</dl>
          <dt>满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品 详情></dt>
        </div>
        <div class="goods-info-item color clearfix">
          <dl>选择颜色</dl>
          <dt class="clearfix">
            <a class="option-item" href="javascript:;">金色</a>
            <a class="option-item" href="javascript:;">银色</a>
            <a class="option-item" href="javascript:;">黑色</a>
            <a class="option-item" href="javascript:;">玫瑰金</a>
          </dt>
        </div>
        <div class="goods-info-item color clearfix">
          <dl>选择版本</dl>
          <dt class="clearfix">
            <a class="option-item" href="javascript:;">公开版</a>
            <a class="option-item" href="javascript:;">移动4G</a>
          </dt>

        </div>
        <div class="goods-info-item color clearfix">
          <dl>选择容量</dl>
          <dt class="clearfix">
            <a class="option-item" href="javascript:;">16GB</a>
            <a class="option-item" href="javascript:;">64GB</a>
            <a class="option-item" href="javascript:;">128GB</a>
          </dt>
        </div>
        <div class="add-shopcar clearfix">
          <div class="quantity">
            <input type="text" value="1" v-model="queryParams.quantity">
            <span class="quantity-operation plus" @click="quantityPlus">+</span>
            <span class="quantity-operation minus" @click="quantityMinus">-</span>
          </div>
          <div class="btn">
            <button>加入购物车</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品详细信息 -->
    <div class="main-container clearfix">
      <!--相关分类、推荐品牌-->
      <div class="similar-goods">
        <div class="tab-title clearfix">
          <span>相关分类</span>
          <span>推荐品牌</span>
        </div>
        <div class="tab-container">
          <div class="similar-cate">
            <div class="similar-cate-name">
              <ul class="clearfix">
                <li><a class="cate-name-item" href="#">手机</a></li>
                <li><a class="cate-name-item" href="#">手机壳</a></li>
                <li><a class="cate-name-item" href="#">内存卡</a></li>
                <li><a class="cate-name-item" href="#">iPhone配件</a></li>
                <li><a class="cate-name-item" href="#">贴膜</a></li>
                <li><a class="cate-name-item" href="#">手机耳机</a></li>
                <li><a class="cate-name-item" href="#">移动电源</a></li>
                <li><a class="cate-name-item" href="#">平板电脑</a></li>
                <li><a class="cate-name-item" href="#">笔记本</a></li>
                <li><a class="cate-name-item" href="#">蓝牙耳机</a></li>
              </ul>
            </div>
            <div class="similar-cate-goods">
              <div>购买了此商品的用户还买了</div>
              <div class="goods-item-box">
                <img src="../../assets/goods-image/similar-cate-goods-image.jpg" alt="">
                <p><a class="goods-link" href="#">Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</a></p>
                <p>¥49</p>
                <button>加入购物车</button>
              </div>
            </div>
            <div class="similar-cate-goods">
              <div>购买了此商品的用户还买了</div>
              <div class="goods-item-box">
                <img src="../../assets/goods-image/similar-cate-goods-image.jpg" alt="">
                <p><a class="goods-link" href="#">Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</a></p>
                <p>¥49</p>
                <button>加入购物车</button>
              </div>
            </div>
            <div class="similar-cate-goods">
              <div>购买了此商品的用户还买了</div>
              <div class="goods-item-box">
                <img src="../../assets/goods-image/similar-cate-goods-image.jpg" alt="">
                <p><a class="goods-link" href="#">Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</a></p>
                <p>¥49</p>
                <button>加入购物车</button>
              </div>
            </div>
            <div class="similar-cate-goods">
              <div>购买了此商品的用户还买了</div>
              <div class="goods-item-box">
                <img src="../../assets/goods-image/similar-cate-goods-image.jpg" alt="">
                <p><a class="goods-link" href="#">Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</a></p>
                <p>¥49</p>
                <button>加入购物车</button>
              </div>
            </div>
            <div class="similar-cate-goods">
              <div>购买了此商品的用户还买了</div>
              <div class="goods-item-box">
                <img src="../../assets/goods-image/similar-cate-goods-image.jpg" alt="">
                <p><a class="goods-link" href="#">Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</a></p>
                <p>¥49</p>
                <button>加入购物车</button>
              </div>
            </div>
            <div class="similar-cate-goods">
              <div>购买了此商品的用户还买了</div>
              <div class="goods-item-box">
                <img src="../../assets/goods-image/similar-cate-goods-image.jpg" alt="">
                <p><a class="goods-link" href="#">Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</a></p>
                <p>¥49</p>
                <button>加入购物车</button>
              </div>
            </div>
          </div>
          <div class="recommend-goods"></div>
        </div>
      </div>

      <!-- 商品信息展示 -->
      <div class="goods-container">
        <div class="tab-nav">
          <a class="tab-item current" href="#">商品介绍</a>
          <a class="tab-item" href="#">包装规格</a>
          <a class="tab-item" href="#">售后保障</a>
          <a class="tab-item" href="#">商品评价</a>
        </div>
        <div class="goods-details">
          <p>
            {{ productInfo.productSummary }}
          </p>
        </div>
        <div class="goods-images">
          <img src="../../assets/goods-image/iPhone-detail-1.png" alt="detail">
          <img src="../../assets/goods-image/iPhone-detail-2.png" alt="detail">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getProductInfo} from "@/api/product";

export default {
  name: "index",
  data() {
    return {
      id: '',
      productInfo: {},
      queryParams: {
        productId: '',
        quantity: 1
      }
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.getProductDetail();
  },
  methods: {
    getProductDetail() {
      getProductInfo(this.id).then(res => {
        this.productInfo = res.data;
        console.log(this.productInfo)
      })
    },
    quantityPlus() {
      this.queryParams.quantity += 1;
    },
    quantityMinus() {
      this.queryParams.quantity -= 1;
      if (this.queryParams.quantity <= 0) {
        this.queryParams.quantity = 1;
      }
    }
  }
}
</script>

<style scoped src="../../assets/style/goodsInfo.css">
</style>