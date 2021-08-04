<script>
export default {
	setup() {
		const { params, query } = this.$route;
		const { path } = params;
		this.$router.replace({ path: "/" + path, query });

		return h => {
			return h(); // avoid warning message
		};
	}
};
</script>
