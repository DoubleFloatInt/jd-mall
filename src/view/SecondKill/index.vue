<template>
  <div>
    <!--3  秒杀-->
    <div id="nav">
      <div class="miaosha_top">
        <ul class="lf">
          <li class="first"><a href="#">京东秒杀</a></li>
          <li>
            <router-link to="/tejia" tag="a">每日特价</router-link>
          </li>
          <li>
            <router-link to="/shangou" tag="a">大牌闪购</router-link>
          </li>
          <li>
            <router-link to="/pinlei" tag="a">品类秒杀</router-link>
          </li>
        </ul>
      </div>
    </div>


    <div id="photo">
      <img src="../../assets/images/jdms.png" alt="">
    </div>

    <div id="photo_two">
      <a href="#">
        <img src="../../assets/images/tzxy.png" alt="">
      </a>
    </div>


    <div id="miao">
      <ul class="lf">
        <li class="miaoing">
          <a href="#">
            <span class="miaoz">8:00</span><br>
            <span>正在秒杀<br>距结束 01:02:26</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="miaoz">10:00</span><br>
            <span>即将开始</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="miaoz">14:00</span><br>
            <span>即将开始</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="miaoz">18:00</span><br>
            <span>即将开始</span>
          </a>
        </li>
      </ul>
    </div>

    <!--4  tupian-->
    <div id="picture">
      <ul>
        <li
          v-for="item in productList"
          :key="item.productId"
        >
          <a href="#" class="pa">
            <img :src="item.image" alt="">
            <h4 class="picture_title">{{item.productName}}</h4>
            <p class="picture_t2">直降+满减+免息</p>
          </a>
          <div class="picture_bottom">
					<span class="ptxt">
						<span class="ptxt2">
							<i class="txti">
								<em>￥</em>
								{{item.salesPrice}}
							</i>
							￥<del>{{item.price}}</del>
						</span>
						<span class="txtd">1年历史最低价</span>
						<span class="ytxt">
							<i class="ytxt_ys">已售34%</i>
							<i class="ytxt_j">
								<b class="ytxt_jft1"></b>
							</i>
						</span>
					</span>
            <a href="#" class="qgou">立即抢购</a>
          </div>
        </li>
      </ul>
    </div>

    <div id="picture_bottom">
      <a class="pbo">
        <img src="../../assets/images/tp/001.jpg" alt="">
      </a>
      <a class="pbo">
        <img src="../../assets/images/tp/002.png" alt="">
      </a>
    </div>

  </div>
</template>

<script>
import {getMiaoShaList} from "@/api/miaosha";

export default {
  name: "SecondKill",
  data() {
    return {
      productList: []
    }
  },
  created() {
    getMiaoShaList().then(res => {
      this.productList = res.rows;
    })
  }
}
</script>

<style scoped src="../../assets/style/miaosha_index.css"></style>
