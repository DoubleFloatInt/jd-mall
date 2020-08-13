<template>
  <div>
    <header id="top">
      <div id="top_box">
        <img class="lf" src="../../assets/images/star.jpg">
        <a class="lf" href="#">收藏京东</a>    <!-- lf左浮动 -->
        <ul class="rt">        <!-- rt右浮动 -->
          <li class="login-register-area">
            <span v-if="isLogin">
              {{username}}，你好！欢迎来到京东 <a @click="handleLogout">退出登录</a>
            </span>
            <router-link v-if="!isLogin" to="/login" tag="a">你好，请登录</router-link>
            <router-link v-if="!isLogin" to="/register" tag="a">[免费注册]</router-link>
          </li>
          <li>
            <b></b><!--边框-->
            <router-link to="/orderList" tag="a">我的订单</router-link>
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
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isLogin() {
      return this.$store.getters.loginStatus;
    },
    username() {
      return this.$store.getters.username;
    }
  },
  methods:{
    handleLogout() {
      console.log('logout')
      this.$store.dispatch("Logout");
    }
  }
}
</script>

<style scoped>
</style>