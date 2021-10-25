<script>
    const pageTitle = 'Pokedex Environment Variables';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">{pageTitle}</h1>

<ul>
	<li>Base Url: {import.meta.env.BASE_URL}</li>
	<li>Dev: {import.meta.env.DEV}</li>
	<li>Mode: {import.meta.env.MODE}</li>
	<li>Prod: {import.meta.env.PROD}</li>
	<li>Ssr: {import.meta.env.SSR}</li>
	<li>Message: {import.meta.env.VITE_MESSAGE}</li>
	<li>Secret: {import.meta.env.SECRET}</li>
</ul>