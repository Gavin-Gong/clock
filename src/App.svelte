<script>
	import { onDestroy } from "svelte"
	import dayjs from "dayjs"
	import Progress from "./Progress.svelte"

	onDestroy(() => clearInterval(interval));

	const interval = setInterval(() => dateTime = dayjs().format("MM-DD HH:mm:ss"));
	function handleFullScreen() {
		if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		}
	}
	export let dateTime;
</script>

<main>
	<h1 class="tick" on:dblclick={handleFullScreen} >{dateTime}</h1>
	<Progress />
</main>

<style>
	@font-face {
		font-family: 'LESLIE';
		src: url("/assets/LESLIE Regular.ttf")
	}
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
		font-family: Cascadia Code,  Fira Code iScript, Menlo, Monaco, 'Courier New', monospace;
		background: #333;
	}
	.tick {
		font-family: LESLIE, monospace;
	}

	h1 {
		color: #ddd;
		text-transform: uppercase;
		font-size: 8em;
		font-weight: 400;
		margin-top: -2em;
		cursor: pointer;
		-webkit-user-select: none;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>