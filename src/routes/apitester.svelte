<script>
	import Header from '$lib/Header.svelte';
	const title = 'Pokedex Environment Variables';

	let displayGreeting = '...';
	const loadGreetingManual = async () => {
		const res = await fetch('api/greetings');
		const { greeting } = await res.json();
		displayGreeting = greeting;
	};
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Header {title} />

<div class="text-center">
	<p>{displayGreeting}</p>
	<button class="bg-gray-900 text-white rounded-md p-2 mt-2" on:click={loadGreetingManual}>
		Get Greeting
	</button>
</div>
