<script lang="ts">
	import {createEventDispatcher} from 'svelte';

	export let open = false;
	const dispatch = createEventDispatcher();

	const closeModal = () => {
		open = false;
		dispatch('closeAbout', false);
	};
</script>

{#if open}
	<div class="absolute-center">
		<div class="window" style="max-width: 300px">
			<div class="title-bar">
				<div class="title-bar-text">A window with contents</div>
				<div class="title-bar-controls">
					<button aria-label="Close" on:click={closeModal} />
				</div>
			</div>
			<div class="window-body">
				<p>Report Tool, here you can create a Report with all the details.</p>
			</div>
		</div>
	</div>
{/if}
