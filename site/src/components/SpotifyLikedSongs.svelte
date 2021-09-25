<script lang="ts">
	import { truncate } from '$lib/truncate';

	const fetchTracks = (async () => {
		const response = await fetch('/tracks');
		return await response.json();
	})();
</script>

{#await fetchTracks}
	<p>...waiting</p>
{:then data}
	<div class="flex flex-col rounded-lg overflow-hidden w-full max-w-xs h-72 shadow-2xl relative">
		<div
			class="flex space-x-1.5 items-center py-2 px-3 bg-gradient-to-t from-green-600 to-green-400 shadow"
		>
			<img
				src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
				class="h-5"
				alt=""
			/>
			<div class="h-4 bg-white bg-opacity-20 w-px" />
			<h4 class="text-sm text-green-100">Liked songs</h4>
		</div>

		<div
			class="flex flex-col divide-y divide-gray-800 overflow-y-auto bg-gray-900 rounded-b-lg scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700"
		>
			<div
				class="absolute bottom-0 left-0 w-full bg-gradient-to-t pointer-events-none rounded-b-lg from-gray-900 h-12"
			/>

			{#each data.tracks.items as track}
				<a
					class="flex items-center space-x-3 py-2 px-3 group cursor-pointer hover:bg-gray-800 transition"
					href={track.track.external_urls.spotify}
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						class="w-9 h-9 rounded-sm object-cover object-center"
						alt={`${track.track.album.name} album art`}
						src={track.track.album.images?.[0].url}
					/>

					<div class="flex flex-col items-start">
						<p
							class="text-gray-400 text-base group-hover:text-white transition whitespace-nowrap overflow-hidden"
						>
							{truncate(track.track.name, 20)}
						</p>

						<p class="text-gray-500 text-sm">
							{#each track.track.artists as artist, i}
								{#if i}
									<span>,</span>
								{/if}

								{artist.name}
							{/each}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
{:catch error}
	<p>An error occurred!</p>
{/await}
