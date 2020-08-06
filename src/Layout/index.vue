<template>
	<div>
		<Header></Header>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
    import Header from "../components/Header/index";
    import Footer from "../components/Footer/index";

    export default {
        name: "Layout",
        components: {
            Footer,
            Header
        }
    }
</script>

<style scoped>
	@import "../assets/style/common.css";
	@import "../assets/style/index.css";

</style>