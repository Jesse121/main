<template>
	<div :class="classObj" class="app-wrapper">
		<sidebar class="sidebar-container" />
		<div class="main-container">
			<div class="fixed-header">
				<navbar />
				<tags-view />
			</div>
			<app-main />
		</div>
	</div>
</template>

<script>
import { defineComponent } from "vue";

import { AppMain, Navbar, Sidebar, TagsView } from "./components";

export default defineComponent({
	name: "Layout",
	components: {
		Navbar,
		Sidebar,
		AppMain,
		TagsView
	},
	computed: {
		sidebar() {
			return this.$store.state.app.sidebar;
		},
		classObj() {
			return {
				hideSidebar: !this.sidebar.opened,
				openSidebar: this.sidebar.opened,
				withoutAnimation: this.sidebar.withoutAnimation
			};
		}
	}
	// methods: {
	// 	handleClickOutside() {
	// 		this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
	// 	}
	// }
});
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";

.app-wrapper {
	@include clearfix;
	position: relative;
	width: 100%;
	height: 100%;
}
.drawer-bg {
	position: absolute;
	z-index: 999;
	top: 0;
	width: 100%;
	height: 100%;
	background: #000;
	opacity: 0.3;
}

.fixed-header {
	position: fixed;
	z-index: 9;
	top: 0;
	right: 0;
	width: calc(100% - #{$sideBarWidth});
	transition: width 0.28s;
}

.hideSidebar .fixed-header {
	width: calc(100% - 64px);
}
</style>
