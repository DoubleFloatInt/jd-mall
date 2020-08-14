<template>
  <div class="container">
    <div class="trade-header clearfix">
      <div class="logo">
        <router-link to="/" tag="a">
          <img alt="logo" src="../../assets/images/trade-logo.png">
        </router-link>
      </div>
      <span>结算页</span>
    </div>
    <div class="order-content">
      <div class="title">
        <h3>填写并核对订单信息</h3>
      </div>
      <div class="order-detail">
        <div class="address">
          <div class="title">
            <h3>收货人信息</h3>
            <a @click="handleAddAddress" class="add-address">添加收货地址</a>
          </div>
          <div class="address-list">
            <div class="none-address" v-show="!hasAddress">
              暂无收货地址
            </div>
            <div class="default-address address-item clearfix" v-show="hasAddress">
              <div class="selection-btn selected">{{ selectedAddress.realName }}</div>
              <div class="address-detail">
                {{
                  selectedAddress.realName + ' ' + selectedAddress.province + ' ' + selectedAddress.city + ' ' + selectedAddress.area + ' ' + selectedAddress.street + ' ' + selectedAddress.phonenum
                }}
                <a
                    class="edit"
                    @click="handleEditAddress(selectedAddress.addressId)"
                >编辑</a>
              </div>
              <div class="default-sign" v-if="selectedAddress.defaultAddress">默认地址</div>
            </div>
            <transition name="el-zoom-in-top">
              <div class="">
                <div
                    v-show="showMoreAddress"
                    class="default-address address-item clearfix"
                    v-for="item in addressList"
                    :key="item.addressId"
                    @click="handleChangeAddress(item.addressId)"
                >
                  <div class="selection-btn">{{ item.realName }}</div>
                  <div class="address-detail">
                    {{
                      item.realName + ' ' + item.province + ' ' + item.city + ' ' + item.area + ' ' + item.street + ' ' + item.phonenum
                    }}
                    <a
                        class="edit"
                        @click="handleEditAddress(item.addressId)">编辑</a>
                  </div>
                  <div class="default-sign" v-if="item.defaultAddress">默认地址</div>
                </div>
              </div>
            </transition>
          </div>
          <div class="more-address">
            <a @click="handleShowMoreAddress">更多地址</a>
          </div>
        </div>
        <div class="pay-method clearfix">
          <div class="title">
            支付方式
          </div>
          <div class="option-list">
            <div class="option-item">货到付款</div>
            <div class="option-item selected">在线支付</div>
            <div class="option-item">公司转账</div>
          </div>
        </div>
        <div class="product clearfix">
          <div class="title">
            <h3>送货清单</h3>
            <a class="back-to-shopcar" href="">返回修改购物车</a>
          </div>
          <div class="product-content">
            <div class="delivery-method">
              <div class="title">
                配送方式
              </div>
              <div class="delivery-method-option clearfix">
                <div class="option-item selected">京东快递</div>
                <div class="option-item">上门自提</div>
              </div>
            </div>
            <div class="product-list">
              <div
                  class="product-item clearfix"
                  v-for="item in this.order.productList"
                  :key="item.id"
              >
                <div class="product-img">
                  <img alt=""
                       :src="item.productImage">
                </div>
                <div class="product-name">
                  <p>{{ item.productName }}</p>
                </div>
                <div class="product-price">
                  <p>¥{{ item.productPrice }}</p>
                </div>
                <div class="product-quantity">
                  <span>x{{ item.quantity }}</span>
                </div>
                <div class="has-remain">
                  <span>有货</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order-summary clearfix">
      <div class="rt">
        <dl class="clearfix">
          <dt><span class="product-nums">{{ order.productCount }}</span>件商品,总商品金额:</dt>
          <dd>¥{{ order.orderAmountTotal }}</dd>
        </dl>
        <dl class="clearfix">
          <dt>运费:</dt>
          <dd>¥0.00</dd>
        </dl>
        <dl class="clearfix">
          <dt>商品优惠:</dt>
          <dd>¥0.00</dd>
        </dl>
      </div>
    </div>
    <div class="order-address">
      <p class="sales-total">应付总额:<span>¥{{ order.orderAmountTotal }}</span></p>
      <p> 寄送至：
        {{
          selectedAddress.province + ' ' + selectedAddress.city + ' ' + selectedAddress.area + ' ' + selectedAddress.street
        }}
        收货人：{{ selectedAddress.realName + ' ' + selectedAddress.phonenum }} 131****8799 </p>
    </div>
    <div class="submit-order">
      <button @click="handleSubmitOrder">提交订单</button>
    </div>
    <AddressDialog
        :title.sync="addressDialogTitle"
        :address-id.sync="editAddressId"
        v-if="showAddressDialog"
        @close="handleCloseAddressDialog"
        @getAddressList="getAddressList"
    ></AddressDialog>
  </div>
