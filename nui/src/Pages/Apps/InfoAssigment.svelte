<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import {fade} from 'svelte/transition';
	import Grid from 'gridjs-svelte';
	import ImagenShow from '../Apps/Report/Modals/ImagenShow.svelte';
	import {h} from 'gridjs';
	import {Reports} from '../../store/store';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let data = [];
	let container: HTMLDivElement;
	const closeModal = () => {
		open = false;
		dispatch('Close', {open});
		if (data !== undefined) {
			data[0].length = 0;
		}
	};
	function isObject(obj) {
		return JSON.stringify(obj);
	}

	function openImage(link: string, description: string): ImagenShow {
		let o = true;
		let m = new ImagenShow({
			target: container,
			props: {
				open: o,
				link: link,
				description: description,
			},
		});
		m.$on('closeModal', (e) => (o = false));
		return m;
	}
	const columns = [
		{
			id: 'id',
			name: 'ID',
		},
		{
			id: 'description',
			name: 'Description',
		},
		{
			id: 'link',
			formatter: (cell, row) => {
				return h(
					'button',
					{
						onClick: () => {
							//alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}"`);
							openImage(row.cells[2].data, row.cells[1].data);
						},
					},
					'Open'
				);
			},
		},
	];
	function tryJson(obs) {
		try {
			JSON.parse(obs);
		} catch (error) {
			return false;
		}
		return true;
	}
</script>

{#if open}
	<div class="modal-overlay" transition:fade={{duration: 100}}>
		<div bind:this={container} class="my-back fit" />
		<div class="modals window absolute-center" style:max-width="100vw" style:max-height="100vh">
			<div class="title-bar">
				<div class="title-bar-text">{data[0].id}</div>
				<div class="title-bar-controls">
					<button aria-label="Close" on:click|preventDefault={closeModal} />
				</div>
			</div>
			<div class="window-body" style="max-width:98%;max-height:98%">
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
						<fieldset class="full-width">
							<legend>Images:</legend>
							<Grid {columns} data={tryJson(data[0].data) === true ? JSON.parse(data[0].data).images : data[0].data.images} />
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
