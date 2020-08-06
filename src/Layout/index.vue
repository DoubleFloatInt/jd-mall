<template>
	<div>
		<Header></Header>
		<Nav v-show="showNav"></Nav>
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
        },
        computed: {
            showNav() {
                const showNavPage = ["/"];
                const path = this.$route.path;
                return showNavPage.indexOf(path) !== -1;
            }
        }
    }
</script>

<style scoped>
	@import "../assets/style/base.css";
	@import "../assets/style/common.css";
	@import "../assets/style/index.css";

</style>