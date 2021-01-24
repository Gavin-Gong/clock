<script>
	import { onDestroy } from "svelte"
	import dayjs from "dayjs"
	const interval = setInterval(() => dateTime = dayjs().format("YYYY-MM-DD hh:mm:ss"));
	onDestroy(() => clearInterval(interval));

	export let dateTime;
</script>

<main>
	<h1>{dateTime}</h1>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
		height: 100vh;
		font-family: monospace;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 8em;
		font-weight: 400;
		margin-top: -3em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>