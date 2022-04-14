<script lang="ts">
	import {h} from 'gridjs';
	import Grid from 'gridjs-svelte';
	import {createEventDispatcher, onMount} from 'svelte';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let data = [];
	function closeModal() {
		open = false;
		dispatch('closeModal', {});
	}
	let grid;
	const columns = [
		{
			id: 'Name',
			name: 'Name',
		},
		{
			id: 'LastName',
			name: 'Last Name',
		},
		{
			id: 'CitizenID',
			name: 'CitizenID',
		},
		{
			name: 'Data',
			formatter: (cell, row) => {
				return h(
					'button',
					{
						onClick: () => {
							//Add the Data to the array
							//addData(row.cells[0].data, row.cells[1].data, row.cells[2].data, row.cells[3].data);

							sendData(row.cells[0].data, row.cells[1].data, row.cells[2].data);
						},
					},
					'Select'
				);
			},
		},
	];
	function sendData(Name: string, LastName: string, citizenid: string) {
		open = false;
		dispatch('sendData', {Name, LastName, citizenid});
		//open = false;
	}
</script>

{#if open}
	<div class="window absolute-center" style:max-width="100vh">
		<div class="title-bar">
			<div class="title-bar-text">Player ID</div>
			<div class="title-bar-controls">
				<button aria-label="Close" on:click={closeModal} />
			</div>
		</div>
		<div class="window-body">
			<Grid bind:instance={grid} {data} {columns} pagination={{enabled: true, limit: 5}} />
		</div>
	</div>
{/if}