</template>

<script>
import {deleteShopCarItems, getShopCarListByProductIds} from "@/api/shopcar";
import {getAddressList} from "@/api/address";
import {addOrder} from "@/api/order";
import AddressDialog from "@/components/AddressDialog/index";

export default {
  name: "Trade",
  components: {AddressDialog},
  computed: {
    hasAddress() {
      for (let key in this.selectedAddress) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      order: {
        addressId: '',
        productCount: 0,
        orderAmountTotal: 0,
        productList: []
      },
      addressList: [],
      selectedAddress: {},
      showMoreAddress: false,
      showAddressDialog: false,
      addressDialogTitle: '',
      editAddressId: ''
    }
  },
  created() {
    getShopCarListByProductIds(this.$route.query.productIds).then(res => {
      this.order.productList = res.rows;
      this.order.productCount = res.rows.length;
      for (let i = 0; i < res.rows.length; i++) {
        this.order.orderAmountTotal += res.rows[i].productPrice;
      }
    })
    this.getAddressList();
  },
  methods: {
    getAddressList() {
      getAddressList().then(res => {
        if (res.rows.length > 0) {
          if (res.rows.length === 1) {
            this.selectedAddress = res.rows[0];
            this.addressList = [];
          } else {
            this.selectedAddress = res.rows[0]
            for (let i = 1; i < res.rows.length; i++) {
              this.addressList = [...this.addressList, res.rows[i]];
            }
          }
        } else {
          this.selectedAddress = {};
          this.addressList = [];
        }
      })
      this.showAddressDialog = false;
      console.log(this.selectedAddress);
    },
    handleAddAddress() {
      this.addressDialogTitle = '新增收货地址';
      this.editAddressId = '';
      this.showAddressDialog = true;
    },
    handleEditAddress(addressId) {
      this.addressDialogTitle = '修改收货地址';
      this.editAddressId = addressId;
      this.showAddressDialog = true;
    },
    handleCloseAddressDialog() {
      this.showAddressDialog = false;
    },
    handleShowMoreAddress() {
      this.showMoreAddress = !this.showMoreAddress;
    },
    handleChangeAddress(id) {
      this.addressList = [...this.addressList, this.selectedAddress]
      for (let i = 0; i < this.addressList.length; i++) {
        let item = this.addressList[i];
        if (item.addressId === id) {
          this.selectedAddress = item;
          break;
        }
      }
      this.addressList = this.addressList.filter(item => {
        return item.addressId !== id;
      })
    },
    handleSubmitOrder() {
      this.order.addressId = this.selectedAddress.addressId;
      if (this.order.addressId !== '') {
        addOrder(this.order).then(() => {
          deleteShopCarItems(this.$route.query.productIds).then(() => {
            this.msgSuccess("订单结算成功!!!");
            this.$router.push({path: '/orderList'})
          })
        });
      } else {
        this.msgError("尚未选择地址!");
      }
    }
  }
}
</script>

<style scoped src="../../assets/style/trade.css">

</style>