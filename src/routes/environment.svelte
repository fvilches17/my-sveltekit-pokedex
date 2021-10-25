<script>
	import Header from '$lib/Header.svelte';
	const title = 'Pokedex Environment Variables';
	const envVars = Object.entries(import.meta.env).map((kv) => ({ key: kv[0], val: kv[1] }));
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Header {title} />

<table class="m-auto divide-y divide-gray-200">
	{#each envVars as kv}
		<tr class="p-10 text-left">
			<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{kv.key}</th>
			<td class="px-6 py-4 whitespace-nowrap">{kv.val}</td>
		</tr>
	{/each}
</table>
