<template>
	<div>
		<Header v-if="this.$route.meta.searchBox"></Header>
		<Nav v-show="this.$route.meta.nav"></Nav>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
    import Header from "../components/Header/index";
    import Footer from "../components/Footer/index";
    import Nav from "../components/Nav/index";

    export default {
        name: "Layout",
        components: {
            Footer,
            Header,
            Nav
        }
    }
</script>

<style scoped>
	@import "../assets/style/base.css";
	@import "../assets/style/common.css";
</style>