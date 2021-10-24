<script>
	import { pokemon } from '../stores/pokestore';
	import PokemanCard from '../components/PokemanCard.svelte';

	let searchTerm;
	let filteredPokemon = [];

	$: {
		searchTerm
			? (filteredPokemon = [...$pokemon.filter((pokeman) => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()))])
			: (filteredPokemon = [...$pokemon]);
	}
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>
<small class="font-mono">Count: {filteredPokemon.length}</small>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search Pokemon"
	bind:value={searchTerm}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>
