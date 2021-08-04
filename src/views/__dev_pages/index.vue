<template>
	<el-card>
		<div v-for="route in devPagesRoutes" :key="route.path">
			<ul>
				<li v-if="route.children?.length">
					<h3>{{ route.meta?.title || route.path }}</h3>
					<ul>
						<li v-for="item in route.children" v-show="item.path" :key="item.path">
							<router-link :to="`${route.path}/${item.path}`">{{ item.meta?.title || item.path }}</router-link>
						</li>
					</ul>
				</li>
				<li v-else>{{ route.meta?.title || route.path }}</li>
			</ul>
		</div>
	</el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { devPagesRoutes } from "@/router";

export default defineComponent({
	setup() {
		return {
			devPagesRoutes
		};
	}
});
</script>

<style scoped>
li {
	margin: 24px 0;
}
</style>
