<template>
	<!-- <el-config-provider :locale="locale">
		<router-view />
	</el-config-provider> -->
	<!-- 路由跳转 -->
	<router-link to="/index">Home</router-link>
	<!-- 子应用容器 -->
	<div id="subapp-viewport" />
	<!-- 子应用路由跳转 -->
	<router-link to="/vue3-demo/index">vue3-demo/index</router-link>
</template>

<script setup lang="ts">
import locale from "element-plus/lib/locale/lang/zh-cn";
</script>
