<script context="module" lang="ts">
	import Seo from '../components/Seo.svelte';
	import SocialLinks from '../components/SocialLinks.svelte';
	import SpotifyLikedSongs from '../components/SpotifyLikedSongs.svelte';

	export const prerender = true;

	const pages = [
		{
			label: 'About me',
			href: '/about'
		},
		{
			label: 'Resumé',
			href: 'https://cv.albingroen.com'
		},
		{
			label: 'Articles',
			href: 'https://blog.albingroen.com'
		},
		{
			label: 'Uses',
			href: '/uses'
		}
	];

	const projects = [
		{
			title: 'utilcomps',
			description: 'Utilitarian component library written in Svelte, for Svelte',
			href: 'https://github.com/albingroen/utilcomps'
		},
		{
			title: 'Närspelsappen',
			description: 'An app for helping golfers get better around the green',
			href: 'https://narspelsappen.albingroen.com'
		},
		{
			title: 'Feedback Finder',
			description: 'Phygital service for businesses to collect customer feedback',
			href: 'https://feedbackfinder.io'
		},
		{
			title: 'John',
			description: 'Online health tracker website to help you live a better life, day by day',
			href: 'https://johnapp.vercel.app'
		},
		{
			title: 'xhr.sh',
			description: 'Web based, open, HTTP client website to use for testing APIs',
			href: 'https://www.xhr.sh'
		},
		{
			title: 'Cryptoprices',
			description: 'Open website for tracking every cryptocurrency price and history',
			href: 'https://cryptoprices.vercel.app'
		},
		{
			title: 'Keyboardnotes',
			description: 'Keyboard-driven note-taking application for the web',
			href: 'https://keyboardnotes.io'
		},
		{
			title: 'referrer.sh',
			description: 'Widget creator to help you promote your friends looking for work',
			href: 'https://referrer.sh'
		},
		{
			title: 'Secretely',
			description: 'Easy to use web based password management application',
			href: 'https://secretely.com'
		}
	];

	const workHistory = [
		{
			title: 'Demando',
			description:
				'Working as a Full Stack Developer on a web recruiting platform built using React.js and Typescript for the frontend, and Node.js, Typescript, GraphQL, and PostgresQL for the backend. Getting familiar with GCP (Google Cloud Platform.) and having the oppurtunity to influence a lot on design and architecture.',
			date: '2021 - Current'
		},
		{
			title: 'Dooer',
			description:
				'Lead frontend development architecture and decision making in an R&D team in fall of 2020. Some of the things I introduced include an organized design system and a new state management tool. This helped peers be more productive and less unsure about what technologies to use.',
			date: 'Aug 2019 - Jun 2021'
		},
		{
			title: 'Wopify',
			description:
				'Re-designed the business-facing recruiting application in close contact with stakeholders such as the CEO, CTO, and co-founder.',
			date: 'Jan 2018 - Jun 2019'
		}
	];
</script>

<Seo title="Start" />

<div class="flex flex-col lg:flex-row lg:items-end lg:justify-between">
	<div class="flex-1">
		<div>
			<img
				src="https://res.cloudinary.com/albin-groen/image/upload/v1629360317/IMG_0366_feteec.jpg"
				class="object-cover object-top w-32 h-32 rounded-full"
				alt=""
			/>

			<h1 class="mt-10 text-4xl font-semibold tracking-tight">Hello, I'm Albin</h1>
		</div>
	</div>

	<div class="flex flex-col mt-10 lg:mt-0 w-[330px]">
		{#each pages as page}
			<a
				class="font-medium py-0.5 text-gray-400 hover:text-black transition text-2xl"
				href={page.href}>{page.label}</a
			>
		{/each}
	</div>
</div>

<div class="mt-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-20">
	<div>
		<h2 class="text-2xl font-medium">Projects</h2>

		<div class="mt-8 space-y-6">
			{#each projects as project}
				<a target="_blank" rel="noopener noreferrer" class="block" href={project.href}>
					<h3 class="text-xl font-semibold">{project.title}</h3>
					<p class="mt-1 text-gray-700">{project.description}</p>
				</a>
			{/each}
		</div>
	</div>

	<div>
		<h2 class="text-2xl font-medium">Work history</h2>

		<div class="mt-8 space-y-6">
			{#each workHistory as workPlace}
				<div>
					<h3 class="text-xl font-semibold">{workPlace.title}</h3>
					<p class="mt-1 text-gray-700">
						{workPlace.description} <span class="opacity-50">{workPlace.date}</span>
					</p>
				</div>
			{/each}
		</div>
	</div>

	<div>
		<p class="text-2xl font-medium leading-relaxed">
			I'm a Swedish/Dutch guy living in the Stockholm area. I build things for the web and for
			mobile devices.
		</p>

		<div class="mt-12 filter grayscale hover:filter-none transition">
			<SpotifyLikedSongs />
		</div>
	</div>
</div>

<SocialLinks />
