<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let open = false;
	export let obs = "";
	const dispatch = createEventDispatcher();
	function closeModal() {
		open = false;
		dispatch("closeModal");
	}
</script>

{#if open}
	<div
		class="window absolute-center"
		style="max-width: 30vw;max-height: 40vh;"
	>
		<div class="window-body" style="max-width:29vw ;max-height: 39vh;">
			<textarea
			disabled
				class="text-center text-h6 "
				name="obs"
				id="asd"
				cols="30"
				rows="10"
				style="max-width:28vw ;max-height: 35vh;"
			>
				{obs}
			</textarea>
			<section
				class="field-row"
				style="justify-content: space-around;align-content:center;"
			>
				<button on:click={closeModal}>Close</button>

				<!-- svelte-ignore a11y-label-has-associated-control -->
			</section>
		</div>
	</div>
{/if}
