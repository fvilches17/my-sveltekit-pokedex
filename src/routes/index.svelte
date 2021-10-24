<script context="module">
	export async function load() {
		const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
		const response = await fetch(url);
		const data = await response.json();
		const pokemon = data.results.map((data, index) => {
			const name = data.name;
			const id = index + 1;
			return {
				id,
				name,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
			};
		});

		return { props: { pokemon } };
	}
</script>

<script>
	import { onMount } from 'svelte';
	import PokemanCard from '../components/PokemanCard.svelte';
	
	export let pokemon;
	let filteredPokemon, searchTerm, inputElement;

	$: {
		searchTerm
			? (filteredPokemon = [...pokemon.filter((pokeman) =>pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()))])
			: (filteredPokemon = [...pokemon]);
	}

	onMount(() => inputElement.focus());
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

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
