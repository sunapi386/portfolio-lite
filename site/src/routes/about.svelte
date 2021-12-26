<script>
	import Seo from '../components/Seo.svelte';
	import SocialLinks from '../components/SocialLinks.svelte';
</script>

<Seo title="About Albin" />

<img
	src="https://res.cloudinary.com/albin-groen/image/upload/v1629360317/IMG_0366_feteec.jpg"
	class="object-cover object-top w-32 h-32 rounded-full"
	alt="Albin Groen avatar"
/>

<div class="max-w-2xl mt-10">
	<h2 class="text-4xl font-semibold tracking-tight">Who am I?</h2>
	<p class="mt-5 text-xl leading-relaxed text-gray-700">
		I'm a 22 y/o guy from a city outside Stockholm. I have always been very creative, and loved to
		draw, paint, and build things growing up.
		<br />
		<br />
		I got introduced to programming in high school and got really hooked on it. I started paying a lot
		of attention in class, and taught myself more at home. I would spend bus rides to and home from school
		working on small programs and websites, and even forget getting of at my stop. That's how amused
		I was of it all.
		<br />
		<br />
		I worked a lot to learn the fundamentals of web development, and even managed to get my first developer
		job at a small startup in my city when I was only 17 years old. I would go over to the office in
		between classes, and stay late nights working on our product. I loved it but I worked way too much...
		<br />
		<br />
		Today, after working at a larger company for a couple of years, I am back to a smaller company with
		similar ambitions to modernize the recruiting industry. I quite like it, and I think I will stay
		for some time.
		<br />
		<br />
		In my spare time I like to surround myself with like-minded people who really love tech and design
		as much as I do. I enjoy going to (and organizing) meetups, building open source software, and teaching
		others to code. When I'm not at the computer, I enjoy spending time with friends, rock-climbing,
		eating good food, and traveling.
		<br />
		<br />
		Wanna get in touch?
		<a class="link" href="https://twitter.com/albingroen">Hit me up on Twitter &rarr;</a>
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

	<h2 class="text-4xl font-semibold tracking-tight mt-14">What do I do?</h2>
	<p class="mt-5 text-xl leading-relaxed text-gray-700">
		Most of the work I do involves the web in some sort of way. I am not especially bound to any
		specific framework, because I have really good foundational knowledge of HTML, CSS and
		JavaScript. I do however have around 4 years of experience working professionally with React.
		Something new I'm trying out the moment is a new web framework called Svelte. It's pretty cool!
		<br />
		<br />
		I would say I am a fairly well rounded software developer, and can work on both ends of the web stack,
		the front- and back-end. Back-end wise I am pretty familiar with both NoSQL databases, as SQL ones.
		In my work I've both written a lot of REST API:s, and a little bit of GraphQL as well.
		<br />
		<br />
		Since I have a good foundation of programming knowledge, I can easily adapt to new technologies,
		tools, and strategies.
		<br />
		<br />
		Wanna get in touch?
		<a class="link" href="https://twitter.com/albingroen">Hit me up on Twitter &rarr;</a>
	</p>
</div>

<SocialLinks />
