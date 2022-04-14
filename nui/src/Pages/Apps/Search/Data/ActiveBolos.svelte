<script lang="ts">
	import {push} from 'svelte-spa-router';
	import {createEventDispatcher} from 'svelte';
	import Grid from 'gridjs-svelte';
	import {h} from 'gridjs';
	import Searched from '../../Report/Tables/Searched.svelte';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let data = [];

	const columns = [
		{
			id: 'id',
			name: 'ID',
		},
		{
			id: 'title',
			name: 'Title',
		},
		{
			id: 'data',
			name: 'Data',
			formatter: (cell, row) => {
				return h(
					'button',
					{
						onClick: () => {
							openViewData(row.cells[2].data);
						},
					},
					'View'
				);
			},
		},
	];
	function openViewData(data: []): Searched {
		let open = true;

		let m = new Searched({
			target: document.getElementById('id'),
			props: {
				open: open,
				data: data,
			},
		});
		m.$on('closeModal', () => (open = false));
		return m;
	}
	function closeModal() {
		open = false;
		dispatch('closeModal');
	}
</script>

{#if open}
	<div class="window absolute-center" style:max-width="100vh">
		<div class="title-bar">
			<div class="title-bar-text">Search Window</div>
			<div class="title-bar-controls">
				<button aria-label="Close" on:click|preventDefault={closeModal} />
			</div>
		</div>
		<div class="window-body">
			<Grid data={data || []} {columns} search pagination={{enabled: true, limit: 4}} />
		</div>
	</div>
	<div id="id" />
{/if}
