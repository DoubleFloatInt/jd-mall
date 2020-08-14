<template>
  <div class="clearfix">
    <!--3  特价-->
    <div id="nav">
      <div class="miaosha_top">
        <ul class="lf">
          <li>
            <router-link to="/miaosha" tag="a">京东秒杀</router-link>
          </li>
          <li class="two"><a href="#">每日特价</a></li>
          <li>
            <router-link to="/shangou" tag="a">大牌闪购</router-link>
          </li>
          <li>
            <router-link to="/pinlei" tag="a">品类秒杀</router-link>
          </li>
        </ul>
      </div>
    </div>


    <!--顶部图片-->
    <div id="photo">
      <img src="../../assets/images/mtp/01.png">
      <div class="fengding">
        <a href="#" class="ftitle"></a>
        <div class="last">
          <div class="lasttitle">最后疯抢</div>
          <div class="ltitle">
				<span>
					<i>1</i>
					<i>3</i>
						:
					<i>1</i>
					<i>4</i>
						:
					<i>5</i>
					<i>2</i>
				</span>
          </div>
        </div>


        <div class="fpicture">
          <div class="picture">
            <a href="#" class="pic_a">
              <div class="pic_f">
                <img src="../../assets/images/mtp/001.jpg">
              </div>
              <div class="pictitle">酸枣汁果汁饮料</div>
              <div class="picmoney">
                <div class="pm_two">
						<span>
							<em>￥</em>
							9.9
						</span>
                  <del>
                    ￥
                    14.9
                  </del>
                </div>
              </div>
              <div class="ysmoney">
                <div>已售<span>134</span>件</div>
              </div>
            </a>
          </div>

          <div class="picture">
            <a class="pic_a">
              <div class="pic_f">
                <img src="../../assets/images/mtp/001.jpg">
              </div>
              <div class="pictitle">天然芦荟胶</div>
              <div class="picmoney">
                <div class="pm_two">
					<span>
						<em>￥</em>
						9.9
					</span>
                  <del>
                    ￥
                    29.9
                  </del>
                </div>
              </div>
              <div class="ysmoney">
                <div>已售<span>134</span>件</div>
              </div>
            </a>
          </div>
          <div class="picture">
            <a class="pic_a">
              <div class="pic_f">
                <img src="../../assets/images/mtp/001.jpg">
              </div>
              <div class="pictitle">天然苏打水</div>
              <div class="picmoney">
                <div class="pm_two">
					<span>
						<em>￥</em>
						9.9
					</span>
                  <del>
                    ￥
                    19.9
                  </del>
                </div>
              </div>
              <div class="ysmoney">
                <div>已售<span>108</span>件</div>
              </div>
            </a>
          </div>
          <div class="picture">
            <a class="pic_a">
              <div class="pic_f">
                <img src="../../assets/images/mtp/001.jpg">
              </div>
              <div class="pictitle">德雕灰色开关插座面板【暗装】</div>
              <div class="picmoney">
                <div class="pm_two">
					<span>
						<em>￥</em>
						3.9
					</span>
                  <del>
                    ￥
                    11.9
                  </del>
                </div>
              </div>
              <div class="ysmoney">
                <div>已售<span>103</span>件</div>
              </div>
            </a>
          </div>

        </div>

        <div id="photo_two">
          <img src="../../assets/images/mtp/07.png">
        </div>

        <div id="chaozhi">
          <ul>
            <li class="first">
              <a href="#" class="jxone">精选</a>
            </li>
            <li>
              <a href="#">美食</a>
            </li>
            <li>
              <a href="#">百货</a>
            </li>
            <li>
              <a href="#">个护</a>
            </li>
            <li>
              <a href="#">预告</a>
            </li>
          </ul>
        </div>
        <div id="sphoto">
          <ul>
            <li
                v-for="item in productList"
                :key="item.productId"
            >
              <router-link :to="'/productDetail?id=' + item.productId" class="pa">
                <img :src="item.image">
                <h4 class="picture_title">{{ item.productName }}</h4>
                <p class="picture_t2">防水轻便</p>
              </router-link>
              <div class="picture_bottom">
					<span class="ptxt">
						<span class="ptxt2">
							<i class="txti">
								<em>￥</em>
								{{ item.salesPrice }}
							</i>
							￥<del>{{ item.price }}</del>
						</span>
						<span class="txtd">1年历史最低价</span>
					</span>
                <span class="ytxt">
							<i class="ytxt_ys">已售<span>111</span>件</i>
					</span>
                <a href="#" class="qgou">立即抢购</a>
              </div>

            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getMiaoShaList} from "@/api/miaosha";

export default {
  name: "TeJia",
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

<style src="../../assets/style/tejia_index.css" scoped></style>

<style scoped>
</style>