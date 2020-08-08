<template>
  <div>
    <div class="top-main">
      <div class="container clearfix">
        <div class="logo">
          <router-link to="/" tag="a">
            <img alt="Logo" src="../../assets/images/logo_2017.png">
          </router-link>
        </div>
        <div class="index-link">
          <p class="title">我的京东</p>
          <router-link class="link" to="/" tag="a">
            返回京东首页
          </router-link>
        </div>
        <nav class="nav">
          <ul class="clearfix">
            <li class="nav-item"><a href="#">首页</a></li>
            <li class="nav-item"><a href="#">账户设置</a></li>
            <li class="nav-item"><a href="#">评价</a></li>
            <li class="nav-item"><a href="#">消息</a></li>
          </ul>
        </nav>
        <div class="shop-car">
          <a href="#">我的购物车</a>
        </div>
        <div class="search-box clearfix">
          <input type="text">
          <button>搜索</button>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="container clearfix">
        <div class="side-nav">
          <dl>
            <dt>订单中心</dt>
            <dd class="current">我的订单</dd>
            <dd>评论晒单</dd>
          </dl>
          <dl>
            <dt>关注中心</dt>
            <dd>关注的商品</dd>
            <dd>关注的店铺</dd>
            <dd>关注的专辑</dd>
            <dd>收藏的内容</dd>
          </dl>
          <dl>
            <dt>设置</dt>
            <dd>个人中心</dd>
            <dd>收货地址</dd>
          </dl>
        </div>
        <div class="order-box">
          <div class="box-header">
            <p>我的订单</p>
          </div>
          <div class="box-content">
            <div class="operation clearfix">
              <div class="order-type-link">
                <ul class="clearfix">
                  <li class="link current"><a href="#">全部订单</a></li>
                  <li class="link"><a href="#">待付款</a></li>
                  <li class="link"><a href="#">待收获</a></li>
                  <li class="link"><a href="#">待评价</a></li>
                </ul>
              </div>
              <div class="search-box">
                <input type="text">
                <button>搜索</button>
              </div>
            </div>
            <div class="order-data">
              <table class="order-data-table">
                <colgroup>
                  <col class="order-detail">
                  <col class="real-name">
                  <col class="money">
                  <col class="status">
                  <col class="operate">
                </colgroup>
                <thead>
                <tr>
                  <th>
                    <div class="order-time">
                      <div class="time-txt">
                        近三个月订单
                      </div>
                      <div class="time-list">
                        <ul>
                          <li><a href="#">近三个月订单</a></li>
                          <li><a href="#">今年内订单</a></li>
                          <li><a href="#">2019年</a></li>
                          <li><a href="#">2018年</a></li>
                          <li><a href="#">2017年</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="detail">
                      订单详情
                    </div>
                  </th>
                  <th>收货人</th>
                  <th>金额</th>
                  <th>
                    <div class="order-status">
                      <div class="status-txt">
                        全部状态
                      </div>
                      <div class="status-list">
                        <ul>
                          <li><a href="#">全部状态</a></li>
                          <li><a href="#">等待付款</a></li>
                          <li><a href="#">等待收获</a></li>
                          <li><a href="#">已完成</a></li>
                          <li><a href="#">已取消</a></li>
                        </ul>
                      </div>
                    </div>
                  </th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr class="sep-row"></tr>
                <tr class="tr-th">
                  <td colspan="5">
								<span class="deal-time">
								2020-07-26 15:12:12
							</span>
                    <span class="order-no">
								订单号:
								<a href="#">12345678910</a>
							</span>
                  </td>
                </tr>
                <tr class="tr-bd">
                  <td class="product-item clearfix">
                    <div class="product-img">
                      <img src="../../assets/goods-image/monitor.jpg" alt="">
                    </div>
                    <div class="product-name">
                      <p>明基（BenQ）23.8英寸IPS 低蓝光降频闪 智慧爱眼 窄边框内置音箱可竖屏 个人/商务电</p>
                    </div>
                    <span class="product-quantity">x1</span>
                  </td>
                  <td rowspan="1">
                    李广帅
                  </td>
                  <td rowspan="1">
                    ¥1018.98
                  </td>
                  <td rowspan="1">
                    已完成
                  </td>
                  <td rowspan="1">
                    <ul>
                      <li><a href="">查看发票</a></li>
                      <li><a href="">追评</a></li>
                      <li><a href="">立即购买</a></li>
                      <li><a href="">删除订单</a></li>
                    </ul>
                  </td>
                </tr>
                </tbody>
                <tbody>
                <tr class="sep-row"></tr>
                <tr class="tr-th">
                  <td colspan="5">
								<span class="deal-time">
								2020-07-26 15:12:12
							</span>
                    <span class="order-no">
								订单号:
								<a href="#">12345678910</a>
							</span>
                  </td>
                </tr>
                <tr class="tr-bd">
                  <td class="product-item clearfix">
                    <div class="product-img">
                      <img src="../../assets/goods-image/monitor.jpg" alt="">
                    </div>
                    <div class="product-name">
                      <p>明基（BenQ）23.8英寸IPS 低蓝光降频闪 智慧爱眼 窄边框内置音箱可竖屏 个人/商务电</p>
                    </div>
                    <span class="product-quantity">x1</span>
                  </td>
                  <td rowspan="2">
                    李广帅
                  </td>
                  <td rowspan="2">
                    ¥1018.98
                  </td>
                  <td rowspan="2">
                    已完成
                  </td>
                  <td rowspan="2">
                    <ul>
                      <li><a href="">查看发票</a></li>
                      <li><a href="">追评</a></li>
                      <li><a href="">立即购买</a></li>
                      <li><a href="">删除订单</a></li>
                    </ul>
                  </td>
                </tr>
                <tr class="tr-bd">
                  <td class="product-item clearfix">
                    <div class="product-img">
                      <img src="../../assets/goods-image/monitor.jpg" alt="">
                    </div>
                    <div class="product-name">
                      <p>明基（BenQ）23.8英寸IPS 低蓝光降频闪 智慧爱眼 窄边框内置音箱可竖屏 个人/商务电</p>
                    </div>
                    <span class="product-quantity">x1</span>
                  </td>
                </tr>
                </tbody>
                <tbody>
                <tr class="sep-row"></tr>
                <tr class="tr-th">
                  <td colspan="5">
								<span class="deal-time">
								2020-07-26 15:12:12
							</span>
                    <span class="order-no">
								订单号:
								<a href="#">12345678910</a>
							</span>
                  </td>
                </tr>
                <tr class="tr-bd">
                  <td class="product-item clearfix">
                    <div class="product-img">
                      <img src="../../assets/goods-image/monitor.jpg" alt="">
                    </div>
                    <div class="product-name">
                      <p>明基（BenQ）23.8英寸IPS 低蓝光降频闪 智慧爱眼 窄边框内置音箱可竖屏 个人/商务电</p>
                    </div>
                    <span class="product-quantity">x1</span>
                  </td>
                  <td rowspan="3">
                    李广帅
                  </td>
                  <td rowspan="3">
                    ¥1018.98
                  </td>
                  <td rowspan="3">
                    已完成
                  </td>
                  <td rowspan="3">
                    <ul>
                      <li><a href="">查看发票</a></li>
                      <li><a href="">追评</a></li>
                      <li><a href="">立即购买</a></li>
                      <li><a href="">删除订单</a></li>
                    </ul>
                  </td>
                </tr>
                <tr class="tr-bd">
                  <td class="product-item clearfix">
                    <div class="product-img">
                      <img src="../../assets/goods-image/monitor.jpg" alt="">
                    </div>
                    <div class="product-name">
                      <p>明基（BenQ）23.8英寸IPS 低蓝光降频闪 智慧爱眼 窄边框内置音箱可竖屏 个人/商务电</p>
                    </div>
                    <span class="product-quantity">x1</span>
                  </td>
                </tr>
                <tr class="tr-bd">
                  <td class="product-item clearfix">
                    <div class="product-img">
                      <img src="../../assets/goods-image/monitor.jpg" alt="">
                    </div>
                    <div class="product-name">
                      <p>明基（BenQ）23.8英寸IPS 低蓝光降频闪 智慧爱眼 窄边框内置音箱可竖屏 个人/商务电</p>
                    </div>
                    <span class="product-quantity">x1</span>
                  </td>
                </tr>
                </tbody>
                <tbody>
                <tr class="sep-row"></tr>
                <tr class="tr-th">
                  <td colspan="5">
								<span class="deal-time">
								2020-07-26 15:12:12
							</span>
                    <span class="order-no">
								订单号:
								<a href="#">12345678910</a>
							</span>
                  </td>
                </tr>
                <tr class="tr-bd">
                  <td class="product-item clearfix">
                    <div class="product-img">
                      <img src="../../assets/goods-image/monitor.jpg" alt="">
                    </div>
                    <div class="product-name">
                      <p>明基（BenQ）23.8英寸IPS 低蓝光降频闪 智慧爱眼 窄边框内置音箱可竖屏 个人/商务电</p>
                    </div>
                    <span class="product-quantity">x1</span>
                  </td>
                  <td rowspan="4">
                    李广帅
                  </td>
                  <td rowspan="4">
                    ¥1018.98
                  </td>
                  <td rowspan="4">
                    已完成
                  </td>
                  <td rowspan="4">
                    <ul>
                      <li><a href="">查看发票</a></li>
                      <li><a href="">追评</a></li>
                      <li><a href="">立即购买</a></li>
                      <li><a href="">删除订单</a></li>
                    </ul>
                  </td>
                </tr>
                <tr class="tr-bd">
                  <td class="product-item clearfix">
                    <div class="product-img">
                      <img src="../../assets/goods-image/monitor.jpg" alt="">
                    </div>
                    <div class="product-name">
                      <p>明基（BenQ）23.8英寸IPS 低蓝光降频闪 智慧爱眼 窄边框内置音箱可竖屏 个人/商务电</p>
                    </div>
                    <span class="product-quantity">x1</span>
                  </td>
                </tr>
                <tr class="tr-bd">
                  <td class="product-item clearfix">
                    <div class="product-img">
                      <img src="../../assets/goods-image/monitor.jpg" alt="">
                    </div>
                    <div class="product-name">
                      <p>明基（BenQ）23.8英寸IPS 低蓝光降频闪 智慧爱眼 窄边框内置音箱可竖屏 个人/商务电</p>
                    </div>
                    <span class="product-quantity">x1</span>
                  </td>
                </tr>
                <tr class="tr-bd">
                  <td class="product-item clearfix">
                    <div class="product-img">
                      <img src="../../assets/goods-image/monitor.jpg" alt="">
                    </div>
                    <div class="product-name">
                      <p>明基（BenQ）23.8英寸IPS 低蓝光降频闪 智慧爱眼 窄边框内置音箱可竖屏 个人/商务电</p>
                    </div>
                    <span class="product-quantity">x1</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderList"
}
</script>

<style scoped src="../../assets/style/orderList.css">

</style>