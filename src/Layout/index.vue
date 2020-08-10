<template>
  <div>
    <Header v-if="this.$route.meta.headNav"></Header>
    <SearchBox v-if="this.$route.meta.searchBox"></SearchBox>
    <Nav v-show="this.$route.meta.nav"></Nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/HeaderNav/index";
import SearchBox from "../components/SearchBox/index";
import Nav from "../components/Nav/index";
import Footer from "../components/Footer/index";

export default {
  name: "Layout",
  components: {

    Header,
    SearchBox,
    Nav,
    Footer
  }
}
</script>

<style scoped>
@import "../assets/style/base.css";
@import "../assets/style/common.css";
</style>