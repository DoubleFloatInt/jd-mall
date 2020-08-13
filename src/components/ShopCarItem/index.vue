<template>
  <div class="info wrap">
    <ul class="clearfix">
      <li class="info_1"><input type="checkbox" v-model="select" @change="changeSelect"/></li>
      <li class="info_2"><img :src="productInfo.productImage" width="80px"/></li>
      <li class="info_3"><a href="">{{productInfo.productName}}</a></li>
      <li class="info_4"><a>颜色：五彩斑斓的黑</a></li>
      <li class="info_5">￥{{productInfo.productPrice}}</li>
      <li class="info_6">
        <button @click="quantityMinus">-</button>
        <input v-model="productInfo.quantity"/>
        <button class="but" @click="quantityPlus">+</button>
      </li>
      <li class="info_7">￥{{priceTotal}}</li>
      <li class="info_8">
        <a @click="handleDeleteItem(productInfo.productId)">删除</a>
        <dd><a href="">移到我的关注</a></dd>
      </li>
    </ul>
  </div>
</template>

<script>
import {deleteShopCarItem, updateShopCarItem} from "@/api/shopcar";

export default {
  name: "ShopCarItem",
  props: {
    productInfo: {
      required: true
    },
    select: {
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    priceTotal() {
      return parseInt(this.productInfo.quantity) * parseInt(this.productInfo.productPrice);
    }
  },
  methods: {
    quantityPlus() {
      this.productInfo.quantity += 1;
      updateShopCarItem(this.productInfo);
    },
    quantityMinus() {
      updateShopCarItem(this.productInfo);
      this.productInfo.quantity -= 1;
      if (this.productInfo.quantity <= 0) {
        this.productInfo.quantity = 1;
      }
    },
    changeSelect() {
      if (this.select) {
        this.$emit("addSelect", this.productInfo.productId);
      } else {
        this.$emit("removeSelect", this.productInfo.productId);
      }
    },
    handleDeleteItem(id) {
      deleteShopCarItem(id).then(res => {
        this.$emit("removeShopCarItem", id);
        this.msgSuccess(res.msg);
      }).catch(err => {
        this.msgError(err);
      })
    }
  }
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