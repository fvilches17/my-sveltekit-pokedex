<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();
		return { props: { pokeman } };
	}
</script>

<script>
	export let pokeman;
	let { height, name, sprites, types, weight } = pokeman;
	const type = types[0].type.name;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{name}</h1>

	<p>
		Type: <strong>{type}</strong> | Height: <strong>{height}</strong> | Weight:
		<strong>{weight}</strong>
	</p>

	<img src={sprites['front_default']} alt={name} />
</div>
