<script context="module">
	async function getGreeting(fetch) {
		const response = await fetch('api/greetings');
		const { greeting } = await response.json();
		return greeting;
	}

	async function getPokemon() {
		const apiBaseUri = import.meta.env.VITE_POKEDEX_BASE_URI;
		const url = `${apiBaseUri}/v2/pokemon?limit=150`;
		const response = await fetch(url);
		const data = await response.json();
		return data.results.map((data, index) => {
			const id = index + 1;
			const name = data.name;
			const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
			return { id, name, image };
		});
	}

	export async function load({ fetch }) {
		const [greeting, pokemon] = await Promise.all([getGreeting(fetch), getPokemon()]);
		return { props: { greeting, pokemon } };
	}
</script>

<script>
	import { onMount } from 'svelte';
	import Header from '$lib/Header.svelte';
	import PokemanCard from '$lib/PokemanCard.svelte';

	export let greeting, pokemon;
	let filteredPokemon, searchTerm, inputElement;

	$: {
		const byName = (pokeman) => pokeman.name.includes(searchTerm.toLowerCase());
		searchTerm ? (filteredPokemon = [...pokemon.filter(byName)]) : (filteredPokemon = [...pokemon]);
	}

	onMount(() => inputElement.focus());
</script>

<svelte:head>
	<title>{greeting}</title>
</svelte:head>

<Header title={import.meta.env.VITE_MESSAGE} />

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search Pokemon"
	bind:value={searchTerm}
	bind:this={inputElement}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman (pokeman.id)}
		<PokemanCard {pokeman} />
	{/each}
</div>
