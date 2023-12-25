<script>
import Card from '../../components/Card.svelte';
import dg_1 from '$lib/assets/project/games/dg_1.jpg'
import dg_2 from '$lib/assets/project/games/dg_2.jpg'
import pp_1 from '$lib/assets/project/games/pp_1.png'
import pp_2 from '$lib/assets/project/games/pp_2.png'
import rb_1 from '$lib/assets/project/games/rb_1.png'
import rb_2 from '$lib/assets/project/games/rb_2.png'
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<Card
		title="Dungeon Explorer"
		tags={['Unity', 'C#']}
		description="2D Top Shooter Game with Behavior Tree and State Machine"
		images={[{ url: dg_2, alt: 'Screenshot of Dungeon Explorer game' },
           { url: dg_1, alt: 'Another Screenshot of Dungeon Explorer game' }]}
		githubLink="https://github.com/Red-H-Star/ProjectAI"
	/>

	<Card
		title="Custom Engine"
		tags={['C++', 'DirectX12']}
		description="Custom engine with a rendering system"
		githubLink="https://github.com/bellavee/shoot-in-space"
	/>

	<Card
		title="PyPuzzle"
		tags={['Python', 'PyGame']}
		description="Block puzzle game"
		images={[{ url: pp_2, alt: 'Screenshot of PyPuzzle game' },
           { url: pp_1, alt: 'Another Screenshot of PyPuzzle game' }]}
		githubLink="https://github.com/bellavee/block-puzzle"
	/>

	<Card
		title="Ricochet Robots"
		tags={['Java', 'Java Swing']}
		description="Puzzle board game with solving system using A* path finding algorithm"
		images={[{ url: rb_1, alt: 'Screenshot of Ricochet Robots game' },
           { url: rb_2, alt: 'Another Screenshot of Ricochet Robots game' }]}
		githubLink="https://github.com/bellavee/block-puzzle"
	/>
</div>