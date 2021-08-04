<template>
	<el-card style="overflow: auto;width: 100%;">
		<el-collapse @change="onChange">
			<el-collapse-item v-for="item in list" :key="item.id" :name="item.id">
				<template #title>
					<h4>
						<span>{{ item.name }}{{ item.name !== item.enumDesc ? ` - ${item.enumDesc}` : "" }}- </span>
						<span>[{{ item.id }}]</span>
					</h4>
				</template>
				<div>
					<pre>{{ JSON.stringify(item.children, null, " ") }}</pre>
				</div>
			</el-collapse-item>
		</el-collapse>
	</el-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { queryChildSysEnum } from "@/api/common";

function parseExternalExt(list: any[]): any[] {
	return list.map(it => {
		try {
			it.externalExt = it.externalExt ? JSON.parse(it.externalExt) : it.externalExt;
			// eslint-disable-next-line no-empty
		} catch {}

		return {
			...it,
			children: it.children?.length ? parseExternalExt(it.children) : it.children
		};
	});
}

export default defineComponent({
	setup() {
		const list = ref<any[]>([]);

		function getSysEnum(id: number) {
			return queryChildSysEnum({ id }).then(res => {
				return parseExternalExt(res.result);
			});
		}

		function onChange(ids: number[]) {
			const id = ids[ids.length - 1];
			const index = list.value.findIndex((it: any) => it.id === id);
			getSysEnum(id).then(res => {
				const ls = list.value.slice();
				ls[index].children = res;

				list.value = ls;
			});
		}

		onMounted(() => {
			getSysEnum(-1).then(res => (list.value = res));
		});

		return {
			list,
			onChange
		};
	}
});
</script>

<style scoped>
.el-collapse {
	border-bottom: none;
}
</style>
