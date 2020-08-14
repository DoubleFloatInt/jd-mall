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
                  <li @click="changeOrderStatus('')" class="link" :class="{'current':order.status === ''}"><a href="#">全部订单</a>
                  </li>
                  <li @click="changeOrderStatus('0')" class="link" :class="{'current':order.status === '0'}"><a
                      href="#">未付款</a></li>
                  <li @click="changeOrderStatus('1')" class="link" :class="{'current':order.status === '1'}"><a
                      href="#">未发货</a></li>
                  <li @click="changeOrderStatus('2')" class="link" :class="{'current':order.status === '2'}"><a
                      href="#">已发货</a></li>
                  <li @click="changeOrderStatus('3')" class="link" :class="{'current':order.status === '3'}"><a
                      href="#">待评价</a></li>
                  <li @click="changeOrderStatus('4')" class="link" :class="{'current':order.status === '4'}"><a
                      href="#">已完成</a></li>
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
                <tbody v-if="noneOrder">
                <tr>
                  <td colspan="9">
                    <p class="noneOrder">
                      暂无相关订单
                    </p>
                  </td>
                </tr>
                </tbody>
                <tbody
                    v-for="item in orderList"
                    :key="item.id"
                >
                <tr class="sep-row"></tr>
                <tr class="tr-th">
                  <td colspan="5">
                    <span class="deal-time">{{ item.createTime }}</span>
                    <span class="order-no">
								订单号:
								<a href="#">{{ item.orderNo }}</a>
							</span>
                  </td>
                </tr>
                <tr class="tr-bd"
                    v-for="(productItem, index) in item.productList"
                    :key="productItem.productId"
                >
                  <td class="product-item clearfix">
                    <div class="product-img">
                      <img :src="productItem.productImage" alt="">
                    </div>
                    <div class="product-name">
                      <p>{{ productItem.productName }}</p>
                    </div>
                    <span class="product-quantity">x1</span>
                  </td>
                  <td :rowspan="item.productCount" v-if="index === 0">
                    {{ item.realName }}
                  </td>
                  <td :rowspan="item.productCount" v-if="index === 0">
                    ¥{{ item.orderAmountTotal }}
                  </td>
                  <td :rowspan="item.productCount" v-if="index === 0">
                    <span v-if="item.status === '0'">未付款</span>
                    <span v-if="item.status === '1'">未发货</span>
                    <span v-if="item.status === '2'">已发货</span>
                    <span v-if="item.status === '3'">待评价</span>
                    <span v-if="item.status === '4'">已完成</span>
                  </td>
                  <td :rowspan="item.productCount" v-if="index === 0">
                    <ul>
                      <li><a href="">查看发票</a></li>
                      <li v-if="item.status === '4'"><a href="">追评</a></li>
                      <li><a href="">立即购买</a></li>
                      <li><a @click="handleDeleteOrder(item.orderId)">删除订单</a></li>
                    </ul>
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
import {deleteOrder, getOrderList} from "@/api/order";

export default {
  name: "OrderList",
  inject: ['reload'],
  computed: {
    noneOrder() {
      return this.orderList.length === 0;
    }
  },
  data() {
    return {
      order: {
        status: ''
      },
      orderList: []
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getOrderList(this.order).then(res => {
        this.orderList = res.rows;
      })
    },
    changeOrderStatus(status) {
      this.order.status = status;
      this.getList();
    },
    handleDeleteOrder(id) {
      this.$confirm('是否永久删除此订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: "warning"
      }).then(() => {
        deleteOrder(id).then(() => {
          this.msgSuccess("删除成功!")
          this.reload();
        }).catch(err => {
          this.msgError(err);
        })
      })
    }
  }
}
</script>

<style scoped src="../../assets/style/orderList.css">

</style>

<style scoped>
.noneOrder {
  margin-top: 10px;
  text-align: center;
  line-height: 30px;
  font-size: 16px
}
</style>