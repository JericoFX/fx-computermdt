<script lang="ts">
	import {fetchNui} from '../../../../utils/fetchNui';
	import {createEventDispatcher, onDestroy} from 'svelte';
	import {PoliceEvidence} from '../../../../store/store';
	import Grid from 'gridjs-svelte';
	import {h} from 'gridjs';
	import {isEnvBrowser} from '../../../../utils/misc';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let Evidence = [];
	export let viewEvidence = false;
	let grid;
	let columns;
	$: if (!viewEvidence) {
		columns = [
			'ID',
			'Label',
			'Street',
			'Type',
			{
				name: 'Action',
				formatter: (cell, row) => {
					return h(
						'button',
						{
							onClick: () => {
								//Add the Data to the array
								addData(row.cells[0].data, row.cells[1].data, row.cells[2].data, row.cells[3].data);
							},
						},
						'Add'
					);
				},
			},
		];
	} else {
		columns = [
			'ID',
			'Label',
			'Street',
			'Type',
			{
				name: 'Action',
				formatter: (cell, row) => {
					return h(
						'button',
						{
							onClick: () => {
								//alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}"`);
								deleteData(row.cells[0].data);
							},
						},
						'Delete'
					);
				},
			},
		];
	}
	onDestroy(() => {
		$PoliceEvidence.length = 0;
		console.log('CALLED EVIDENCE');
	});
	function addData(id: string, label: string, street: string, type: string): boolean {
		//Check if the ID is already on the Array so no Duplicate Evidence
		if (!$PoliceEvidence.some((e) => e.id === id)) {
			$PoliceEvidence.push({id, label, street, type});
			$PoliceEvidence = $PoliceEvidence;
		}
		return true;
	}
	async function deleteData(data1: string): void {
		$PoliceEvidence.splice(
			$PoliceEvidence.findIndex((e) => e.id === data1),
			1
		);
		// $PoliceEvidence.filter((data) => data.id !== data1);
		$PoliceEvidence = $PoliceEvidence;
		await grid.forceRender();
	}
	function closeModal() {
		open = false;
		dispatch('closeModal', {});
	}
</script>

{#if open}
	<div class="window absolute-center " style="max-width:100vh;width:70vh;max-height:70vh;">
		<div class="title-bar">
			<div class="title-bar-text">Evidence Window</div>
			<div class="title-bar-controls">
				<button aria-label="Minimize" />
				<button aria-label="Maximize" />
				<button aria-label="Close" on:click={closeModal} />
			</div>
		</div>
		<div class="window-body">
			<Grid bind:instance={grid} data={Evidence} {columns} height="30vh" fixedHeader />
			<section class="field-row" style="justify-content: space-around">
				<button on:click={closeModal}>Close</button>
				<!-- <button on:click={loadEvidences}>Load Evidences</button> -->
			</section>
		</div>
	</div>
{/if}
