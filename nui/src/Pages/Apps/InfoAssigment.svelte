<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import {fade} from 'svelte/transition';

	const dispatch = createEventDispatcher();
	export let open = false;
	export let data = [];
	const closeModal = () => {
		open = false;
		dispatch('Close', {open});
		data.length = 0;
	};
</script>

{#if open}
	<div class="modal-overlay" transition:fade={{duration: 100}}>
		<div class="my-back fit" />
		<div class="modals window absolute-center">
			<div class="title-bar">
				<div class="title-bar-text">{data[0].id}</div>
				<div class="title-bar-controls">
					<button aria-label="Close" on:click|preventDefault={closeModal} />
				</div>
			</div>
			<div class="window-body">
				<fieldset>
					{#each data as d}
						<div class="field-row" style="">
							<p class="text-bold text-subtitle1">{d.callsign === '' || d.callsign === undefined ? 'Not Taked' : `Taked By: ${d.callsign}`}</p>
						</div>
						<div class="field-row" style="">
							<p class="text-bold text-subtitle1">Street: {d.location}</p>
						</div>
						<fieldset>
							<legend> observations </legend>
							<div class="field-row">
								<p class="text-bold text-h6">
									{d.observations}
								</p>
							</div>
						</fieldset>
					{/each}
				</fieldset>

				<section class="field-row" style="display: flex;align-items: center;flex-direction: row;flex-wrap: nowrap;justify-content: space-around;">
					<button on:click={closeModal}>Close</button>
					<!-- svelte-ignore a11y-label-has-associated-control -->
				</section>
			</div>
		</div>
	</div>
{/if}

<style>
	.modals {
		position: absolute;
		max-width: 537px;
		max-height: 500px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.59);
		border-radius: 10px;
	}
	.my-back {
		background-color: rgba(255, 255, 55, 0.0001) !important;
	}
	.modal-overlay {
		z-index: 1000;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #00000080 !important;
	}
</style>
