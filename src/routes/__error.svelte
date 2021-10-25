<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	import Header from '$lib/Header.svelte';
	export let title;
</script>

<Header {title} />