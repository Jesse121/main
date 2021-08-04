<template>
	<div :class="{ 'has-logo': showLogo }">
		<logo v-if="showLogo" :collapse="isCollapse" />
		<el-scrollbar wrap-class="scrollbar-wrapper">
			<el-menu
				:default-active="activeMenu"
				:collapse="isCollapse"
				:background-color="variables.sidebarBg"
				:text-color="variables.menuText"
				:active-text-color="variables.menuActiveText"
				:unique-opened="true"
				:collapse-transition="false"
				mode="vertical"
			>
				<sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import { asyncRoutes } from "@/router";
import store from "@/store";
import { getConfigRoutes } from "@/store/modules/user";
import variables from "@/styles/variables.scss";

import Logo from "./Logo.vue";
import SidebarItem from "./SidebarItem.vue";

export default {
	name: "Sidebar",
	components: { SidebarItem, Logo },
	computed: {
		...mapGetters(["sidebar"]),
		routes() {
			let routes = [];
			if (store.getters.routes) {
				routes = getConfigRoutes(asyncRoutes, store.getters.routes, false);
			} else {
				routes = this.$router.options.routes;
			}

			return routes;
		},
		activeMenu() {
			const route = this.$route;
			const { meta, matched } = route;
			// if set path, the sidebar will highlight the path you set
			if (meta.activeMenu) {
				return meta.activeMenu;
			}
			// return matched.length > 2 ? matched[1].path : path;
			return matched[0].path;
		},
		showLogo() {
			return true;
		},
		variables() {
			return variables;
		},
		isCollapse() {
			return !this.sidebar.opened;
		}
	}
};
</script>
