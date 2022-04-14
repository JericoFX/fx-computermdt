<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import {fade} from 'svelte/transition';
	export let open = false;
	const dispatch = createEventDispatcher();

	function changeLang() {}
	const closeModal = () => {
		open = false;
		dispatch('closeAbout', false);
	};
</script>

{#if open}
	<div transition:fade={{duration: 100}} class="absolute-center">
		<div class="window" style="max-width: 300px">
			<div class="title-bar">
				<div class="title-bar-text">A window with contents</div>
				<div class="title-bar-controls">
					<button aria-label="Close" on:click={closeModal} />
				</div>
			</div>
			<div class="window-body">
				<select name="" id="" />
			</div>
		</div>
	</div>
{/if}
