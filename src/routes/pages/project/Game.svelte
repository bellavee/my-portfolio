<script>
import Card from '../../components/Card.svelte';
</script>

<div class="flex items-center gap-4">
	<div class="w-full">
		<Card title="Game 1" tags={['JavaScript', 'Python', 'Ruby']} />
	</div>
	<div class="w-full">
		<Card title="Game 2" tags={['C++', 'Java', 'Go']} />
	</div>
</div>