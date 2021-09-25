<script>
	const links = [
		{
			href: 'https://github.com/albingroen',
			label: 'GitHub'
		},
		{
			href: 'https://twitter.com/albingroen',
			label: 'Twitter'
		},
		{
			href: 'https://dribbble.com/albingroen',
			label: 'Dribbble'
		},
		{
			href: 'https://linkedin.com/in/albingroen',
			label: 'LinkedIn'
		}
	];
</script>

<hr class="mt-12 border-dashed" />

<div class="flex mt-8 space-x-2">
	{#each links as link, i}
		{#if i}
			<span class="text-blue-600 opacity-30">&bull;</span>
		{/if}

		<a target="_blank" rel="noopener noreferrer" class="text-lg link" href={link.href}
			>{link.label}</a
		>
	{/each}
</div>
