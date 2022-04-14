<script lang="ts">
	import {push} from 'svelte-spa-router';

	const dispatch = createEventDispatcher();
	import {_} from '../../../utils/i18n';
	import {createEventDispatcher} from 'svelte';
	export let open = false;
	export let message = '';
	function addBolo() {
		open = false;
		dispatch('addObservations', {message});
	}
	function closeModal() {
		open = false;
	}
</script>

{#if open}
	<div class="window absolute-center" style="max-width:80vw;max-height:80vh;">
		<div class="title-bar">
			<div class="title-bar-text" />
			<div class="title-bar-controls">
				<button aria-label="Close" on:click|preventDefault={() => push('/')} />
			</div>
		</div>
		<div class="window-body" style="width:95%;height:95%">
			<div class="field-row row wrap" style="justify-content:space-around;">
				<fieldset>
					<textarea bind:value={message} class="fit" name="" id="" cols="30" rows="10" />
				</fieldset>
			</div>
			<section class="field-row" style="display: flex;align-items: center;flex-direction: row;flex-wrap: nowrap;justify-content: space-around;">
				<button on:click={addBolo}> Create </button>
				<button on:click={closeModal}> Cancel</button>
				<!-- svelte-ignore a11y-label-has-associated-control -->
			</section>
		</div>
	</div>
{/if}

<style>
	.label {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		text-align: left;
		width: 120px;
		line-height: 26px;
		margin-bottom: 10px;
	}
	.input {
		flex: 0 0 200px;
		margin-left: 1px;
	}
</style>
