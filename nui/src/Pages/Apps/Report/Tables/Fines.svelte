<script lang="ts">
	import {h} from 'gridjs';
	import Grid from 'gridjs-svelte';
	import {createEventDispatcher, onDestroy, onMount} from 'svelte';
	import {PoliceFines, Fines} from '../../../../store/store';

	let grid;
	const dispatch = createEventDispatcher();
	function closeModal(): void {
		open = false;
		dispatch('closeModal', {});
	}
	export let open = false;
	export let show = true;
	const columns = [
		'ID',
		'Label',
		{
			name: 'Amount',
		},
		'Jailtime',
		show
			? {
					name: 'Delete',
					formatter: (cell, row) => {
						return h(
							'button',
							{
								onClick: () => {
									//Add the Data to the array
									addData('delete', row.cells[0].data);
								},
							},
							'Delete'
						);
					},
			  }
			: {
					name: 'Add',
					formatter: (cell, row) => {
						return h(
							'button',
							{
								onClick: () => {
									//Add the Data to the array
									addData('add', row.cells[0].data);
								},
							},
							'Add'
						);
					},
			  },
	];
	function addData(type: string, data: number): void {
		if (type === 'add') {
			if (!$PoliceFines.some((e) => e.id === data)) {
				$PoliceFines.push($Fines[data - 1]);
				$PoliceFines = $PoliceFines;
			}
		} else if (type === 'delete') {
			$PoliceFines.splice(
				$PoliceFines.findIndex((e) => e.id === data),
				1
			);
			$PoliceFines = $PoliceFines;
			grid.forceRender();
		}
	}
	onMount(() => {
		grid.forceRender();
	});
</script>

{#if open}
	<div class="window absolute-center " style="max-width:200vh;width:100vh;max-height:70vh;">
		<div class="title-bar">
			<div class="title-bar-text">Fines Window</div>
			<div class="title-bar-controls">
				<button aria-label="Close" on:click={closeModal} />
			</div>
		</div>
		<div class="window-body">
			<Grid bind:instance={grid} data={show ? $PoliceFines : $Fines} sort {columns} search resizable pagination={{enabled: true, limit: 5}} />
		</div>
	</div>
{/if}
