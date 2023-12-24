<script>
	export let label = 'Button';
	export let active = false;
	export let onClick = () => {}; // Accepts a callback function for click events
</script>

<button
	class="transition duration-300 ease-in-out text-white font-normal py-3 px-6 rounded-xl
         {active ? 'bg-zinc-800' : 'bg-zinc-900'}"
	on:click={onClick}>
	{label}
</button>