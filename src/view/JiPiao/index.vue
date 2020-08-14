<template>
  <div class="">
    <!--通知-->
    <div id="tongzhi">
      <a href="#">
        <img src="../../assets/images/Airline/main_yopjpg.jpg">
      </a>
    </div>
    <!--导航条-->
    <div id="nav">
      <div id="nav_top">
        <div class="w">
          <a href="#" class="trip_logo">
            <img src="../../assets/images/Airline/triplogo.png">
          </a>
          <ul class="nav_list">
            <li>
              <a href="#" class="list_a">首页</a>
            </li>
            <li class="on">
              <a href="#" class="list_b">机票</a>
              <div class="nav_show">
                <a>
                  国内机票
                  <i class="hot"></i>
                </a>
                <a>
                  国际/港澳台机票

                </a>
              </div>
            </li>
            <li>
              <a href="#" class="list_a">签证</a>
              <div class="nav_show">
                <a>
                  国内机票
                  <i class="hot"></i>
                </a>
                <a>
                  国际/港澳台机票

                </a>
              </div>
            </li>
            <li>
              <a href="#" class="list_a">度假</a>
              <div class="nav_show">
                <a>
                  国内机票
                  <i class="hot"></i>
                </a>
                <a>
                  国际/港澳台机票

                </a>
              </div>
            </li>
            <li>
              <a href="#" class="list_a">门票</a>
              <div class="nav_show">
                <a>
                  国内机票
                  <i class="hot"></i>
                </a>
                <a>
                  国际/港澳台机票

                </a>
              </div>
            </li>
            <li>
              <a href="#" class="list_a">火车票</a>
              <div class="nav_show">
                <a>
                  国内机票
                  <i class="hot"></i>
                </a>
                <a>
                  国际/港澳台机票

                </a>
              </div>
            </li>
            <li>
              <a href="#" class="list_a">邮轮</a>
              <div class="nav_show">
                <a>
                  国内机票
                  <i class="hot"></i>
                </a>
                <a>
                  国际/港澳台机票

                </a>
              </div>
            </li>

          </ul>
          <div class="nav_order">
					<span id="tx">
						<img id="trip_photo" src="../../assets/images/Airline/no-img.jpg">
						<a id="tx_bg"></a>
					</span>
            <h5>我的旅行订单</h5>
            <b></b>
            <div class="bk">
              <ul>
                <li class="oder_info">订单信息

                </li>
                <li>
                  <a href="#">我的机票订单
                    <i></i>
                  </a>

                </li>
                <li>
                  <a href="#">我的酒店订单
                    <i></i>
                  </a>

                </li>
                <li>
                  <a href="#">我的度假订单
                    <i></i>
                  </a>
                </li>
                <li><a href="#">我的景点订单
                  <i></i>
                </a>
                </li>
                <li>
                  <a href="#">我的火车票订单
                    <i></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="nav_bg">

      </div>



    </div>
    <!--主界面-->
    <div class="w">
      <div class="air_search">
        <div class="choose">
          <div>
            <div class="guonei">
              <h3 class="ic">
                国内飞机
              </h3>
            </div>
            <div class="guoji">
              <h3 class="ic">
                国际飞机
              </h3>
            </div>
          </div>
          <div class="form_area">
            <form action="#" method="get">
              <div class="item_c">
                <label class="search_tit">出发城市：</label>
                <input type="text" class="search_area" name="start_city"><br>
              </div>
              <div class="item_c">
                <label class="search_tit">到达城市：</label>
                <input type="text" class="search_area" name="arrive_city" value="中文/拼音/简拼"><br>
              </div>
              <div class="item_c">
                <label class="search_tit">航程类型：</label>
                <input type="radio" name="trip" value="单程">单程
                <input type="radio" name="trip" value="双程">双程<br>
              </div>
              <div class="item_c">
                <label class="search_tit">出发时间：</label>
                <input type="text" class="search_area" name="start_city" value="$$"><br>
              </div>
              <div class="item_c">
                <label class="search_tit">返程时间：</label>
                <input type="text" name="arrive_city" value="中文/拼音/简拼"><br>
                <input type="checkbox" name="reading" >带儿童<i>(2-12岁)</i>
                <input type="checkbox" name="shopping">带婴儿<i>(14天到2岁)</i>
              </div>
              <div class="item_c">
                <label class="search_tit">&nbsp;</label>
                <input type="submit" class="search_butn">
              </div>
            </form>
          </div>
        </div>
        <div class="gg">
          <div class="gg_lb">
            <img src="../../assets/images/Airline/lb_1.jpg">
          </div>

        </div>
      </div>
      <div class="air_service">
        <div class="service_left">
          <ul>
            <li>
              <a>在线退改</a>
            </li>
            <li>
              <a class="tw">网上办理乘机</a>
            </li>
            <li>
              <a class="th">乘机常识小贴士</a>
            </li>

          </ul>
        </div>
        <div class="service_right">
          <ul>
            <li class="f1">
              <h4 class="ic">100%航协认证</h4>
            </li>
            <li class="f2">
              <h4 class="ic">100%航协认证</h4>
            </li>
            <li class="f3">
              <h4 class="ic">7×24小时服务<br>400-611-5718</h4>
            </li>
          </ul>
        </div>
      </div>
      <!--精选好价-->
      <div class="tejia">
        <h2 class="tit">精选好价
          <i class="tj_bg"></i>
        </h2>
        <div class="tj_show">
          <ul class="tj_list">
            <li>
              <a href="#">
                <div class="p_img">
                  <img src="../../assets/images/Airline/p_img_1.jpg">
                </div>
                <div class="gray-extra"></div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="p_img">
                  <img src="../../assets/images/Airline/p_img2.jpg">
                </div>
                <div class="gray-extra"></div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="p_img">
                  <img src="../../assets/images/Airline/p_img_3.jpg">
                </div>
                <div class="gray-extra"></div>
              </a>
            </li>
          </ul>
        </div>
        <div class="sel-land">
          <a href="#" class="more">更多>></a>
          <div class="land">
            <a href="#" class="bj">北京</a>
            <a href="#" class="cq">重庆</a>
            <a href="#" class="cs">长沙</a>
            <a href="#" class="gz">广州</a>
            <a href="#" class="km">昆明</a>
            <a href="#" class="cd">成都</a>
            <a href="#" class="sz">深圳</a>
            <a href="#" class="sh">上海</a>
            <a href="#" class="nj">南京</a>
            <a href="#" class="wh">武汉</a>
          </div>
          <div class="cityinfo" id="info_1">
            <ul>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">北京-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="cityinfo" id="info_2" style="display: none">
            <ul>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="line">重庆-上海</span>
                  <span class="date">08-23</span>
                  <span class="price">¥300</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--单程特惠-->
      <div class="single">
        <h4 class="tit" style="color: #666666">国际·港澳台 特惠航线
          <i class="single_bg" ></i>
          <i class="yh" ></i>
        </h4>
        <div class="single_left">
          <div class="lines">
            <div class="l_start">
              出发地：
              <select class="selectpicker" data-style="btn-primary">
                <option>北京</option>
                <option>上海</option>
                <option>香港</option>
                <option>广州</option>
              </select>
            </div>
            <div class="l_end">
              目的地：
              <span class="curr">港澳台/日韩</span>
              <span class="">东南亚</span>
              <span class="">欧洲</span>
              <span class="">美洲</span>
              <span class="">澳洲/非洲</span>
            </div>
          </div>
        </div>
        <div class="single_lines" style="display: block;">
          <ul>
            <li>
              <a>
                <img src="../../assets/images/Airline/HO.gif" alt="" data-evernote-hover-show="true">
                <span class="line">北京<b class="l-ow"></b>曼谷</span>
                <span class="date">08-13</span>
                <span class="price">￥2200</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/HO.gif" alt="" data-evernote-hover-show="true">
                <span class="line">北京<b class="l-ow"></b>曼谷</span>
                <span class="date">08-13</span>
                <span class="price">￥2200</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif">
                <span class="line">北京<b class="l-ow"></b>河内</span>
                <span class="date">05-19</span>
                <span class="price">￥10240</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif">
                <span class="line">北京<b class="l-ow"></b>河内</span>
                <span class="date">07-03</span>
                <span class="price">￥6500</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif" >
                <span class="line">北京<b class="l-ow"></b>马尼拉</span>
                <span class="date">06-16</span>
                <span class="price">￥9830</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif" alt="" data-evernote-hover-show="true">
                <span class="line">北京<b class="l-ow"></b>马尼拉</span>
                <span class="date">06-10</span>
                <span class="price">￥3120</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/HO.gif" alt="" data-evernote-hover-show="true">
                <span class="line">北京<b class="l-ow"></b>曼谷</span>
                <span class="date">08-13</span>
                <span class="price">￥2200</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/HO.gif" alt="" data-evernote-hover-show="true">
                <span class="line">北京<b class="l-ow"></b>曼谷</span>
                <span class="date">08-13</span>
                <span class="price">￥2200</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/HO.gif" alt="" data-evernote-hover-show="true">
                <span class="line">北京<b class="l-ow"></b>曼谷</span>
                <span class="date">08-13</span>
                <span class="price">￥2200</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif">
                <span class="line">北京<b class="l-ow"></b>河内</span>
                <span class="date">05-19</span>
                <span class="price">￥10240</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif">
                <span class="line">北京<b class="l-ow"></b>河内</span>
                <span class="date">07-03</span>
                <span class="price">￥6500</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif" >
                <span class="line">北京<b class="l-ow"></b>马尼拉</span>
                <span class="date">06-16</span>
                <span class="price">￥9830</span>
              </a>
            </li>

          </ul>
        </div>
      </div>
      <!--双程特惠-->
      <div class="single">
        <h4 class="tit" style="color: #666666">往返国际·港澳台 特惠航线
          <i class="single_bg" ></i>
          <i class="yh" ></i>
        </h4>
        <div class="single_left">
          <div class="lines">
            <div class="l_start">
              出发地：
              <select class="selectpicker" data-style="btn-primary">
                <option>北京</option>
                <option>上海</option>
                <option>香港</option>
                <option>广州</option>
              </select>
            </div>
            <div class="l_end">
              目的地：
              <span class="curr">港澳台/日韩</span>
              <span class="">东南亚</span>
              <span class="">欧洲</span>
              <span class="">美洲</span>
              <span class="">澳洲/非洲</span>
            </div>
          </div>
        </div>
        <div class="single_lines" style="display: block;">
          <ul>
            <li>
              <a>
                <img src="../../assets/images/Airline/HO.gif" alt="">
                <span class="line">北京<b class="l-ow"></b>曼谷</span>
                <span class="date">08-13<b class="l-ow2"></b>08-20</span>
                <span class="price">￥2200</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/HO.gif" alt="" data-evernote-hover-show="true">
                <span class="line">北京<b class="l-ow"></b>曼谷</span>
                <span class="date">08-13<b class="l-ow2"></b>08-26</span>
                <span class="price">￥2200</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif">
                <span class="line">北京<b class="l-ow"></b>河内</span>
                <span class="date">08-13<b class="l-ow2"></b>08-20</span>
                <span class="price">￥10240</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif">
                <span class="line">北京<b class="l-ow"></b>河内</span>
                <span class="date">08-13<b class="l-ow2"></b>08-20</span>
                <span class="price">￥6500</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif" >
                <span class="line">北京<b class="l-ow"></b>马尼拉</span>
                <span class="date">08-13<b class="l-ow2"></b>08-20</span>
                <span class="price">￥9830</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif" alt="" data-evernote-hover-show="true">
                <span class="line">北京<b class="l-ow"></b>马尼拉</span>
                <span class="date">08-13<b class="l-ow2"></b>08-20</span>
                <span class="price">￥3120</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/HO.gif" alt="" data-evernote-hover-show="true">
                <span class="line">北京<b class="l-ow"></b>曼谷</span>
                <span class="date">08-13<b class="l-ow2"></b>08-20</span>
                <span class="price">￥2200</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/HO.gif" alt="" data-evernote-hover-show="true">
                <span class="line">北京<b class="l-ow"></b>曼谷</span>
                <span class="date">08-13<b class="l-ow2"></b>08-20</span>
                <span class="price">￥2200</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/HO.gif" alt="" data-evernote-hover-show="true">
                <span class="line">北京<b class="l-ow"></b>曼谷</span>
                <span class="date">08-13<b class="l-ow2"></b>08-20</span>
                <span class="price">￥2200</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif">
                <span class="line">北京<b class="l-ow"></b>河内</span>
                <span class="date">08-13<b class="l-ow2"></b>08-20</span>
                <span class="price">￥10240</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif">
                <span class="line">北京<b class="l-ow"></b>河内</span>
                <span class="date">08-13<b class="l-ow2"></b>08-20</span>
                <span class="price">￥6500</span>
              </a>
            </li>
            <li>
              <a>
                <img src="../../assets/images/Airline/NH.gif" >
                <span class="line">北京<b class="l-ow"></b>马尼拉</span>
                <span class="date">08-13<b class="l-ow2"></b>08-20</span>
                <span class="price">￥9830</span>
              </a>
            </li>

          </ul>
        </div>
      </div>

      <!--合作伙伴-->
      <div class="hzhb">
        <h2 class="tit">合作伙伴
          <i class="hz"></i>
        </h2>
        <div class="hzhb_m">
          <ul>
            <li class="fore1">
              <b></b>
              <span>中国国航</span>
            </li>
            <li class="fore2">
              <b></b>
              <span>南方航空</span>
            </li>
            <li class="fore3">
              <b></b>
              <span>四川航空</span>
            </li>
            <li class="fore4">
              <b></b>
              <span>厦门航空</span>
            </li>
            <li class="fore5">
              <b></b>
              <span>奥凯航空</span>
            </li>
            <li class="fore6">
              <b></b>
              <span>东方航空</span>
            </li>
            <li class="fore7">
              <b></b>
              <span>中国联航</span>
            </li>
            <li class="fore8">
              <b></b>
              <span>山东航空</span>
            </li>
            <li class="fore9">
              <b></b>
              <span>春秋航空</span>
            </li>
            <li class="fore10">
              <b></b>
              <span>多彩贵州航空</span>
            </li>
            <li class="fore11">
              <b></b>
              <span>深圳航空</span>
            </li>
            <li class="fore12">
              <b></b>
              <span>吉祥航空</span>
            </li>
            <li class="fore13">
              <b></b>
              <span>瑞丽航空</span>
            </li>
            <li class="fore14">
              <b></b>
              <span>青岛航空</span>
            </li>
            <li class="fore15">
              <b></b>
              <span>浙江长龙航空</span>
            </li>
          </ul>
          <div class="extra">
            <div class="descirable">
              <div class="content">
                京东机票，拥有全国联网的国内&amp;国际机票、打折机票的查询预订以及航空周边产品的售卖等。京东机票已覆盖了国内外80多家航空公司，产品覆盖全球六大洲3000多大中城市，近万条航线，国内机票已实现大部分在线改期和在线退票等服务。目前京东机票正在以迅猛的速度发展，提供企业购票，散客购票等多维服务，成为中国低价、可靠的机票预订服务中心。<br>
                京东机票，通过网站及移动客户端的全平台覆盖，随时随地为旅行者提供机票的深度搜索，帮助旅行者找到性价比高的产品和优质的信息，更有各大热门城市的特价机票信息供您参考！
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "JiPiao"
}
</script>

<style scoped src="../../assets/style/AirlineTicket.css">

</style>