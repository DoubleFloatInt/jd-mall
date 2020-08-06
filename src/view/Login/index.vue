<template>
  <div>
    <!-- 第一层 logo  欢迎登录   问卷 -->
    <div class="w">
      <div id="logo">
        <a href="#">
          <img alt="京东" height="60" src="../../assets/images/images_login/logo-201305-b.png" width="170">
        </a>
        <b>欢迎登录</b>
      </div>
      <a class="q-link" href="#">
        <b></b>
        登录页面，调查问卷
      </a>
    </div>
    <!-- 第二层主体 -->
    <div id="content">
      <!-- 2.1    安全提示tips -->
      <div class="tips">
        <div class="tips-inner">
          <div class="cont-wrapper">
            <i class="icon-tips"></i>
            <p>
              依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版
              <a class="black" href="#">
                《京东隐私政策》
              </a>
              已上线，将更有利于保护您的个人隐私。
            </p>
          </div>
        </div>
      </div>
      <!-- 2.2    登录box-->
      <div class="login-wrap">
        <div class="w">
          <!-- 2.2.1  登陆小form -->
          <div class="login-form">
            <!-- 2.2.1.1   小提示-->
            <div class="tips-wrapper">
              <div class="tips-inner">
                <div class="cont-wrapper">
                  <i class="icon-tips"></i>
                  <p>京东不会以任何理由要求您转账汇款，谨防诈骗。</p>
                </div>
              </div>
            </div>
            <!-- 2.2.1.2   左侧扫码登陆 -->
            <div class="login-tab login-tab-l">
              <a class="qrcodeChecked" href="#">
                扫码登录
              </a>
            </div>
            <!-- 2.2.1.3   右侧账户登陆 -->
            <div class="login-tab login-tab-r">
              <a class="userChecked" href="#">
                账户登录
              </a>
            </div>
            <!-- 2.2.1.4   中间的login-box -->
            <!-- <div class="login-box" style="display: none;"> -->
            <div class="mc">
              <div class="form">
                <form id="formlogin">
                  <div class="item item-fore1">
                    <label class="login-label name-label"></label>
                    <input class="itxt" type="text">
                  </div>

                  <div class="item item-fore2">
                    <label class="login-label pwd-label"></label>
                    <input class="pwd" id="nloginpwd" type="password">
                  </div>
                  <div class="item item-fore4">
                    <div class="safe">
                      <span></span>
                      <span class="forget-pw-safe">
                                            <a class="" href="#">忘记密码</a>
                                        </span>
                    </div>
                  </div>
                  <div class="item item-fore5">
                    <div class="login-btn">
                      <a class="btn-img btn-entry" href="#"
                         id="loginsubmit">登&nbsp;&nbsp;&nbsp;&nbsp;录</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- </div> -->
            <!-- 2.2.1.5   qrcode二维码登录-->
            <!-- 2.2.2  qq微信登录 注册 -->
            <div class="coagent" id="kbCoagent">
              <ul>
                <li>
                  <b></b>
                  <a class="pdl"
                     href="#"
                     onclick="window.location='//qq.jd.com/new/qq/login.aspx'+window.location.search;return false;"
                     style="outline: rgb(109, 109, 109) none 0px;">
                    <b class="QQ-icon"></b>
                    <span>QQ</span>
                  </a>
                  <span class="line">|</span>
                </li>
                <li>
                  <a class="pdl"
                     href="#"
                     onclick="window.location='//qq.jd.com/new/wx/login.action'+window.location.search;return false;">
                    <b class="weixin-icon"></b>
                    <span>微信</span>
                  </a>
                </li>
                <li class="extra-r">
                  <div>
                    <div class="regist-link">
                      <a href="#">
                        <b></b>
                        立即注册
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 2.2.3  背景banner-->
        <div class="login-banner" style="background-color: #2807b3">
          <div class="w">
            <div class="i-inner" id="banner-bg"
                 style="background: url(../../assets/images/images_login/banner_01.jpg) 0px 0px no-repeat;background-color: #2807b3">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第三层  底部 -->
    <div class="w">
      <div id="footer">
        <div class="links">
          <a href="#">
            关于我们
          </a>|
          <a href="#">
            联系我们
          </a>|
          <a href="#">
            人才招聘
          </a>|
          <a href="#">
            商家入驻
          </a>|
          <a href="#">
            广告服务
          </a>|
          <a href="#">
            手机京东
          </a>|
          <a href="#">
            友情链接
          </a>|
          <a href="#">
            销售联盟
          </a>|
          <a href="#">
            京东社区
          </a>|
          <a href="#">
            京东公益
          </a>|
          <a href="#">English Site</a>
        </div>
        <div class="copyright">
          Copyright&nbsp;©&nbsp;2004-2020&nbsp;&nbsp;京东JD.com&nbsp;版权所有
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
@import "../../assets/style/jd_login.css";
</style>