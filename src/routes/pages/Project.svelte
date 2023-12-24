<script>
	import Button from '../components/Button.svelte';
	import Game from './project/Game.svelte';
	import Website from './project/Website.svelte';

	let activePage = 'Website';
	function setActivePage(page) {
		activePage = page;
	}
</script>

<div class="mx-auto max-w-7xl py-20">

	<h1 class="mb-8 text-white font-semibold text-4xl">Projects</h1>

	<div class="flex items-center gap-4 justify-start mb-4">
		<Button label="Website" active={activePage === 'Website'} onClick={() => setActivePage('Website')} />
		<Button label="Game" active={activePage === 'Game'} onClick={() => setActivePage('Game')} />
	</div>

	{#if activePage === 'Website'}
		<Website/>
	{:else if activePage === 'Game'}
		<Game/>
	{/if}
</div>