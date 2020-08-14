<template>
  <div class="wrapper">
    <header class="inner">
      <a data-v-28b18b24="" href="#" clstag="pageclick|keycount|pcmovie_home_movietab|2" class="logo"><img
          data-v-28b18b24="" src="../../assets/images/index.png" alt=""></a>
      <a data-v-28b18b24="" href="javascript:;" clstag="pageclick|keycount|pcmovie_home_city|1" class="city fold">
        北京</a>
      <nav data-v-28b18b24="">
        <a data-v-28b18b24="" href="#" clstag="pageclick|keycount|pcmovie_home_movietab|2" class="cur">电影</a>
        <a data-v-28b18b24="" href="http://piao.jd.com/" target="_blank">演出</a></nav>
      <a data-v-28b18b24="" href="javascript:;" class="link buymovie"><span data-v-28b18b24="" class="icon buy"></span>
        <span data-v-28b18b24="" class="text">扫码购票</span> </a>
      <a data-v-28b18b24="" href="//order.jd.com/center/list.action?t=43&amp;d=0&amp;s=4096"
         clstag="pageclick|keycount|pcmovie_home_my|6" class="link mymovie"><span data-v-28b18b24=""
                                                                                  class="icon my"></span> <span
          data-v-28b18b24="" class="text">我的电影票</span></a>
    </header>
    <section>
      <!-- 图 -->
      <div class="banner">
      </div>
      <div data-v-4f795181="" class="tab-nav">
        <div data-v-4f795181="" class="tab-nav-item tab-hot font-bold hotbg">正在热映</div>
        <div data-v-4f795181="" class="tab-nav-item tab-up font-bold">即将上映</div>
      </div>
      <div data-v-4f795181="" class="nut-radiogroup">
        <label class="inline">
				<span name="jr1596850929367">
				<input type="radio" name="radio" class="nut-radio nut-radio-ani" checked="checked" value="1"
               style="height: 14px; width: 14px;">
				</span>热门推荐
        </label>
        <label class="inline">
			<span name="jr1596850929367">
				<input type="radio" name="radio" class="nut-radio nut-radio-ani" value="1" style="height: 14px; width: 14px;">
			</span>按时间排序</label>

        <label class="inline">
				<span name="jr1596850929367">
				<input type="radio" name="radio" class="nut-radio nut-radio-ani" value="1" style="height: 14px; width: 14px;">
			</span>按评分排序</label>
      </div>
      <!-- 图片部分 -->
      <div class="tab">
        <div class="videoImg">
          <img src="../../assets/images/01.jpg"/>
          <div class="xing">评分：7.8分</div>
          <div class="vedeoTxt">
            <h2>《抵达之谜》</h2>
            <p>中国大陆、犯罪</p>
            <b>票价：￥30起</b>
          </div>
        </div>
        <div class="videoImg">
          <img src="../../assets/images/02.jpg"/>
          <div class="xing">评分：9.3分</div>
          <div class="vedeoTxt">
            <h2>《星际穿越》</h2>
            <p>欧美、剧情</p>
            <b>票价：￥29起</b>
          </div>
        </div>
        <div class="videoImg">
          <img src="../../assets/images/03.jpg"/>
          <div class="xing">评分：8.3分</div>
          <div class="vedeoTxt">
            <h2>《多力特的奇幻冒险》</h2>
            <p>剧情、奇幻、冒险</p>
            <b>票价：￥18起</b>
          </div>
        </div>
        <div class="videoImg">
          <img src="../../assets/images/04.jpg"/>
          <div class="xing">评分：9.4分</div>
          <div class="vedeoTxt">
            <h2>《误杀》</h2>
            <p>剧情、犯罪</p>
            <b>票价：￥29起</b>
          </div>
        </div>
        <div class="videoImg">
          <img src="../../assets/images/07.png"/>
          <div class="xing">评分：9.3分</div>
          <div class="vedeoTxt">
            <h2>《当幸福来敲门》</h2>
            <p>剧情、家庭、传记</p>
            <b>票价：￥43起</b>
          </div>
        </div>
        <div class="videoImg">
          <img src="../../assets/images/06.jpg"/>
          <div class="xing">评分：8.7分</div>
          <div class="vedeoTxt">
            <h2>《刺猬索尼克》</h2>
            <p>动画、冒险、喜剧</p>
            <b>票价：￥30起</b>
          </div>
        </div>
        <div class="videoImg">
          <img src="../../assets/images/08.png"/>
          <div class="xing">评分：7.8分</div>
          <div class="vedeoTxt">
            <h2>《寻梦环游记》</h2>
            <p>动画、冒险、家庭</p>
            <b>票价：￥21.9起</b>
          </div>
        </div>
        <div class="videoImg">
          <img src="../../assets/images/09.png"/>
          <div class="xing">评分：7.8分</div>
          <div class="vedeoTxt">
            <h2>《电影名字》</h2>
            <p>剧情、战争、历史</p>
            <b>票价：￥33起 </b>
          </div>
        </div>
        <div class="videoImg">
          <img src="../../assets/images/10.png"/>
          <div class="xing">评分：8.7分</div>
          <div class="vedeoTxt">
            <h2>《1917》</h2>
            <p>剧情、战争、历史</p>
            <b>票价：￥32.9起 </b>
          </div>
        </div>
        <div class="videoImg">
          <img src="../../assets/images/11.png"/>
          <div class="xing">评分：9.5分</div>
          <div class="vedeoTxt">
            <h2>《超能陆战队》</h2>
            <p>动画、喜剧、动作</p>
            <b>票价：￥33.9起 </b>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Video"
}
</script>

<style scoped src="../../assets/style/film.css">

</style>