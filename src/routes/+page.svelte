<script>
	import Navigation from './components/Navigation.svelte';
	import Project from './pages/Project.svelte';
	import Presentation from './pages/Presentation.svelte';
	import Footer from './pages/Footer.svelte';
</script>

<style>
    /* Local styles */
</style>

<Navigation/>

<div class="bg-zinc-900 pt-16">

	<Presentation/>
	<Project/>
	<Footer/>

</div>
