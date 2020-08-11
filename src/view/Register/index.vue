<template>
  <div>
    <header id="top">
      <div class="reg_top">
        <router-link to="/" tag="a">
          <img src="../../assets/images/jddog.jpg">
        </router-link>
        <h3 class="wel">欢迎注册</h3>
        <p class="p_log">
          已有帐号？
          <router-link to="/login" tag="a" class="log_on">请登录&gt;&gt;</router-link>
        </p>
      </div>
    </header>

    <div class="main">
      <ul class="message">
        <li>
          <b>手机号：</b>
          <input name="txtphonenum" v-model="queryParams.phonenum">
        </li>
        <li>
          <b>用户名：</b>
          <input name="txtsms" v-model="queryParams.username">
        </li>
        <li>
          <b>登陆密码：</b>
          <input name="txtpwd" type="password" v-model="queryParams.password">
        </li>
        <li>
          <b>确认登陆密码：</b>
          <input name="txtenterpwd" type="password" v-model="confirmPwd">
        </li>
        <li class="other">
          <form>
            <input type="checkbox" v-model="protocolCheck">同意协议并注册
            <a href="#">《京东用户协议》</a>
            <br>
            <input
                type="button"
                value="完成注册"
                class="button_sub"
                @keyup.enter="handleRegister"
                @click="handleRegister"
            >
          </form>
        </li>
      </ul>
    </div>

    <footer id="footer">
      <div class="foot_one">
        <a href="#">关于我们</a>&nbsp;|&nbsp;<a href="#">联系我们</a>&nbsp;|&nbsp;<a href="#">人才招聘</a>&nbsp;|&nbsp;<a href="#">商家入驻</a>&nbsp;|&nbsp;<a
          href="#">广告服务</a>&nbsp;|&nbsp;<a href="#">手机京东</a>&nbsp;|&nbsp;<a href="#">友情链接</a>&nbsp;|&nbsp;<a href="#">销售联盟</a>&nbsp;|&nbsp;<a
          href="#">京东社区</a>&nbsp;|&nbsp;<a href="#">京东公益</a>
      </div>
      <div class="foot_two">
        Copyright © 2004-2014 京东JD.com 版权所有
      </div>
    </footer>
  </div>
</template>

<script>
import {addUser} from "@/api/user";

export default {
  name: "index",
  data() {
    return {
      confirmPwd: '',
      protocolCheck: false,
      queryParams: {
        phonenum: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleRegister() {
      if (this.queryParams.phonenum === '') {
        this.msgError('请输入手机号!!!');
      } else if (this.queryParams.username === '') {
        this.msgError('请输入用户名!!!');
      } else if (this.queryParams.password === '') {
        this.msgError('请输入密码!!!');
      } else if (this.confirmPwd === '') {
        this.msgError('请再次输入密码!!!');
      } else if (this.confirmPwd !== this.queryParams.password) {
        this.msgError('两次输入密码不一致!!!');
      } else if (this.protocolCheck === false) {
        this.msgError('请同意协议!!!');
      } else {
        addUser(this.queryParams).then(res => {
          this.msgSuccess('注册成功！');
          console.log(res);
          this.$router.push({path: '/login'})
        }).catch(err => {
          this.msgError(err);
        })
      }
    }
  }
}
</script>

<style scoped src="../../assets/style/registered.css">
</style>