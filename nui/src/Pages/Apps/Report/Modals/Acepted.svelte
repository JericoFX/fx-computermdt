<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
	//Exporting the variables `open` and `message` so that they can be used in other files.
	export let open = false;
	export let message = '';
	//A function that is called when the OK button is clicked. It sets the value of `open` to false, and dispatches an event called `closeModal`.
	function closeModal() {
		open = false;
		dispatch('closeModal', {});
	}
</script>

{#if open}
	<div class="window absolute-center" style:max-width="100vh">
		<div class="title-bar" />
		<div class="window-body">
			{message}
			<section>
				<div class="field-row q-mt-lg" style="justify-content:center">
					<button on:click={closeModal}>OK</button>
				</div>
			</section>
		</div>
	</div>
{/if}
