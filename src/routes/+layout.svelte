<script>
	import '../app.css';
	import KlLatexFavi from '$lib/assets/KlLatexFavi.png';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={KlLatexFavi} />
</svelte:head>

{@render children()}
