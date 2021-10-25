<script>
	import { page } from '$app/stores';

	let links = [
		{ id: 1, title: 'Home', path: '/' },
		{ id: 2, title: 'About', path: '/about' },
		{ id: 3, title: 'Environment', path: '/environment' }
	];
</script>

<nav class="flex justify-center w-full">
	{#each links as link (link.id)}
		<a
			class={`mx-4 text-lg hover:text-gray-500 ${$page.path === link.path && 'text-blue-700'}`}
			href={link.path}>{link.title}</a
		>
	{/each}
</nav>
