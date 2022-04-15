<script lang="ts">
	import {push} from 'svelte-spa-router';
	import {createEventDispatcher} from 'svelte';
	import Grid from 'gridjs-svelte';
	import {h} from 'gridjs';
	import ObservationsModal from "../../Report/Modals/ObservationsModal.svelte"
	import Searched from '../../Report/Tables/Searched.svelte';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let data = [];
let container
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
			id: 'observations',
			name: 'Observations',
			formatter: (cell, row) => {
				return h(
					'button',
					{
						onClick: () => {
							openInformation(row.cells[2].data);
						},
					},
					'Open'
				);
			},
		},
		{
			id: 'data',
			name: 'Data',
			formatter: (cell, row) => {
				return h(
					'button',
					{
						onClick: () => {
							openViewData(row.cells[3].data);
						},
					},
					'View'
				);
			},
		},
	];
		function openInformation(obs: string): ObservationsModal {
		let open = true;
		console.log(obs)
		let m = new ObservationsModal({
			target: container,
			props: { open: open, obs: obs },
		});
		m.$on("closeModal", () => (open = false));
		return m;
	}
	function openViewData(data: []): Searched {
		let open = true;

		let m = new Searched({
			target: container,
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
	<div bind:this={container} class="window absolute-center" style:max-width="100vh">
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

{/if}
