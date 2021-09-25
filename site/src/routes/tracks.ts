import tracks from '$lib/spotify-data';

export async function get({ params }) {
	return {
		body: tracks
	};
}
