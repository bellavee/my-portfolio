<script>
	import Tag from './Tag.svelte';
	import github_mark from '$lib/assets/icon/github-mark-white.svg'
	export let title = '';
	export let description = '';
	export let tags = []; // Array of programming languages
	export let images = []; // Array for image URLs
	export let githubLink = ''; // GitHub link URL
</script>

<style>
    .image-container img:first-child {
        position: absolute;
        bottom: 0;
        width: 60%; /* Smaller image */
        z-index: 2; /* Lower z-index */
    }

    .image-container img:last-child {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 45%; /* Larger image */
        z-index: 1; /* Higher z-index so it's on top */
    }

    .card-container {
        position: relative;
        transition: all 0.3s ease-in-out;
    }

    .github-link {
        position: absolute;
        top: 2.5rem; /* Adjust as needed */
        right: 2.5rem; /* Adjust as needed */
        width: 40px; /* Size of the icon */
        height: 40px;
    }

    .github-icon {
        width: 100%;
        height: 100%;
        transition: filter 0.3s ease-in-out;
    }

    .github-icon:hover {
        filter: opacity(40%); /* Darken the image on hover */
    }

</style>

<div class="w-full">
	<div class="border border-navy-700 card-container bg-navy-800 rounded-3xl mx-auto p-10 pb-0 hover:bg-navy-700 transition duration-300 ease-in-out">

		{#if githubLink !== ''}
			<a href={githubLink} target="_blank" class="github-link">
				<img class="github-icon" src={github_mark} alt="github"/>
			</a>
		{/if}

		{#if title !== ''}
			<h2 class="text-white font-bold text-4xl mb-2 mr-12">{title}</h2>
		{/if}

		{#if description !== ''}
			<p class="text-white font-extralight">
				{description}
			</p>
		{/if}

		{#if tags.length > 0}
			<div class="flex flex-wrap gap-2 mt-4">
				{#each tags as tag}
					<Tag language={tag} />
				{/each}
			</div>
		{/if}

		<div class="image-container relative h-32 md:h-56 2xl:h-64">
			{#each images as image}
				<img src={image.url} alt={image.alt} class="rounded-t-3xl object-cover"/>
			{/each}
		</div>

	</div>
</div>
