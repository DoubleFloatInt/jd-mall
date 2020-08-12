<template>
  <div class="info wrap">
    <ul class="clearfix">
      <li class="info_1"><input type="checkbox" value=""/></li>
      <li class="info_2"><img src="../../assets/images/img1.jpg" width="80px"/></li>
      <li class="info_3"><a href="">【京东超市】desha春秋季儿童休闲服</a></li>
      <li class="info_4"><a>颜色：灰色+粉红</a></li>
      <li class="info_5">￥182.5</li>
      <li class="info_6">
        <button>-</button>
        <input value="1"/>
        <button class="but">+</button>
      </li>
      <li class="info_7">￥182.5</li>
      <li class="info_8">
        <a href="">删除</a>
        <dd><a href="">移到我的关注</a></dd>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShopCarItem"
}
</script>

<style scoped>
.info {
  width: 1000px;
  height: 125px;
  background-color: #fff4e8;
  border: 1px solid gray;
  margin-top: 25px;
  margin-bottom: 20px;
}

.info li {

  float: left;
  margin-top: 20px;
}


.info_1 {
  margin-left: 22px;
}

.info_2 {
  margin-left: 15px;
  /*border: 1px solid gray;*/
}

.info_3 {
  width: 260px;
  height: 20px;
}

.info_4 {
  margin-left: 45px;
}

.info_5 {
  margin-left: 70px;
}

.info_6 {
  margin-left: 40px;
}

.info_6 input {
  width: 30px;
  height: 12px;
  position: relative;
  text-align: center;
  top: -2px;
  left: -5px;
}

.but {
  position: relative;
  left: -10px;
}

.info_6 button {
  width: 30px;

  height: 18px;
}

.info_7 {
  margin-left: 15px;
}

.info_8 {
  margin-left: 15px;
}

.info a {
  font-size: 12px;
  color: #333333;
}
</style>