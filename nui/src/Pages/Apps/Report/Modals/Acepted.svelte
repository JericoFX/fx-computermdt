<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let message = '';
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
