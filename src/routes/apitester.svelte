<script>
	import Header from '$lib/Header.svelte';
	const title = 'Pokedex Environment Variables';

	let displayGreeting = '...';
	const loadGreetingManual = async () => {
		const res = await fetch('api/greetings');
		const { greeting } = await res.json();
		displayGreeting = greeting;
	};

	let currentCount = 0;
	const loadCount = async () => {
		const res = await fetch('api/count');
		const { count } = await res.json();
		currentCount = count;
	};

	let date = '...';
	const loadDate = async () => {
		const res = await fetch('api/date');
		date = await res.text();
	};
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Header {title} />

<div class="text-center">
	<p>{displayGreeting}</p>
	<button class="bg-gray-900 text-white rounded-md p-2 my-2" on:click={loadGreetingManual}>
		Get Greeting
	</button>

	<p>{currentCount}</p>
	<button class="bg-gray-900 text-white rounded-md p-2 my-2" on:click={loadCount}>
		Get count
	</button>

	<p>{date}</p>
	<button class="bg-gray-900 text-white rounded-md p-2 my-2" on:click={loadDate}>
		Get Date (python 🐍)
	</button>
</div>
