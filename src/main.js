import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		dateTime: 'void'
	}
});

export default app;