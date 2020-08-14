<template>
  <div class="dialog">
    <div class="form-box">
      <div class="title">
        <h3>{{title}}</h3>
        <span @click="handleCloseDialog" class="close">X</span>
      </div>
      <div class="content">
        <div class="input-item">
          <dl>
            <dt>所在地区</dt>
            <dd>
              <VDistpicker
                  :province="addressInfo.province"
                  :city="addressInfo.city"
                  :area="addressInfo.area"
                  @selected="onSelected"
              ></VDistpicker>
            </dd>
          </dl>
        </div>
        <div class="input-item">
          <dl>
            <dt>收货人</dt>
            <dd><input type="text" v-model="addressInfo.realName"></dd>
          </dl>
        </div>
        <div class="input-item">
          <dl>
            <dt>详细地址</dt>
            <dd><input type="text" v-model="addressInfo.street"></dd>
          </dl>
        </div>
        <div class="input-item">
          <dl>
            <dt>手机号码</dt>
            <dd><input type="text" v-model="addressInfo.phonenum"></dd>
          </dl>
        </div>
        <div class="input-item">
          <dl>
            <dt>邮编</dt>
            <dd><input type="text" v-model="addressInfo.zip"></dd>
          </dl>
        </div>
        <div class="input-item">
          <button type="button" @click="handleSaveAddress">保存收货人信息</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {addAddress, getAddressInfo, updateAddress} from "@/api/address";
import VDistpicker from 'v-distpicker';

export default {
  name: "AddressDialog",
  components: {
    VDistpicker
  },
  props: {
    title: {
      required: true,
    },
    addressId: {
      required: false,
      default: ''
    }
  },
  data() {
    return {
      addressInfo: {

      }
    }
  },
  created() {
    if (this.addressId !== '') {
      getAddressInfo(this.addressId).then(res => {
        this.addressInfo = res.data;
        this.addressInfo.createTime = '';
        this.addressInfo.params = undefined;
      }).catch(err => {
        this.msgError(err);
      })
    }
  },
  methods: {
    handleCloseDialog() {
      this.$emit('close');
    },
    onSelected(data) {
      this.province = data.province.value;
      this.city = data.city.value;
      this.area = data.area.value;
      this.addressInfo.province = this.province;
      this.addressInfo.city = this.city;
      this.addressInfo.area = this.area;
    },
    handleSaveAddress() {
      if (this.addressId === '') {
        addAddress(this.addressInfo).then(res => {
          this.msgSuccess(res.msg);
        }).catch(err => {
          this.msgError(err);
        });
      } else {
        updateAddress(this.addressInfo).then(res => {
          this.msgSuccess(res.msg);
        }).catch(err => {
          this.msgError(err);
        })
      }
      setTimeout(() => {
        this.$emit('getAddressList');
      }, 1000)
    }
  }
};
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .15);
}

.dialog .form-box {
  position: absolute;
  top: 200px;
  left: 50%;
  width: 700px;
  transform: translateX(-50%);
  border: 4px solid rgba(0, 0, 0, .1);
  background-color: #ffffff;
}

.dialog .form-box .title {
  position: relative;
  height: 20px;
  padding: 5px;
  background-color: #f3f3f3;
}

.dialog .form-box .title .close {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 16px;
}

.dialog .form-box .content {
  padding: 10px 20px;
}

.content .input-item {
  width: 100%;
  height: 36px;
  padding: 10px 20px;
}

.content .input-item dt {
  float: left;
  width: 80px;
  line-height: 30px;
  text-align: left;
}

.content .input-item dd {
  float: left;
}

.content .input-item dd input {
  display: block;
  width: 200px;
  height: 20px;
  margin: 5px 0;
}

.content .input-item button {
  display: block;
  width: 120px;
  height: 28px;
  color: #ffffff;
  background-color: #e1251b;
  border: none;
  border-radius: 5px;
  outline: none;
}

.distpicker-address-wrapper select {
  height: 30px !important;
  font-size: 12px !important;
  border-radius: 0 !important;
}
</style>