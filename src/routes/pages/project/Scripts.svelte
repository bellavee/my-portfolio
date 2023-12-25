<script>
	import Card from '../../components/Card.svelte';
	import Tag from '../../components/Tag.svelte';
</script>

<div class="grid grid-cols-1 mb-4">
	<div class="w-full">
		<div class="bg-navy-800 rounded-3xl shadow-md mx-auto p-10">
			<p class="text-white font-extralight">
				Some useful scripts make my life easier
			</p>
		</div>
	</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<Card
		title="Ebook Tools"
		tags={['Python']}
		description="EPUB Maker from TXT and reformatted TXT"
		githubLink="https://github.com/bellavee/python-scripts"
	/>

	<Card
		title="Game Helper"
		tags={['Python']}
		description="Automated managing my game accounts"
		githubLink="https://github.com/bellavee/python-scripts"
	/>
</div>