<script>
	export let title = '';
	export let tags = []; // Array of programming languages
	import Tag from './Tag.svelte';
</script>

<div class="bg-zinc-800 rounded-3xl shadow-md mx-auto p-10">
	<h2 class="text-white font-bold text-xl mb-2">{title}</h2>
	<p class="text-white">
		This is some sample text inside the card. You can replace this with any content you like.
	</p>
	<div class="flex space-x-2 mt-4">
		{#each tags as tag}
			<Tag language={tag} />
		{/each}
	</div>
</div>
