<script lang="ts">
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();
	export let open = false;
	export let nameSearch = '';
	const closeModal = () => {
		open = false;
		dispatch('closeBar', false);
	};
</script>

{#if open}
	<div class="absolute-center fit">
		<div class="window is-bright absolute-center" style:max-width="100vh" style:width="20%">
			<div class="title-bar">
				<div class="title-bar-text" id="dialog-title">Searching...</div>
				<div class="title-bar-controls">
					<button />
				</div>
			</div>
			<div class="window-body">
				<h2 class="instruction instruction-primary">Searching for {nameSearch}</h2>
				<div role="progressbar" class="marquee" />
			</div>
			<footer style="text-align: right">
				<button on:click={closeModal}>Cancel</button>
			</footer>
		</div>
	</div>
{/if}

<style>

</style>
