<template>
	<div class="navbar">
		<hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

		<breadcrumb class="breadcrumb-container" />

		<div class="right-menu">
			<el-dropdown class="avatar-container" trigger="click">
				<div class="avatar-wrapper">
					<!-- <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" /> -->
					<div class="nickname">{{ name }}</div>
					<i class="el-icon-caret-bottom" />
				</div>
				<template #dropdown>
					<el-dropdown-menu class="user-dropdown">
						<el-dropdown-item v-if="isDev" @click="$router.push('/dev')">
							<span>开发路由</span>
						</el-dropdown-item>
						<el-dropdown-item @click="logout">
							<span style="display: block">退出</span>
						</el-dropdown-item>
						<!-- <el-dropdown-item divided>
							<router-link to="/">Home</router-link>
						</el-dropdown-item> -->
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

import Breadcrumb from "../Breadcrumb/index.vue";
import Hamburger from "../Hamburger/index.vue";

export default defineComponent({
	name: "Navbar",
	components: {
		Breadcrumb,
		Hamburger
	},
	data() {
		return {
			isDev: import.meta.env.DEV
		};
	},
	computed: {
		...mapGetters(["sidebar", "name", "avatar"])
	},
	methods: {
		toggleSideBar() {
			this.$store.dispatch("app/toggleSideBar");
		},
		async logout() {
			await this.$store.dispatch("user/logout");
			this.$router.push(`/login?redirect=${encodeURIComponent(this.$route.fullPath)}`);
		}
	}
});
</script>

<style lang="scss" scoped>
.navbar {
	position: relative;
	overflow: hidden;
	height: 56px;
	background: #fff;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

	.hamburger-container {
		height: 100%;
		cursor: pointer;
		float: left;
		line-height: 56px;
		-webkit-tap-highlight-color: transparent;
		transition: background 0.3s;

		// &:hover {
		// 	background: rgba(0, 0, 0, 0.025);
		// }
	}

	.breadcrumb-container {
		float: left;
	}

	.right-menu {
		height: 100%;
		margin-right: 15px;
		float: right;
		line-height: 56px;

		&:focus {
			outline: none;
		}

		// .right-menu-item {
		// 	display: inline-block;
		// 	padding: 0 8px;
		// 	height: 100%;
		// 	font-size: 18px;
		// 	color: #5a5e66;
		// 	vertical-align: text-bottom;

		// 	&.hover-effect {
		// 		cursor: pointer;
		// 		transition: background 0.3s;

		// 		&:hover {
		// 			background: rgba(0, 0, 0, 0.025);
		// 		}
		// 	}
		// }

		:deep(.avatar-container) {
			margin-right: 30px;
			line-height: inherit;

			.avatar-wrapper {
				position: relative;

				.nickname {
					color: #666;
					cursor: pointer;
					// height: 40px;
					font-size: 14px;
					// border-radius: 10px;
				}

				.el-icon-caret-bottom {
					position: absolute;
					top: 23px;
					right: -20px;
					cursor: pointer;
					font-size: 12px;
				}
			}
		}
	}
}
</style>
