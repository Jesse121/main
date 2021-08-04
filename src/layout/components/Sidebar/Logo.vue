<template>
	<div class="sidebar-logo-container" :class="{ collapse: collapse }">
		<transition name="sidebarLogoFade">
			<router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
				<img v-if="logo" :src="logo" class="sidebar-logo" />
				<h1 v-else class="sidebar-title">
					{{ title }}
				</h1>
			</router-link>
			<router-link v-else key="expand" class="sidebar-logo-link" to="/">
				<img v-if="logo" :src="logo" class="sidebar-logo" />
				<h1 class="sidebar-title">
					{{ title }}
				</h1>
			</router-link>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import settings from "@/settings";

export default defineComponent({
	name: "SidebarLogo",
	props: {
		collapse: {
			type: Boolean,
			required: true
		}
	},
	setup() {
		const title = ref(settings.title);
		return {
			title,
			logo: "/favicon.ico"
			// logo: process.env.BASE_URL + "favicon.ico"
		};
	}
});
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
	transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
	opacity: 0;
}

.sidebar-logo-container {
	position: relative;
	// background: $sidebarBg;
	overflow: hidden;
	width: 100%;
	height: 65px;
	line-height: 65px;
	&.collapse {
		text-align: center;
	}

	& .sidebar-logo-link {
		width: 100%;
		height: 100%;

		& .sidebar-logo {
			width: 32px;
			height: 32px;
			// margin-top: 24px;
			margin-right: 5px;
			margin-left: 10px;
		}

		& .sidebar-title {
			display: inline-block;
			// margin-top: -17px;
			margin: 0;
			color: #fff;
			font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
			font-size: 18px;
			font-weight: 600;
			vertical-align: middle;
		}
	}

	&.collapse {
		.sidebar-logo {
			margin-right: 0px;
			margin-left: 0;
			// vertical-align: middle;
		}
	}
}
</style>
