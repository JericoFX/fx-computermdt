<script lang="ts">
	import Grid from 'gridjs-svelte';
	import {h} from 'gridjs';
	import {PoliceLists} from '../../../../store/store';
	import {createEventDispatcher} from 'svelte';
	export let open = false;

	const dispatch = createEventDispatcher();
	let grid;
	const columns = [
		'ID',
		'Name',
		'Last Name',
		'Rank',
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
	function deleteData(data1: string) {
		$PoliceLists.splice(
			$PoliceLists.findIndex((e) => e.id === data1),
			1
		);
		// $PoliceLists.filter((data) => data.id !== data1);
		$PoliceLists = $PoliceLists;
		grid.forceRender();
	}
	function closeModal() {
		open = false;
		dispatch('closeModal', {});
	}
</script>

{#if open}
	<div class="window absolute-center" style="max-width:100vh;">
		<div class="title-bar">
			<div class="title-bar-text">$_('polices-added')</div>
			<div class="title-bar-controls">
				<button aria-label="Close" on:click={closeModal} />
			</div>
		</div>
		<div class="window-body">
			<Grid bind:instance={grid} data={$PoliceLists} {columns} height="30vh" fixedHeader />
			<section class="field-row" style="justify-content: flex-end">
				<button on:click={closeModal}>Close</button>
			</section>
		</div>
	</div>
{/if}
