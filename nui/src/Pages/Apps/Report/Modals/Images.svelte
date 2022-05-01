<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import {PoliceImages} from '../../../../store/store';
	import Grid from 'gridjs-svelte';
	import {h} from 'gridjs';
	import ImagenShow from './ImagenShow.svelte';
	const dispatch = createEventDispatcher();
	let container;
	export let open = false;
	function closeModal() {
		open = false;
		dispatch('closeModal', {});
	}
	let grid;
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
	function deleteIMG(id: string) {
		if ($PoliceImages.some((e) => e.id === id)) {
			let data = $PoliceImages.findIndex((e) => e.id === id);
			$PoliceImages.splice(data, 1);
			$PoliceImages = $PoliceImages;
		}
	}
</script>

{#if open}
	<div bind:this={container} class="window absolute-center" style:max-width="70%" style:width="60%">
		<div class="title-bar">
			<div class="title-bar-text">Player ID</div>
			<div class="title-bar-controls">
				<button aria-label="Close" on:click={closeModal} />
			</div>
		</div>
		<div class="window-body">
			<Grid bind:instance={grid} data={$PoliceImages || []} {columns} height="30vh" fixedHeader />
		</div>
	</div>
{/if}
