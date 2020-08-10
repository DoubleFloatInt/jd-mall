<template>
  <!--2.logo和搜索框-->
  <div id="top_main">
    <!-- 2.1logo图片 -->
    <router-link class="lf" tag="a" to="/">
      <img alt="JD" src="../../assets/images/logo-201305.png"/>
    </router-link>
    <!-- 2.2搜索框和热门搜索 -->
    <div id="search_box">
      <!-- 2.2.1搜索框和按钮 -->
      <div class="search">
        <input class="txtsearch">
        <button @click="handleSearch">搜索</button>
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
</template>

<script>
export default {
  name: "SearchBox",
  methods: {
    handleSearch() {
      this.$router.push({path: '/search'})
    }
  }
}
</script>

<style scoped>

</style>