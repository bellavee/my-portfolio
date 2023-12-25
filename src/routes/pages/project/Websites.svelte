<script>
import Card from '../../components/Card.svelte';
import ta_2 from '$lib/assets/project/websites/ta_2.png';
import ta_1 from '$lib/assets/project/websites/ta_1.png';
import se_1 from '$lib/assets/project/websites/se_1.png';
import se_2 from '$lib/assets/project/websites/se_2.png';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<Card
		title="Schedule Employees’"
		tags={['Java', 'Spring Boot', 'Thymeleaf', 'HTMX', 'PostgreSQL']}
		description="Scheduled employees’ work hours and positions"
		images={[{ url: se_1, alt: 'Screenshot of Schedule Employees’' },
           { url: se_2, alt: 'Another Screenshot of Schedule Employees’' }]}
		githubLink="https://github.com/free-lancer-france/schedule-app"
	/>

	<Card
		title="Twitter Alarm"
		tags={['JavaScript', 'React', 'Tailwind CSS', 'Express.js', 'MongoDB']}
		description="Alerted words, hashtags that you want to follow on Twitter"
		images={[{ url: ta_1, alt: 'Screenshot of Twitter Alarm' },
           { url: ta_2, alt: 'Another Screenshot of Twitter Alarm' }]}
		githubLink="https://github.com/Finn-Vee-Axel-Mat/twitter-alarm"
	/>
</div>