<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		const apiBaseUri = import.meta.env.VITE_POKEDEX_BASE_URI;
		const url = `${apiBaseUri}/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();
		return { props: { pokeman } };
	}
</script>

<script>
	import Header from '$lib/Header.svelte';
	export let pokeman;
	const { height, name, sprites, weight } = pokeman;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<Header title={name} />

	<p>
		Height: <strong>{height}</strong> | Weight: <strong>{weight}</strong>
	</p>

	<img src={sprites['front_default']} alt={name} />

	<button
		class="bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-200 p-2 hover:shadow-md"
		on:click={() => window.history.back()}
	>
		Back
	</button>
</div>
