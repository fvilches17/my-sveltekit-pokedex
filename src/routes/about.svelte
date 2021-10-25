<script context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script>
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<title>About Svelte Kit Pokedex</title>
</svelte:head>

<Header title='About' />
<p class="text-center">This is a Svelte Kit demo that builds a pokedex</p>
