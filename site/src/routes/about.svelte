<script>
	import Seo from '../components/Seo.svelte';
	import SocialLinks from '../components/SocialLinks.svelte';
</script>

<Seo title="About Albin" />

<img
	src="https://res.cloudinary.com/albin-groen/image/upload/v1629360317/IMG_0366_feteec.jpg"
	class="object-cover object-top w-32 h-32 rounded-full"
	alt=""
/>

<div class="max-w-2xl mt-10">
	<h2 class="text-4xl font-semibold tracking-tight">Who am I</h2>
	<p class="mt-5 text-xl leading-relaxed text-gray-700">
		I am a he/him born and raised in a city around 1 hour away from Stockholm, Sweden. I have always
		been a very creative person, who loved drawing, painting, and building things at a early age.
		<br />
		<br />
		I got introduced to programming in high school and got really hooked on it. I started paying a lot
		of attention in class, and taught myself even more outside of school. I'd spend bus rides to and
		home from school working on small programs and websites, and even forget getting of at my stop. That's
		how amused I was of it all.
		<br />
		<br />
		I worked my ass off and managed to get my first developer job at a small startup when I was 17 years
		old, while I was still in high school. I'd go over to the office in between classes, and stay late
		nights working on our product. I loved it but I worked way too much, without the business ever really
		taking off.
		<br />
		<br />
		Today, after working at a larger company for a couple of years, I am back to a smaller company with
		similiar ambitions to modernize the recruiting industry, using technology. I quite like it, and I
		think I will stay for some time.
	</p>

	<div class="flex items-start mt-12 space-x-6 filter grayscale">
		<div class="space-y-6 flex-1">
			<img src="/demando.jpg" class="rounded-lg" alt="" />
			<img src="/demando_moving.jpg" class="rounded-lg" alt="" />
		</div>

		<div class="space-y-6 flex-1">
			<img src="/dooer.jpeg" class="rounded-lg" alt="" />
			<img src="/golf.jpg" class="rounded-lg" alt="" />
			<img src="/hackathon.jpg" class="rounded-lg" alt="" />
		</div>
	</div>

	<h2 class="text-4xl font-semibold tracking-tight mt-14">What do I do</h2>
	<p class="mt-5 text-xl leading-relaxed text-gray-700">
		The web is really in my core, and most of my creations are in fact for it. I am not tied to any
		specific frameworks, but I have a lot of experience with React. I have a really strong
		foundational knowledge of HTML, CSS3, JavaScript, and Typescript. I'm currently getting into
		Svelte, which I really enjoy, and think will be the next big popular framework in web
		development.
		<br />
		<br />
		I am a fairly well rounded software developer, and can work on "both" ends of the stack, the front-
		and back-end. Back-end wise I am very familiar with both NoSQL databases, as SQL ones. I've both
		written a lot of REST API:s, and a little bit of GraphQL as well.
		<br />
		<br />
		Since I have a good foundation of programming knowledge, I can easily adapt to new technologies,
		tools, and strategies.
	</p>
</div>

<SocialLinks />
