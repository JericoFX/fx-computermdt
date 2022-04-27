<script lang="ts">
	import {createEventDispatcher, onDestroy, onMount} from 'svelte';
	import Grid from 'gridjs-svelte';
	import {h} from 'gridjs';
	import {PoliceLists} from '../../../../store/store';
	export let open = false;
	export let polices = [];
	let grid;
	onDestroy(() => {
		$PoliceLists.length = 0;
	});
	onMount(() => {
		if (polices.length > 0) {
			grid.forceRender();
		}
	});
	const columns = [
		'Citizenid',
		'Name',
		'Lastname',
		'Rank',
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
	const dispatch = createEventDispatcher();
	function closeModal() {
		open = false;
		dispatch('closeModal', {});
	}
	function addData(id: number, name: string, lastName: string, rank: string) {
		//Check if the ID is already on the Array so no Duplicate Polices
		if (!$PoliceLists.some((e) => e.id === id)) {
			$PoliceLists.push({id: id, name: name, lastName: lastName, rank});
			$PoliceLists = $PoliceLists;
		}
	}
</script>

{#if open}
	<div class="window absolute-center " style="max-width:200vh;width:100vh;max-height:70vh;">
		<div class="title-bar">
			<div class="title-bar-text">Police Window</div>
			<div class="title-bar-controls">
				<button aria-label="Close" on:click={closeModal} />
			</div>
		</div>
		<div class="window-body">
			<Grid bind:instance={grid} data={polices} height="30vh" {columns} autoWidth fixedHeader />
			<section class="field-row" style="justify-content: space-around">
				<button on:click={closeModal}>Close</button>
			</section>
		</div>
	</div>
{/if}

<style>
</style>
